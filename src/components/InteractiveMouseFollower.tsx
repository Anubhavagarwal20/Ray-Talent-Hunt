import React, { useEffect, useRef } from 'react';

export const InteractiveMouseFollower: React.FC = () => {
  const followerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on desktop devices with a precision mouse pointer
    if (typeof window === 'undefined') return;
    const hasFinePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!hasFinePointer) return;

    // Check prefers-reduced-motion
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const el = followerRef.current;
    if (!el) return;

    let targetX = -500;
    let targetY = -500;
    let currentX = -500;
    let currentY = -500;
    let animationFrameId: number;
    let isVisible = false;

    const handleMouseMove = (e: MouseEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!isVisible) {
        isVisible = true;
        el.style.opacity = '1';
      }
    };

    const handleMouseLeave = () => {
      isVisible = false;
      el.style.opacity = '0';
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    document.addEventListener('mouseleave', handleMouseLeave);

    const updatePosition = () => {
      // Smooth linear interpolation (lerp)
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;
      
      // Direct transform update avoids 60Hz React re-rendering
      el.style.transform = `translate3d(${currentX - 250}px, ${currentY - 250}px, 0)`;
      animationFrameId = requestAnimationFrame(updatePosition);
    };

    animationFrameId = requestAnimationFrame(updatePosition);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div
      ref={followerRef}
      aria-hidden="true"
      className="fixed top-0 left-0 pointer-events-none z-30 opacity-0 transition-opacity duration-300 will-change-transform"
      style={{
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(56, 189, 248, 0.16) 0%, rgba(2, 132, 199, 0.04) 45%, transparent 70%)',
        borderRadius: '50%',
        filter: 'blur(35px)'
      }}
    />
  );
};
