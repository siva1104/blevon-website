"use client";

import React, { useRef, useEffect } from "react";

// Theme color definitions in RGB
const THEME_RGB = {
  DAY: {
    primary: [37, 99, 235],      // #2563EB Blevon Blue
    navy: [14, 42, 109],         // #0E2A6D Navy
    node: [37, 99, 235],         // Glowing Blue Nodes
    glow: [56, 189, 248],        // Sky Blue Glow
  },
  SUNLIGHT: {
    primary: [37, 99, 235],      // #2563EB Soft Blue
    navy: [11, 31, 77],          // #0B1F4D Deep Navy
    node: [37, 99, 235],         // Blue Nodes
    glow: [217, 119, 6],         // Warm Sunlight Glow
  },
  NIGHT: {
    primary: [56, 189, 248],     // #38BDF8 Sky Blue
    navy: [255, 255, 255],       // White
    node: [56, 189, 248],        // Electric Blue Nodes
    glow: [56, 189, 248],        // Electric Glow
  },
};

export function BlevonNetwork({ theme = "DAY", isPaused = false }) {
  const canvasRef = useRef(null);
  const themeRef = useRef(theme);
  const isPausedRef = useRef(isPaused);

  themeRef.current = theme;
  isPausedRef.current = isPaused;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let mouse = { x: -9999, y: -9999, targetX: -9999, targetY: -9999, vx: 0, vy: 0 };
    let lastTime = performance.now();
    let accumulatedTime = 0;
    let isIntersecting = true;

    // Smooth color lerp state
    let currentPrimaryRGB = [...(THEME_RGB[theme]?.primary || THEME_RGB.DAY.primary)];
    let currentNavyRGB = [...(THEME_RGB[theme]?.navy || THEME_RGB.DAY.navy)];
    let currentNodeRGB = [...(THEME_RGB[theme]?.node || THEME_RGB.DAY.node)];
    let currentGlowRGB = [...(THEME_RGB[theme]?.glow || THEME_RGB.DAY.glow)];

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => { isIntersecting = entry.isIntersecting; },
      { threshold: 0.01 }
    );
    observer.observe(canvas);

    let verticalStreams = [];

    // Dense fiber data stream count: 420 streams on desktop, 240 on tablet, 130 on mobile
    const getStreamCount = () => (width < 640 ? 130 : width < 1024 ? 240 : 420);

    /* ---- Text Protection Zone ---- */
    const textProtection = (x, y) => {
      const cx = width * 0.5;
      const cy = height * 0.42;
      const rx = width * 0.32;
      const ry = height * 0.24;
      const dx = (x - cx) / rx;
      const dy = (y - cy) / ry;
      const d = dx * dx + dy * dy;
      if (d >= 1) return 1;
      return 0.08 + 0.92 * Math.sqrt(d);
    };

    /* ---- Edge Softening Fade ---- */
    const edgeFade = (x, y) => {
      const margin = 16;
      return Math.min(x / margin, (width - x) / margin, y / margin, (height - y) / margin, 1);
    };

    /* ---- Generate Vertical Fiber Data Streams ---- */
    const generate = () => {
      const count = getStreamCount();
      verticalStreams = [];

      for (let i = 0; i < count; i++) {
        const baseX = (i / count) * width + (Math.random() - 0.5) * (width / count * 0.88);
        const yStart = Math.random() * height * 0.35;
        const streamLength = height * (0.45 + Math.random() * 0.6);
        const speed = 0.0002 + Math.random() * 0.0004;
        const driftSpeed = 0.00015 + Math.random() * 0.0003;
        const direction = Math.random() < 0.5 ? 1 : -1;
        const hasNodeTop = Math.random() < 0.65;
        const hasNodeBottom = Math.random() < 0.45;
        const nodeRadius = 1.6 + Math.random() * 1.8;
        const opacity = 0.12 + Math.random() * 0.22;
        const strokeWidth = 0.75 + Math.random() * 0.75;

        const pulse = {
          yPos: Math.random(),
          speed: 0.0008 + Math.random() * 0.0018,
          radius: 1.8 + Math.random() * 1.5,
        };

        verticalStreams.push({
          baseX,
          yStart,
          streamLength,
          speed,
          driftSpeed,
          direction,
          hasNodeTop,
          hasNodeBottom,
          nodeRadius,
          opacity,
          strokeWidth,
          pulse,
          dispX: 0,      // Dynamic physical displacement
          velX: 0,       // Physical velocity for spring oscillation
          offsetT: Math.random() * 1000,
        });
      }
    };

    /* ---- Setup Canvas ---- */
    const setup = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const rect = parent.getBoundingClientRect();
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      generate();
    };

    const lerpRGB = (curr, target, factor = 0.08) => {
      return curr.map((c, idx) => c + (target[idx] - c) * factor);
    };

    /* ---- Coupled Wave Ripple & Magnetic Spring Physics Update ---- */
    const update = (delta) => {
      accumulatedTime += delta;
      const t = accumulatedTime;

      // Smooth mouse spring interpolation
      mouse.vx = (mouse.targetX - mouse.x) * 0.12;
      mouse.vy = (mouse.targetY - mouse.y) * 0.12;
      mouse.x += mouse.vx;
      mouse.y += mouse.vy;

      // Theme color interpolation
      const targetTheme = THEME_RGB[themeRef.current] || THEME_RGB.DAY;
      currentPrimaryRGB = lerpRGB(currentPrimaryRGB, targetTheme.primary);
      currentNavyRGB = lerpRGB(currentNavyRGB, targetTheme.navy);
      currentNodeRGB = lerpRGB(currentNodeRGB, targetTheme.node);
      currentGlowRGB = lerpRGB(currentGlowRGB, targetTheme.glow);

      const mouseRadius = width < 640 ? 90 : 160;
      const count = verticalStreams.length;

      // Step 1: Magnetic Proximity Force (45% Elegant Intensity)
      for (let i = 0; i < count; i++) {
        const s = verticalStreams[i];

        // Individual slow inward/outward positional drift
        const indDrift = Math.sin(t * s.driftSpeed + s.offsetT) * 3.5;
        const currentBaseX = s.baseX + indDrift;

        const mdx = currentBaseX - mouse.x;
        const mdy = (s.yStart + s.streamLength * 0.5) - mouse.y;
        const dist = Math.hypot(mdx, mdy);

        if (dist < mouseRadius && dist > 0) {
          // Smooth Gaussian bell-curve falloff (Strongest at center -> Moderate -> Far 0)
          const factor = Math.exp(-(dist * dist) / (mouseRadius * mouseRadius * 0.38));
          const pushDir = mdx >= 0 ? 1 : -1;

          // 45% intensity force cap for refined agency feel
          const force = pushDir * factor * 2.8 + mouse.vx * factor * 0.25;
          s.velX += force;
        }
      }

      // Step 2: Coupled Spring Wave Ripple Propagation (Progressively affects neighboring lines)
      const springK = 0.12;     // Spring coupling between adjacent lines
      const restoreK = 0.05;    // Restoring spring constant to base position
      const damping = 0.88;     // Energy decay factor

      for (let i = 0; i < count; i++) {
        const s = verticalStreams[i];
        const leftDisp = i > 0 ? verticalStreams[i - 1].dispX : 0;
        const rightDisp = i < count - 1 ? verticalStreams[i + 1].dispX : 0;

        const couplingForce = (leftDisp - s.dispX) * springK + (rightDisp - s.dispX) * springK;
        const restoringForce = -restoreK * s.dispX;

        s.velX = (s.velX + couplingForce + restoringForce) * damping;
        s.dispX += s.velX;

        // Update pulse positions along vertical line
        s.pulse.yPos += s.pulse.speed * s.direction;
        if (s.pulse.yPos > 1) s.pulse.yPos = 0;
        if (s.pulse.yPos < 0) s.pulse.yPos = 1;
      }
    };

    /* ---- Draw Canvas ---- */
    const draw = () => {
      const t = accumulatedTime;
      ctx.clearRect(0, 0, width, height);

      const pRGB = currentPrimaryRGB.map((v) => Math.round(v)).join(",");
      const nRGB = currentNodeRGB.map((v) => Math.round(v)).join(",");
      const gRGB = currentGlowRGB.map((v) => Math.round(v)).join(",");

      // 1. Subtle Radial Ambient Glows
      const glows = [
        [width * 0.50, height * 0.25, width * 0.45],
        [width * 0.15, height * 0.20, width * 0.25],
        [width * 0.85, height * 0.20, width * 0.25],
      ];
      for (const [gx, gy, gr] of glows) {
        const g = ctx.createRadialGradient(gx, gy, 0, gx, gy, gr);
        g.addColorStop(0, `rgba(${gRGB},0.045)`);
        g.addColorStop(1, `rgba(${gRGB},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, width, height);
      }

      // 2. Render Vertical Straight Fiber Streams with Soft Magnetic Curve Deflection
      const segCount = width < 640 ? 10 : 14;

      for (const s of verticalStreams) {
        // Individual continuous motion: slow vertical float + length variation + opacity breathing
        const indDrift = Math.sin(t * s.driftSpeed + s.offsetT) * 3.5;
        const yOffset = Math.sin(t * s.speed + s.offsetT) * 12;
        const lenMod = Math.sin(t * 0.0002 + s.offsetT) * 10;
        const opacityMod = 0.85 + 0.15 * Math.sin(t * 0.0003 + s.offsetT);

        const currentBaseX = s.baseX + indDrift;
        const y1 = Math.max(0, s.yStart + yOffset);
        const y2 = Math.min(height, y1 + s.streamLength + lenMod);
        const lineLen = y2 - y1;

        if (lineLen <= 5) continue;

        const points = [];
        let maxLineOpacity = 0;

        for (let i = 0; i <= segCount; i++) {
          const segY = y1 + (lineLen * (i / segCount));

          // Gaussian Envelope: deflection strongest near cursor Y height, keeping lines fundamentally straight
          const mdy = segY - mouse.y;
          const yEnvelope = Math.exp(-(mdy * mdy) / (220 * 220));
          const segX = currentBaseX + s.dispX * (0.35 + 0.65 * yEnvelope);

          const prot = textProtection(segX, segY);
          const fade = edgeFade(segX, segY);
          const pointOpacity = s.opacity * opacityMod * prot * fade;

          if (pointOpacity > maxLineOpacity) maxLineOpacity = pointOpacity;

          points.push({ x: segX, y: segY, opacity: pointOpacity });
        }

        if (maxLineOpacity < 0.005 || points.length < 2) continue;

        const firstPt = points[0];
        const lastPt = points[points.length - 1];

        const grad = ctx.createLinearGradient(firstPt.x, y1, lastPt.x, y2);
        grad.addColorStop(0, `rgba(${pRGB},0)`);
        grad.addColorStop(0.2, `rgba(${pRGB},${maxLineOpacity})`);
        grad.addColorStop(0.8, `rgba(${pRGB},${maxLineOpacity})`);
        grad.addColorStop(1, `rgba(${pRGB},0)`);

        ctx.beginPath();
        ctx.moveTo(points[0].x, points[0].y);

        for (let pIdx = 1; pIdx < points.length - 1; pIdx++) {
          const xc = (points[pIdx].x + points[pIdx + 1].x) * 0.5;
          const yc = (points[pIdx].y + points[pIdx + 1].y) * 0.5;
          ctx.quadraticCurveTo(points[pIdx].x, points[pIdx].y, xc, yc);
        }

        ctx.strokeStyle = grad;
        ctx.lineWidth = s.strokeWidth;
        ctx.stroke();

        // Draw Top Circular Node
        if (s.hasNodeTop) {
          const nodeAlpha = firstPt.opacity * 1.25;
          ctx.beginPath();
          ctx.arc(firstPt.x, firstPt.y, s.nodeRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${nRGB},${nodeAlpha * 0.15})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(firstPt.x, firstPt.y, s.nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${nRGB},${nodeAlpha})`;
          ctx.fill();
        }

        // Draw Bottom Circular Node
        if (s.hasNodeBottom) {
          const nodeAlpha = lastPt.opacity * 1.25;
          ctx.beginPath();
          ctx.arc(lastPt.x, lastPt.y, s.nodeRadius * 2.2, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${nRGB},${nodeAlpha * 0.15})`;
          ctx.fill();

          ctx.beginPath();
          ctx.arc(lastPt.x, lastPt.y, s.nodeRadius, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(${nRGB},${nodeAlpha})`;
          ctx.fill();
        }

        // Draw Traveling Data Particle
        const pulseIndexFloat = (points.length - 1) * s.pulse.yPos;
        const pulseIdx = Math.floor(pulseIndexFloat);
        const subT = pulseIndexFloat - pulseIdx;

        const ptA = points[pulseIdx];
        const ptB = points[Math.min(pulseIdx + 1, points.length - 1)];

        if (ptA && ptB) {
          const px = ptA.x + (ptB.x - ptA.x) * subT;
          const py = ptA.y + (ptB.y - ptA.y) * subT;
          const pulseAlpha = Math.sin(s.pulse.yPos * Math.PI) * ptA.opacity * 1.6;

          if (pulseAlpha > 0.01) {
            ctx.beginPath();
            ctx.arc(px, py, s.pulse.radius * 2.8, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${nRGB},${pulseAlpha * 0.18})`;
            ctx.fill();

            ctx.beginPath();
            ctx.arc(px, py, s.pulse.radius, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${nRGB},${pulseAlpha})`;
            ctx.fill();
          }
        }
      }
    };

    /* ---- Render Loop with Strict Freeze Frame Support ---- */
    const loop = (now) => {
      const delta = now - lastTime;
      lastTime = now;

      if (isIntersecting && !isPausedRef.current && !reducedMotion) {
        // PLAYING: Advance physics simulation & render new frame
        update(delta);
        draw();
      } else if (isIntersecting && isPausedRef.current) {
        // PAUSED: Canvas is strictly frozen in its exact state at the moment Pause was clicked.
        // Smoothly interpolate theme colors if theme changes while paused, but DO NOT update physics or line state.
        const targetTheme = THEME_RGB[themeRef.current] || THEME_RGB.DAY;
        currentPrimaryRGB = lerpRGB(currentPrimaryRGB, targetTheme.primary);
        currentNavyRGB = lerpRGB(currentNavyRGB, targetTheme.navy);
        currentNodeRGB = lerpRGB(currentNodeRGB, targetTheme.node);
        currentGlowRGB = lerpRGB(currentGlowRGB, targetTheme.glow);
        draw();
      }

      animId = requestAnimationFrame(loop);
    };

    /* ---- Handlers ---- */
    const onMove = (e) => {
      // Ignore cursor interactions when animation is paused (Canvas remains strictly frozen)
      if (isPausedRef.current) return;
      const r = canvas.getBoundingClientRect();
      mouse.targetX = e.clientX - r.left;
      mouse.targetY = e.clientY - r.top;
    };
    const onLeave = () => {
      if (isPausedRef.current) return;
      mouse.targetX = -9999;
      mouse.targetY = -9999;
    };

    let resizeTimer;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(setup, 120);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    window.addEventListener("resize", onResize);

    setup();

    canvas.style.opacity = "0";
    canvas.style.transition = "opacity 1.6s ease";
    requestAnimationFrame(() => {
      canvas.style.opacity = "1";
    });

    lastTime = performance.now();
    animId = requestAnimationFrame(loop);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      clearTimeout(resizeTimer);
      observer.disconnect();
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
      }}
    />
  );
}
