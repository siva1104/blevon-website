"use client";

import React, { useRef, useEffect } from "react";

export function NetworkSphere() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animId = null;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let isIntersecting = true;

    // Mouse tracking for subtle interactive tilt
    const mouse = {
      targetTiltX: 0,
      targetTiltY: 0,
      tiltX: 0,
      tiltY: 0,
    };

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // IntersectionObserver to pause rendering when offscreen
    const observer = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
      },
      { threshold: 0.05 }
    );
    observer.observe(canvas);

    const handleMouseMove = (e) => {
      if (prefersReducedMotion) return;
      const rect = canvas.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      mouse.targetTiltX = normY * 0.35; // Tilt up/down
      mouse.targetTiltY = normX * 0.35; // Tilt left/right
    };

    const handleMouseLeave = () => {
      mouse.targetTiltX = 0;
      mouse.targetTiltY = 0;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    // Generate Fibonacci Sphere 3D Nodes
    const NODE_COUNT = 140;
    const goldenAngle = Math.PI * (3 - Math.sqrt(5));
    const baseNodes = [];

    for (let i = 0; i < NODE_COUNT; i++) {
      const y = 1 - (i / (NODE_COUNT - 1)) * 2; // -1 to 1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = i * goldenAngle;
      const x = Math.cos(theta) * radiusAtY;
      const z = Math.sin(theta) * radiusAtY;

      const isHighlight = i % 9 === 0;
      const isMedium = i % 3 === 0;

      baseNodes.push({
        baseX: x,
        baseY: y,
        baseZ: z,
        isHighlight,
        isMedium,
        pulseOffset: Math.random() * Math.PI * 2,
        pulseSpeed: 0.0012 + Math.random() * 0.0015,
        orbitOffset: Math.random() * Math.PI * 2,
      });
    }

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
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    let angleY = 0;
    let angleX = 0.25; // default slight forward tilt
    let angleZ = -0.15; // default aesthetic roll

    let lastTime = performance.now();

    const render = (time) => {
      animId = requestAnimationFrame(render);

      if (!isIntersecting) {
        lastTime = time;
        return;
      }

      const dt = Math.min((time - lastTime) / 1000, 0.1);
      lastTime = time;

      ctx.clearRect(0, 0, width, height);

      // Smooth mouse tilt interpolation
      mouse.tiltX += (mouse.targetTiltX - mouse.tiltX) * 0.08;
      mouse.tiltY += (mouse.targetTiltY - mouse.tiltY) * 0.08;

      if (!prefersReducedMotion) {
        angleY += 0.16 * dt; // slow organic continuous 3D rotation
      }

      const currentRotX = angleX + mouse.tiltX;
      const currentRotY = angleY + mouse.tiltY;
      const currentRotZ = angleZ;

      // Sphere sizing based on canvas bounds
      const minDim = Math.min(width, height);
      const sphereRadius = minDim * 0.4;
      const centerX = width * 0.5;
      const floatY = Math.sin(time * 0.0012) * (minDim * 0.025); // gentle floating vertical sway
      const centerY = height * 0.5 + floatY;
      const focalLength = sphereRadius * 3.5;

      // Draw subtle background ambient blue diffusion glow behind sphere
      const ambientGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        sphereRadius * 0.2,
        centerX,
        centerY,
        sphereRadius * 1.35
      );
      ambientGlow.addColorStop(0, "rgba(37, 99, 235, 0.14)");
      ambientGlow.addColorStop(0.5, "rgba(96, 165, 250, 0.06)");
      ambientGlow.addColorStop(1, "rgba(247, 248, 246, 0)");
      ctx.fillStyle = ambientGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, sphereRadius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // Precalculate rotation matrix components
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosZ = Math.cos(currentRotZ);
      const sinZ = Math.sin(currentRotZ);

      // Transform all nodes to 3D camera space & Project to 2D
      const projectedNodes = [];

      for (let i = 0; i < baseNodes.length; i++) {
        const node = baseNodes[i];

        // Micro surface drift along normal
        const microOsc = Math.sin(time * node.pulseSpeed + node.orbitOffset) * 0.04;
        const radMult = 1 + microOsc;

        let px = node.baseX * radMult;
        let py = node.baseY * radMult;
        let pz = node.baseZ * radMult;

        // 1. Rotate around Y
        const x1 = px * cosY + pz * sinY;
        const y1 = py;
        const z1 = -px * sinY + pz * cosY;

        // 2. Rotate around X
        const x2 = x1;
        const y2 = y1 * cosX - z1 * sinX;
        const z2 = y1 * sinX + z1 * cosX;

        // 3. Rotate around Z
        const x3 = x2 * cosZ - y2 * sinZ;
        const y3 = x2 * sinZ + y2 * cosZ;
        const z3 = z2;

        // Perspective projection
        const scale = focalLength / (focalLength + z3 * sphereRadius);
        const screenX = centerX + x3 * sphereRadius * scale;
        const screenY = centerY + y3 * sphereRadius * scale;

        // Depth alpha factor: front hemisphere (z > 0) is brighter, back (z < 0) is faint
        const normalizedZ = (z3 + 1) * 0.5; // 0 (deep back) to 1 (front)
        const depthAlpha = Math.pow(Math.max(0.08, normalizedZ), 1.35);

        projectedNodes.push({
          x: screenX,
          y: screenY,
          z: z3,
          depthAlpha,
          scale,
          isHighlight: node.isHighlight,
          isMedium: node.isMedium,
          pulse: Math.sin(time * node.pulseSpeed + node.pulseOffset),
        });
      }

      // Sort nodes and lines by depth for accurate visual hierarchy (back-to-front)
      const connectThreshold = sphereRadius * 0.44;

      // 1. Draw Connecting Network Lines
      for (let i = 0; i < projectedNodes.length; i++) {
        const n1 = projectedNodes[i];

        for (let j = i + 1; j < projectedNodes.length; j++) {
          const n2 = projectedNodes[j];

          const dx = n1.x - n2.x;
          const dy = n1.y - n2.y;
          const dist = Math.hypot(dx, dy);

          if (dist < connectThreshold) {
            const distRatio = 1 - dist / connectThreshold;
            const avgDepth = (n1.depthAlpha + n2.depthAlpha) * 0.5;
            const lineAlpha = distRatio * 0.42 * avgDepth;

            if (lineAlpha > 0.015) {
              ctx.beginPath();
              ctx.moveTo(n1.x, n1.y);
              ctx.lineTo(n2.x, n2.y);

              if (n1.isHighlight || n2.isHighlight) {
                ctx.strokeStyle = `rgba(37, 99, 235, ${lineAlpha * 1.1})`; // Blevon Blue #2563EB
              } else if (avgDepth > 0.55) {
                ctx.strokeStyle = `rgba(96, 165, 250, ${lineAlpha * 0.85})`; // Sky Blue #60A5FA
              } else {
                ctx.strokeStyle = `rgba(14, 42, 109, ${lineAlpha * 0.6})`; // Deep Navy #0E2A6D
              }

              ctx.lineWidth = Math.max(0.4, distRatio * 0.9 * n1.scale);
              ctx.stroke();
            }
          }
        }
      }

      // 2. Draw Sphere Nodes & Soft Highlight Glows
      for (let i = 0; i < projectedNodes.length; i++) {
        const n = projectedNodes[i];

        let baseR = 1.3;
        if (n.isHighlight) baseR = 2.4;
        else if (n.isMedium) baseR = 1.8;

        const radius = baseR * n.scale;
        const nodeAlpha = Math.min(1, n.depthAlpha * (n.isHighlight ? 0.95 : 0.65));

        // Highlight nodes: render soft Blevon-blue glow halo
        if (n.isHighlight && n.z > -0.2) {
          const glowR = radius * (3.8 + n.pulse * 0.8);
          const glowGrad = ctx.createRadialGradient(
            n.x,
            n.y,
            0,
            n.x,
            n.y,
            glowR
          );
          glowGrad.addColorStop(0, `rgba(37, 99, 235, ${0.4 * nodeAlpha})`);
          glowGrad.addColorStop(0.5, `rgba(96, 165, 250, ${0.18 * nodeAlpha})`);
          glowGrad.addColorStop(1, "rgba(37, 99, 235, 0)");

          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(n.x, n.y, glowR, 0, Math.PI * 2);
          ctx.fill();
        }

        // Draw node core
        if (n.isHighlight) {
          ctx.fillStyle = `rgba(37, 99, 235, ${nodeAlpha})`; // Blevon Blue
        } else if (n.isMedium || n.depthAlpha > 0.6) {
          ctx.fillStyle = `rgba(96, 165, 250, ${nodeAlpha * 0.85})`; // Soft Blue
        } else {
          ctx.fillStyle = `rgba(14, 42, 109, ${nodeAlpha * 0.6})`; // Navy
        }

        ctx.beginPath();
        ctx.arc(n.x, n.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    animId = requestAnimationFrame(render);

    return () => {
      if (animId) cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="pointer-events-none absolute right-[-4vw] sm:right-[-2vw] lg:right-[1vw] xl:right-[4vw] top-1/2 -translate-y-1/2 z-0 size-[320px] sm:size-[400px] md:size-[480px] lg:size-[560px] xl:size-[620px] opacity-75 sm:opacity-85 lg:opacity-95 transition-opacity duration-500">
      <canvas
        ref={canvasRef}
        className="size-full"
      />
    </div>
  );
}
