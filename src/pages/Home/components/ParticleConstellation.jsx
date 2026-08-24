"use client";

import React, { useRef, useEffect } from "react";

export function ParticleConstellation({ isPaused = false }) {
  const canvasRef = useRef(null);
  const isPausedRef = useRef(isPaused);
  isPausedRef.current = isPaused;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isIntersecting = true;
    let scrollFade = 1;

    // Smooth cursor state with damping
    const mouse = {
      x: -9999,
      y: -9999,
      targetX: -9999,
      targetY: -9999,
      active: false,
      radius: 195,
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // IntersectionObserver to pause rendering when hero is out of view
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0.02 }
    );
    observer.observe(canvas);

    // Scroll listener for smooth fade-out as user scrolls away from hero
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      if (height > 0) {
        scrollFade = Math.max(0, Math.min(1, 1 - scrollY / (height * 0.75)));
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    let particles = [];

    // Particle counts scaled for screen size
    const getParticleCount = (w) => {
      if (w < 640) return 140;
      if (w < 1024) return 220;
      return 320;
    };

    // Initialize 3-layer depth network with rich corner energy clusters
    const initParticles = () => {
      const count = getParticleCount(width);
      particles = [];

      for (let i = 0; i < count; i++) {
        let x, y;
        const clusterRand = Math.random();

        if (clusterRand < 0.26) {
          // Top-Left & Top-Right clusters
          if (Math.random() < 0.5) {
            x = -35 + Math.random() * (width * 0.42);
            y = -20 + Math.random() * (height * 0.48);
          } else {
            x = width * 0.58 + Math.random() * (width * 0.45 + 35);
            y = -20 + Math.random() * (height * 0.48);
          }
        } else if (clusterRand < 0.68) {
          // Bottom-Left & Bottom-Right Corner Energy Clusters
          if (Math.random() < 0.5) {
            x = -35 + Math.random() * (width * 0.46);
            y = height * 0.46 + Math.random() * (height * 0.58 + 25);
          } else {
            x = width * 0.54 + Math.random() * (width * 0.48 + 35);
            y = height * 0.46 + Math.random() * (height * 0.58 + 25);
          }
        } else if (clusterRand < 0.86) {
          // Perimeter flanks
          x = Math.random() < 0.5
            ? -25 + Math.random() * (width * 0.28)
            : width * 0.72 + Math.random() * (width * 0.3 + 25);
          y = Math.random() * height;
        } else {
          // Calmer interior / transition zone
          x = width * 0.22 + Math.random() * (width * 0.56);
          y = height * 0.15 + Math.random() * (height * 0.7);
        }

        // Layer assignment: 0 = Background, 1 = Midground, 2 = Foreground
        const layerRand = Math.random();
        let layer = 1;
        let baseRadius = 1.4;
        let baseAlpha = 0.24;
        let speed = 0.28;

        if (layerRand < 0.38) {
          layer = 0;
          baseRadius = 0.8 + Math.random() * 0.5;
          baseAlpha = 0.09 + Math.random() * 0.12;
          speed = 0.14 + Math.random() * 0.12;
        } else if (layerRand < 0.78) {
          layer = 1;
          baseRadius = 1.3 + Math.random() * 0.6;
          baseAlpha = 0.2 + Math.random() * 0.2;
          speed = 0.24 + Math.random() * 0.16;
        } else {
          layer = 2;
          baseRadius = 1.9 + Math.random() * 0.9;
          baseAlpha = 0.38 + Math.random() * 0.32;
          speed = 0.32 + Math.random() * 0.18;
        }

        // Highlight nodes: in corner areas and outer bounds
        const isCornerZone =
          (x < width * 0.4 || x > width * 0.6) && y > height * 0.45;
        const isHighlight =
          layer >= 1 &&
          (isCornerZone ? Math.random() < 0.18 : Math.random() < 0.08) &&
          (Math.abs(x - width * 0.5) > width * 0.2 ||
            Math.abs(y - height * 0.46) > height * 0.24);

        const angle = Math.random() * Math.PI * 2;
        const colorTypeRand = Math.random();
        let colorType = "navy";
        if (isHighlight || colorTypeRand < 0.52) {
          colorType = "blue"; // Blevon primary accent #2563EB
        } else if (colorTypeRand < 0.78) {
          colorType = "sky"; // Light accent #60A5FA
        }

        particles.push({
          x,
          y,
          originX: x,
          originY: y,
          vx: Math.cos(angle) * (prefersReducedMotion ? 0 : speed),
          vy: Math.sin(angle) * (prefersReducedMotion ? 0 : speed),
          layer,
          radius: isHighlight ? baseRadius + 1.0 : baseRadius,
          baseRadius: isHighlight ? baseRadius + 1.0 : baseRadius,
          colorType,
          baseAlpha,
          alpha: baseAlpha,
          isHighlight,
          pulseSpeed: 0.001 + Math.random() * 0.0018,
          pulseOffset: Math.random() * Math.PI * 2,
          driftAngle: Math.random() * Math.PI * 2,
          driftSpeed: 0.0006 + Math.random() * 0.001,
          proximityExcitation: 0,
        });
      }
    };

    const handleResize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      initParticles();
    };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouse.targetX = e.clientX - rect.left;
        mouse.targetY = e.clientY - rect.top;
        mouse.active = true;
      } else {
        mouse.active = false;
      }
    };

    const handleMouseLeave = () => {
      mouse.targetX = -9999;
      mouse.targetY = -9999;
      mouse.active = false;
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    handleResize();

    let lastTime = performance.now();

    const render = (time) => {
      animId = requestAnimationFrame(render);

      if (!isIntersecting || isPausedRef.current || scrollFade <= 0.02) {
        lastTime = time;
        return;
      }

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      // Smooth mouse damping / lerp
      if (mouse.active) {
        mouse.x += (mouse.targetX - mouse.x) * 0.14;
        mouse.y += (mouse.targetY - mouse.y) * 0.14;
      } else {
        mouse.x += (-9999 - mouse.x) * 0.1;
        mouse.y += (-9999 - mouse.y) * 0.1;
      }

      ctx.clearRect(0, 0, width, height);

      // Render subtle atmospheric corner blue energy diffusions on the canvas
      // 1. Bottom-Left Corner Ambient Glow (Fading smoothly toward center)
      const leftGlow = ctx.createRadialGradient(
        0,
        height,
        15,
        0,
        height,
        width * 0.52
      );
      leftGlow.addColorStop(0, `rgba(37, 99, 235, ${0.15 * scrollFade})`);
      leftGlow.addColorStop(0.42, `rgba(96, 165, 250, ${0.07 * scrollFade})`);
      leftGlow.addColorStop(1, "rgba(247, 248, 246, 0)");
      ctx.fillStyle = leftGlow;
      ctx.fillRect(0, height * 0.35, width * 0.55, height * 0.65);

      // 2. Bottom-Right Corner Ambient Glow (Fading smoothly toward center)
      const rightGlow = ctx.createRadialGradient(
        width,
        height,
        15,
        width,
        height,
        width * 0.52
      );
      rightGlow.addColorStop(0, `rgba(37, 99, 235, ${0.15 * scrollFade})`);
      rightGlow.addColorStop(0.42, `rgba(96, 165, 250, ${0.07 * scrollFade})`);
      rightGlow.addColorStop(1, "rgba(247, 248, 246, 0)");
      ctx.fillStyle = rightGlow;
      ctx.fillRect(width * 0.45, height * 0.35, width * 0.55, height * 0.65);

      // Connection thresholds
      const maxConnectDist = width < 640 ? 105 : 155;
      const mouseConnectDist = 180;

      // Content protection: 2D elliptical calm factor
      const getCalmFactor = (px, py) => {
        const dx = (px - width * 0.5) / (width * 0.42);
        const dy = (py - height * 0.45) / (height * 0.36);
        const ellipDist = Math.sqrt(dx * dx + dy * dy);
        if (ellipDist >= 1) return 1;
        return Math.max(0.12, Math.pow(ellipDist, 1.35));
      };

      // 1. Update Particle Positions & Continuous Organic Motion
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReducedMotion) {
          const microWiggleX = Math.sin(time * p.driftSpeed + p.driftAngle) * 0.24;
          const microWiggleY = Math.cos(time * p.driftSpeed + p.driftAngle * 1.3) * 0.24;

          p.x += (p.vx + microWiggleX) * 60 * dt;
          p.y += (p.vy + microWiggleY) * 60 * dt;

          // Boundary wrap
          const boundPad = 45;
          if (p.x < -boundPad) p.x = width + boundPad;
          if (p.x > width + boundPad) p.x = -boundPad;
          if (p.y < -boundPad) p.y = height + boundPad;
          if (p.y > height + boundPad) p.y = -boundPad;

          // Cursor magnetic interaction
          if (mouse.active) {
            const dx = p.x - mouse.x;
            const dy = p.y - mouse.y;
            const dist = Math.hypot(dx, dy);

            if (dist < mouse.radius && dist > 0) {
              const force = (1 - dist / mouse.radius);
              const dir = p.layer === 0 ? -1 : 1;
              p.x += (dx / dist) * force * 18 * dir * dt;
              p.y += (dy / dist) * force * 18 * dir * dt;

              p.proximityExcitation = Math.min(1, p.proximityExcitation + (1 - dist / mouse.radius) * 0.25);
            }
          }
        }

        p.proximityExcitation *= 0.92;

        const pulse = Math.sin(time * p.pulseSpeed + p.pulseOffset);
        const calmFactor = getCalmFactor(p.x, p.y);
        const excitationBoost = p.proximityExcitation * 0.35;

        // Subtle boost for particles near bottom corners
        const isCorner =
          (p.x < width * 0.35 || p.x > width * 0.65) && p.y > height * 0.5
            ? 1.2
            : 1.0;

        p.alpha = Math.max(
          0.04,
          (p.baseAlpha + (p.isHighlight ? pulse * 0.22 : pulse * 0.07) + excitationBoost) *
            calmFactor *
            isCorner *
            scrollFade
        );
      }

      // 2. Render Connecting Lines
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];

        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];

          if (Math.abs(p1.layer - p2.layer) > 1) continue;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectDist) {
            const calmFactor = Math.min(getCalmFactor(p1.x, p1.y), getCalmFactor(p2.x, p2.y));
            const distRatio = 1 - dist / maxConnectDist;
            const distFactor = Math.pow(distRatio, 1.2);
            const layerMultiplier = p1.layer === 0 && p2.layer === 0 ? 0.45 : 0.85;

            const excitation = (p1.proximityExcitation + p2.proximityExcitation) * 0.2;
            const lineAlpha = (distFactor * 0.26 * layerMultiplier + excitation) * calmFactor * scrollFade;

            if (lineAlpha > 0.005) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);

              if (p1.isHighlight || p2.isHighlight || excitation > 0.05 || (p1.y > height * 0.55 && (p1.x < width * 0.35 || p1.x > width * 0.65))) {
                ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha * 0.95})`; // Vibrant Accent blue
              } else {
                ctx.strokeStyle = `rgba(14, 42, 109, ${lineAlpha * 0.75})`; // Navy line
              }
              ctx.lineWidth = Math.max(0.4, distFactor * 0.9);
              ctx.stroke();
            }
          }
        }

        // 3. Connect to Cursor
        if (mouse.active && !prefersReducedMotion && p1.layer >= 1) {
          const mdx = p1.x - mouse.x;
          const mdy = p1.y - mouse.y;
          const mdist = Math.hypot(mdx, mdy);

          if (mdist < mouseConnectDist) {
            const mDistFactor = 1 - mdist / mouseConnectDist;
            const mLineAlpha = Math.pow(mDistFactor, 1.3) * 0.3 * scrollFade;

            if (mLineAlpha > 0.01) {
              ctx.beginPath();
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(mouse.x, mouse.y);
              ctx.strokeStyle = `rgba(37, 99, 235, ${mLineAlpha})`;
              ctx.lineWidth = mDistFactor * 0.95;
              ctx.stroke();
            }
          }
        }
      }

      // 4. Render Particles & Highlight Glows
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (p.alpha <= 0.005) continue;

        let r = 14, g = 42, b = 109; // Blevon Navy #0E2A6D
        if (p.colorType === "blue") {
          r = 37; g = 99; b = 235; // Primary Accent Blue #2563EB
        } else if (p.colorType === "sky") {
          r = 96; g = 165; b = 250; // Sky Blue #60A5FA
        }

        // Soft blue glow diffusion for Highlight Nodes & Excited Nodes
        if (p.isHighlight || p.proximityExcitation > 0.15) {
          const glowRadius = p.radius * (3.8 + p.proximityExcitation * 1.5);
          const glowAlpha = p.alpha * (p.isHighlight ? 0.36 : 0.22);

          const gradient = ctx.createRadialGradient(
            p.x, p.y, 0,
            p.x, p.y, glowRadius
          );
          gradient.addColorStop(0, `rgba(37, 99, 235, ${glowAlpha})`);
          gradient.addColorStop(0.5, `rgba(96, 165, 250, ${glowAlpha * 0.45})`);
          gradient.addColorStop(1, "rgba(37, 99, 235, 0)");

          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(p.x, p.y, glowRadius, 0, Math.PI * 2);
          ctx.fill();
        }

        // Core Node
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${p.alpha})`;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 size-full"
      style={{
        zIndex: 1,
      }}
    />
  );
}
