"use client";

import React, { useRef, useEffect } from "react";

/**
 * High-performance, minimal, realistic 3D Particle Vortex
 * 
 * - Programmatic canvas-drawn celestial accretion vortex
 * - Thousands of tiny stardust particles (0.6px - 1.4px)
 * - Deep dark central void with natural elliptical perspective
 * - Crisp whites and silvery grays with zero bubble/halo distortion
 * - Keplerian differential orbital dynamics
 * - Fully accessible with prefers-reduced-motion & mobile optimization
 */
export function ParticleVortex() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isIntersecting = true;

    // Localized cursor tracking
    const cursor = {
      x: -9999,
      y: -9999,
      active: false,
    };

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let isReducedMotion = motionQuery.matches;
    const handleMotionChange = (e) => {
      isReducedMotion = e.matches;
    };
    motionQuery.addEventListener("change", handleMotionChange);

    // Pause canvas calculation when hero is scrolled out of viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    // Particle collection
    let particles = [];

    const initParticles = () => {
      if (width <= 10 || height <= 10) return;
      const minDim = Math.min(width, height);
      if (minDim <= 10) return;

      // Responsive particle count scaled for high 60fps performance
      let count = 3600;
      if (width < 640) count = 1400;
      else if (width < 1024) count = 2200;

      particles = [];

      // Geometric radius thresholds
      const R_core = minDim * 0.22;   // Distinct, dark central void opening
      const R_ring = minDim * 0.39;   // Peak density orbital band
      const R_outer = minDim * 0.72;  // Outer filament boundary

      for (let i = 0; i < count; i++) {
        // Base polar angle around the vortex
        const baseTheta = Math.random() * Math.PI * 2;

        // Realistic celestial density distribution:
        // 70% Dense Main Accretion Band, 18% Inner Wisps, 12% Outer Stray Dust
        const bandType = Math.random();
        let baseRadius;

        if (bandType < 0.70) {
          // Gaussian clustering around the main orbital ring
          const u1 = Math.random() || 0.001;
          const u2 = Math.random() || 0.001;
          const gaussian = Math.sqrt(-2.0 * Math.log(u1)) * Math.cos(2.0 * Math.PI * u2);
          baseRadius = R_ring + gaussian * (minDim * 0.065);

          // Preserve the crisp dark center
          if (baseRadius < R_core) {
            baseRadius = R_core + Math.random() * (R_ring - R_core) * 0.5;
          }
        } else if (bandType < 0.88) {
          // Inner filament wisps tapering smoothly toward the event horizon
          baseRadius = R_core + Math.pow(Math.random(), 1.6) * (R_ring - R_core);
        } else {
          // Outer halo of delicate cosmic dust
          baseRadius = R_ring + Math.pow(Math.random(), 0.9) * (R_outer - R_ring);
          if (Math.random() < 0.2) {
            baseRadius += Math.random() * minDim * 0.25;
          }
        }

        // Multi-harmonic spiral perturbation (creates organic galactic filaments)
        const spiralDistortion =
          1 +
          0.11 * Math.cos(2 * baseTheta + 0.3) +
          0.06 * Math.sin(4 * baseTheta + 1.1) +
          0.03 * Math.cos(6 * baseTheta);

        const r = baseRadius * spiralDistortion;

        // Vertical disk thickness (flares naturally with radius)
        const zThickness = (minDim * 0.06) * (0.25 + 0.75 * (r / R_ring));
        const z = (Math.random() - 0.5) * 2 * zThickness;

        // Keplerian differential orbital velocity (inner particles orbit faster)
        const velocityScaling = Math.sqrt(R_ring / Math.max(r, R_core * 0.75));
        const baseSpeed = (0.00032 + (Math.random() - 0.5) * 0.00006) * velocityScaling;

        // Particle sizing: strictly fine micro-stardust (0.55px to 1.35px)
        const sizeRoll = Math.random();
        let size = 0.65 + Math.random() * 0.5; // Majority fine dust (0.65 - 1.15px)
        let alpha = 0.15 + Math.random() * 0.65;
        let isLuminousSpark = false;

        if (sizeRoll > 0.97) {
          // Ultra-fine pinpoint bright star
          size = 1.35 + Math.random() * 0.3;
          alpha = 0.85 + Math.random() * 0.15;
          isLuminousSpark = true;
        } else if (sizeRoll > 0.82) {
          // Mid-range star speck
          size = 1.05 + Math.random() * 0.35;
          alpha = 0.5 + Math.random() * 0.35;
        }

        // Deep celestial charcoal, obsidian slate, and electric blue micro-sparks for white background
        const colorRoll = Math.random();
        let color = "16, 24, 40"; // Primary dark charcoal / slate (#101828)

        if (colorRoll > 0.82) {
          // Vibrant deep blue spark (#1D4ED8 / #2563EB)
          color = "37, 99, 235";
        } else if (colorRoll > 0.45) {
          // Mid cool slate gray (#475467)
          color = "71, 84, 103";
        } else {
          // Soft atmospheric graphite (#98A2B3)
          color = "102, 112, 133";
        }

        particles.push({
          r,
          baseRadius: r,
          theta: baseTheta,
          z,
          baseZ: z,
          speed: baseSpeed,
          pulseFreq: 0.25 + Math.random() * 0.45,
          pulsePhase: Math.random() * Math.PI * 2,
          pulseAmp: 0.012 + Math.random() * 0.016,
          size,
          alpha,
          isLuminousSpark,
          color,
          // Local interaction dynamic displacement & velocity
          offsetX: 0,
          offsetY: 0,
          vx: 0,
          vy: 0,
        });
      }
    };

    const handleResize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      initParticles();
    };

    // Track pointer position relative to canvas (filtering out touch gestures)
    const handlePointerMove = (e) => {
      if (isReducedMotion || e.pointerType === "touch" || width === 0 || height === 0) return;
      const rect = canvas.getBoundingClientRect();
      cursor.x = e.clientX - rect.left;
      cursor.y = e.clientY - rect.top;
      cursor.active = true;
    };

    const handlePointerLeave = () => {
      cursor.active = false;
      cursor.x = -9999;
      cursor.y = -9999;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerleave", handlePointerLeave);
    window.addEventListener("blur", handlePointerLeave);

    handleResize();

    // 3D Perspective Projection parameters
    const FOCAL_LENGTH = 720;
    const BASE_TILT_X = 0.42; // ~24° stable inclination (no whole-vortex rotation on mouse)
    const cosX = Math.cos(BASE_TILT_X);
    const sinX = Math.sin(BASE_TILT_X);

    // Interaction radius: 115px (within 100-130px specification)
    const INTERACTION_RADIUS = 115;
    const INTERACTION_RADIUS_SQ = INTERACTION_RADIUS * INTERACTION_RADIUS;
    const SPRING_K = 0.085; // Natural return spring constant
    const DAMPING = 0.88;   // Smooth damping factor to eliminate oscillation

    let lastTime = performance.now();

    const render = (now) => {
      animId = requestAnimationFrame(render);
      if (!isIntersecting || width <= 10 || height <= 10) return;

      try {
        const delta = Math.min((now - lastTime) / 1000, 0.1);
        lastTime = now;

        ctx.save();
        ctx.scale(dpr, dpr);
        ctx.clearRect(0, 0, width, height);

        const centerX = width / 2;
        const centerY = height / 2;
        const minDim = Math.min(width, height);

        // Subtle soft cyan/blue atmospheric radial glow for white/light background
        if (minDim > 20) {
          const ambientRimGlow = ctx.createRadialGradient(
            centerX,
            centerY,
            Math.max(1, minDim * 0.18),
            centerX,
            centerY,
            Math.max(2, minDim * 0.55)
          );
          ambientRimGlow.addColorStop(0, "rgba(255, 255, 255, 0)");
          ambientRimGlow.addColorStop(0.35, "rgba(37, 99, 235, 0.025)");
          ambientRimGlow.addColorStop(0.60, "rgba(224, 238, 255, 0.04)");
          ambientRimGlow.addColorStop(0.85, "rgba(37, 99, 235, 0.015)");
          ambientRimGlow.addColorStop(1, "rgba(255, 255, 255, 0)");

          ctx.fillStyle = ambientRimGlow;
          ctx.fillRect(0, 0, width, height);
        }

        const timeSec = now * 0.001;
        const isCursorActive = cursor.active && !isReducedMotion;
        const curX = cursor.x;
        const curY = cursor.y;

        // Render fine stardust particles with isolated localized interaction
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];

          // 1. Keplerian orbit (paused if reduced-motion is active)
          if (!isReducedMotion) {
            p.theta += p.speed;
          }

          // Gentle celestial breathing
          const r = p.baseRadius * (1 + p.pulseAmp * Math.sin(p.pulseFreq * timeSec + p.pulsePhase));
          const z = p.baseZ + 2 * Math.sin(timeSec * 0.6 + p.pulsePhase);

          // Polar to Cartesian conversion
          const x0 = r * Math.cos(p.theta);
          const y0 = r * Math.sin(p.theta);
          const z0 = z;

          // Stable 3D Projection (X-axis inclination only; entire vortex orientation remains stable)
          const x1 = x0;
          const y1 = y0 * cosX - z0 * sinX;
          const z1 = y0 * sinX + z0 * cosX;

          // Camera depth clipping
          const depth = FOCAL_LENGTH + z1;
          if (depth <= 10) continue;

          // Base perspective screen position (Home position)
          const scale = FOCAL_LENGTH / depth;
          const screenX = centerX + x1 * scale;
          const screenY = centerY + y1 * scale;

          if (!Number.isFinite(screenX) || !Number.isFinite(screenY)) continue;

          // 2. Localized cursor interaction (strictly within INTERACTION_RADIUS)
          if (isCursorActive) {
            const dx = screenX - curX;
            const dy = screenY - curY;
            const distSq = dx * dx + dy * dy;

            if (distSq < INTERACTION_RADIUS_SQ && distSq > 0.001) {
              const dist = Math.sqrt(distSq);
              // Linear dropoff to 0 at the boundary, squared for a smooth, natural push curve
              const influence = 1 - dist / INTERACTION_RADIUS;
              const force = influence * influence * 6.5;

              p.vx += (dx / dist) * force;
              p.vy += (dy / dist) * force;
            }
          }

          // 3. Spring physics: smooth return to home position (offsetX: 0, offsetY: 0)
          if (p.offsetX !== 0 || p.offsetY !== 0 || p.vx !== 0 || p.vy !== 0) {
            p.vx += -p.offsetX * SPRING_K;
            p.vy += -p.offsetY * SPRING_K;
            p.vx *= DAMPING;
            p.vy *= DAMPING;
            p.offsetX += p.vx;
            p.offsetY += p.vy;

            // Stop micro-jitters when velocity and displacement are negligible
            if (
              Math.abs(p.vx) < 0.001 &&
              Math.abs(p.vy) < 0.001 &&
              Math.abs(p.offsetX) < 0.01 &&
              Math.abs(p.offsetY) < 0.01
            ) {
              p.vx = 0;
              p.vy = 0;
              p.offsetX = 0;
              p.offsetY = 0;
            }
          }

          // Actual rendered position
          const drawX = screenX + p.offsetX;
          const drawY = screenY + p.offsetY;

          // Depth-modulated opacity & fine size scaling
          const depthFactor = Math.max(0.3, Math.min(1.4, scale));
          const finalAlpha = Math.min(1, Math.max(0.04, p.alpha * depthFactor));
          const finalSize = Math.max(0.4, p.size * depthFactor);

          // Draw pinpoint star particle
          ctx.fillStyle = `rgba(${p.color}, ${finalAlpha})`;
          ctx.beginPath();
          ctx.arc(drawX, drawY, finalSize, 0, Math.PI * 2);
          ctx.fill();

          // Subtle micro-glow for only top 2% brightest focal stars (never oversized)
          if (p.isLuminousSpark && finalAlpha > 0.5) {
            ctx.fillStyle = `rgba(${p.color}, ${finalAlpha * 0.12})`;
            ctx.beginPath();
            ctx.arc(drawX, drawY, finalSize * 1.6, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        ctx.restore();
      } catch (err) {
        console.warn("ParticleVortex render skipped frame:", err);
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerleave", handlePointerLeave);
      window.removeEventListener("blur", handlePointerLeave);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export default ParticleVortex;
