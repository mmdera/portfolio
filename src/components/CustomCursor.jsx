import React, { useEffect, useRef } from 'react';

export default function CustomCursor() {
  const dotRef = useRef(null);
  const followerRef = useRef(null);
  const badgeTextRef = useRef(null);

  useEffect(() => {
    // Check if device supports fine hover
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isTouch || prefersReducedMotion) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let followerX = mouseX;
    let followerY = mouseY;
    let lastTime = performance.now();
    let lastX = mouseX;
    let lastY = mouseY;
    let isMouseDown = false;
    let rafId = null;

    let targetAngle = 0;
    let currentAngle = 0;
    let currentScaleX = 1;
    let currentScaleY = 1;

    const onMouseDown = () => {
      isMouseDown = true;
      if (followerRef.current) {
        followerRef.current.classList.add('is-dragging');
      }
    };

    const onMouseUp = () => {
      isMouseDown = false;
      if (followerRef.current) {
        followerRef.current.classList.remove('is-dragging');
      }
    };

    const onMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Keep pointer directly at the mid of the element
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
      }

      // Check hovered element
      const target = e.target.closest('[data-cursor]');
      if (target && followerRef.current) {
        const cursorType = target.getAttribute('data-cursor');
        const customLabel = target.getAttribute('data-cursor-label');

        if (cursorType === 'project') {
          followerRef.current.classList.add('is-hovering-project');
          followerRef.current.classList.remove('is-hovering-action');
          if (badgeTextRef.current) {
            badgeTextRef.current.textContent = customLabel || 'VIEW';
          }
        } else if (cursorType === 'action') {
          followerRef.current.classList.add('is-hovering-action');
          followerRef.current.classList.remove('is-hovering-project');
          if (badgeTextRef.current) {
            badgeTextRef.current.textContent = '';
          }
        }
      } else if (followerRef.current) {
        followerRef.current.classList.remove('is-hovering-project', 'is-hovering-action');
        if (badgeTextRef.current) {
          badgeTextRef.current.textContent = '';
        }
      }
    };

    const render = (time) => {
      const dt = Math.max(1, time - lastTime);
      lastTime = time;

      // Follower position interpolation - ultra snappy and fast follow
      const ease = 0.52;
      followerX += (mouseX - followerX) * ease;
      followerY += (mouseY - followerY) * ease;

      // Velocity calculation
      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      lastX = mouseX;
      lastY = mouseY;

      const speed = Math.hypot(dx, dy) / Math.max(0.4, dt / 16.67);

      let targetScaleX = 1;
      let targetScaleY = 1;

      // Stretchy look when mouse speed is detected and especially while dragging
      if (speed > 0.8) {
        targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
        
        // When dragging, stretch is amplified for that tactile elastic gooey feel
        const stretchMultiplier = isMouseDown ? 0.12 : 0.065;
        const maxStretch = isMouseDown ? 2.4 : 1.6;
        const stretch = Math.min(speed * stretchMultiplier, maxStretch);

        targetScaleX = 1 + stretch;
        // Area conservation: stretch along vector of motion squishes perpendicular axis
        targetScaleY = Math.max(0.38, 1 / Math.sqrt(targetScaleX));
      } else if (isMouseDown) {
        // Dragging / mouse down but stationary: tactile pressed squish
        targetScaleX = 0.85;
        targetScaleY = 0.85;
      } else {
        targetScaleX = 1;
        targetScaleY = 1;
      }

      // Fast spring interpolation for responsive elasticity
      const springFactor = 0.32;
      currentScaleX += (targetScaleX - currentScaleX) * springFactor;
      currentScaleY += (targetScaleY - currentScaleY) * springFactor;

      // Smooth angle interpolation with degree wrap-around
      let diffAngle = (targetAngle - currentAngle) % 360;
      if (diffAngle > 180) diffAngle -= 360;
      if (diffAngle < -180) diffAngle += 360;
      currentAngle += diffAngle * 0.4;

      if (followerRef.current) {
        const isProject = followerRef.current.classList.contains('is-hovering-project');
        
        if (isProject) {
          // Subtle stretch when hovering project so text stays legible
          const projScaleX = Math.min(currentScaleX, 1.25);
          const projScaleY = Math.max(currentScaleY, 0.82);
          followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) rotate(${currentAngle * 0.25}deg) scale(${projScaleX}, ${projScaleY})`;
        } else {
          // Full kinetic stretch centered dead at (followerX, followerY)
          followerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0) translate(-50%, -50%) rotate(${currentAngle}deg) scale(${currentScaleX}, ${currentScaleY})`;
        }
      }

      rafId = requestAnimationFrame(render);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    rafId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="custom-cursor-container" aria-hidden="true">
      <div ref={dotRef} className="cursor-dot" />
      <div ref={followerRef} className="cursor-follower">
        <span ref={badgeTextRef} className="cursor-badge-text"></span>
      </div>
    </div>
  );
}
