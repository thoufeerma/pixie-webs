"use client";

import ProcessOrb from "./ProcessOrb";

export default function ProcessVisualCanvas({ activeIndex }: { activeIndex: number }) {
  return (
    <div className="flex-1 w-full flex items-start justify-center pointer-events-none relative z-10 mt-10 md:mt-12">
      {/* 
        This wrapper creates a dedicated visual canvas for the 3D scene.
        By using pointer-events-none on the wrapper, we ensure it doesn't block vertical scrolling on mobile touch screens.
        If the 3D object requires user interaction, pointer-events-auto can be enabled on the child.
      */}
      <div className="w-full pointer-events-auto">
        <ProcessOrb activeIndex={activeIndex} />
      </div>
    </div>
  );
}
