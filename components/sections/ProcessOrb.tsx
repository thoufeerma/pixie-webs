"use client";

import dynamic from 'next/dynamic';
import { useRef, useEffect } from 'react';
import { useInView, motion } from 'framer-motion';

// Lazy load the Spline component to prevent it from blocking the main thread during initial load
const Spline = dynamic(() => import('@splinetool/react-spline'), {
  ssr: false,
});

export default function ProcessOrb({ activeIndex = 0 }: { activeIndex?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  
  // Only render the Spline scene when it's relatively close to entering the viewport.
  // margin: "800px" ensures it starts loading right before the user scrolls to it.
  const isInView = useInView(ref, { once: true, margin: "800px" });

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    // Capture wheel events to prevent Spline from zooming, allowing normal page scroll
    const handleWheel = (e: WheelEvent) => {
      e.stopPropagation();
    };

    // Capture touch events to prevent pinch-to-zoom in Spline
    const handleTouch = (e: TouchEvent) => {
      if (e.touches.length > 1) {
        e.stopPropagation();
      }
    };

    // Attach listeners in the capture phase so they run BEFORE Spline's canvas listeners
    container.addEventListener('wheel', handleWheel, { capture: true, passive: true });
    container.addEventListener('touchstart', handleTouch, { capture: true, passive: true });
    container.addEventListener('touchmove', handleTouch, { capture: true, passive: true });

    return () => {
      container.removeEventListener('wheel', handleWheel, { capture: true });
      container.removeEventListener('touchstart', handleTouch, { capture: true });
      container.removeEventListener('touchmove', handleTouch, { capture: true });
    };
  }, []);

  // Define visual states for the orb based on the active process stage
  const stageStates = [
    { scale: 1.0, brightness: 1.0, saturate: 1.0, rotate: 0, glowOpacity: 0.02, glowScale: 1.0 },
    { scale: 1.02, brightness: 1.05, saturate: 1.1, rotate: 45, glowOpacity: 0.03, glowScale: 1.1 },
    { scale: 1.05, brightness: 1.1, saturate: 1.2, rotate: 120, glowOpacity: 0.04, glowScale: 1.2 },
    { scale: 1.08, brightness: 1.15, saturate: 1.3, rotate: 220, glowOpacity: 0.06, glowScale: 1.3 },
  ];

  const currentState = stageStates[activeIndex] || stageStates[0];

  return (
    <div 
      ref={ref} 
      className="w-full h-[320px] md:h-[450px] lg:h-[600px] flex items-center justify-center relative bg-transparent overflow-visible"
    >
      {/* Dynamic Ambient Glow locked behind the orb */}
      <motion.div 
        className="absolute top-1/2 left-1/2 w-[500px] h-[500px] md:w-[800px] md:h-[800px] bg-[radial-gradient(circle_at_center,_var(--color-accent)_0%,_#3b82f6_50%,_transparent_80%)] blur-[120px] md:blur-[200px] rounded-full pointer-events-none"
        initial={false}
        animate={{ 
          opacity: currentState.glowOpacity,
          scale: currentState.glowScale,
          x: "-50%",
          y: "-50%"
        }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />

      <div className="w-full h-full origin-top scale-[0.80] md:scale-[0.70] -translate-y-20 md:-translate-y-24 lg:-translate-y-32">
        <motion.div
          className="w-full h-full"
          initial={false}
          animate={{
            scale: currentState.scale,
            rotate: currentState.rotate,
            filter: `brightness(${currentState.brightness}) saturate(${currentState.saturate})`
          }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          onPointerEnter={(e) => {
            const canvas = ref.current?.querySelector('canvas');
            if (canvas) {
              canvas.dispatchEvent(new PointerEvent('pointerdown', {
                pointerId: e.pointerId,
                bubbles: true,
                cancelable: true,
                clientX: e.clientX,
                clientY: e.clientY,
                button: 0,
                buttons: 1
              }));
            }
          }}
          onPointerLeave={(e) => {
            const canvas = ref.current?.querySelector('canvas');
            if (canvas) {
              canvas.dispatchEvent(new PointerEvent('pointerup', {
                pointerId: e.pointerId,
                bubbles: true,
                cancelable: true,
                clientX: e.clientX,
                clientY: e.clientY,
                button: 0,
                buttons: 0
              }));
            }
          }}
        >
          {isInView && (
            <Spline 
              scene="/glassorb.splinecode" 
            />
          )}
        </motion.div>
      </div>
    </div>
  );
}
