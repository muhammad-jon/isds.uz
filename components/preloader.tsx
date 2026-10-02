"use client";

import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

interface PreloaderProps {
  onLoaded?: () => void;
}

export function Preloader({ onLoaded }: PreloaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [statusText, setStatusText] = useState("INITIALIZING SYSTEM...");

  const overlayRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const logoWrapperRef = useRef<HTMLDivElement>(null);

  // Line-reveal refs
  const lineRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);

  // Individual triangle refs
  const t1Ref = useRef<SVGPolygonElement>(null);
  const t2Ref = useRef<SVGPolygonElement>(null);
  const t3Ref = useRef<SVGPolygonElement>(null);
  const t4Ref = useRef<SVGPolygonElement>(null);

  useEffect(() => {
    // Lock scroll during preloader
    document.body.style.overflow = "hidden";

    const t1 = t1Ref.current;
    const t2 = t2Ref.current;
    const t3 = t3Ref.current;
    const t4 = t4Ref.current;
    const line = lineRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;

    if (!t1 || !t2 || !t3 || !t4 || !line || !title || !subtitle) return;

    // 1. Initial State: Triangles dispersed, line collapsed, texts hidden behind line
    gsap.set(t1, { x: -35, y: -25, opacity: 0, scale: 0.85, transformOrigin: "50% 50%" });
    gsap.set(t2, { x: 35, y: -12, opacity: 0, scale: 0.85, transformOrigin: "50% 50%" });
    gsap.set(t3, { x: -35, y: 12, opacity: 0, scale: 0.85, transformOrigin: "50% 50%" });
    gsap.set(t4, { x: 35, y: 25, opacity: 0, scale: 0.85, transformOrigin: "50% 50%" });

    gsap.set(line, { scaleX: 0, opacity: 0 });
    gsap.set(title, { yPercent: 120, opacity: 0 });
    gsap.set(subtitle, { yPercent: -120, opacity: 0 });

    // Master Timeline
    const masterTl = gsap.timeline();

    // 2. Assembly animation: Flying in and snapping together into the parallelepiped
    masterTl.to([t1, t2, t3, t4], {
      x: 0,
      y: 0,
      opacity: 1,
      scale: 1,
      duration: 0.75,
      stagger: 0.08,
      ease: "back.out(1.8)",
    });

    // 3. Line expands across, and Title & Subtitle emerge sequentially from behind the line
    masterTl
      .to(
        line,
        {
          scaleX: 1,
          opacity: 1,
          duration: 0.65,
          ease: "expo.out",
        },
        "-=0.25"
      )
      .to(
        title,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.4"
      )
      .to(
        subtitle,
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.45"
      );

    // 4. Looping sequential energy wave & subtle breathing
    const pulseLoop = gsap.timeline({ repeat: -1 });
    const triangles = [t1, t2, t3, t4];

    triangles.forEach((triangle) => {
      pulseLoop.to(
        triangle,
        {
          filter: "brightness(1.55) drop-shadow(0 0 14px rgba(8,115,182,0.8))",
          scale: 1.05,
          duration: 0.22,
          yoyo: true,
          repeat: 1,
          ease: "power2.inOut",
        },
        "-=0.08"
      );
    });

    // Breathing expansion across the parallel gaps
    const breathLoop = gsap.timeline({ repeat: -1, yoyo: true });
    breathLoop
      .to(t1, { y: -3, duration: 1, ease: "sine.inOut" }, 0)
      .to(t2, { y: -1, duration: 1, ease: "sine.inOut" }, 0)
      .to(t3, { y: 1, duration: 1, ease: "sine.inOut" }, 0)
      .to(t4, { y: 3, duration: 1, ease: "sine.inOut" }, 0);

    // 5. Progress Bar Animation
    const progressObj = { value: 0 };
    const progressTween = gsap.to(progressObj, {
      value: 100,
      duration: 1.8,
      ease: "power2.out",
      onUpdate: () => {
        const val = Math.floor(progressObj.value);

        if (progressBarRef.current) {
          progressBarRef.current.style.width = `${val}%`;
        }

        if (val < 28) {
          setStatusText("INITIALIZING ENVIRONMENT...");
        } else if (val < 62) {
          setStatusText("ASSEMBLING SYSTEM GEOMETRY...");
        } else if (val < 90) {
          setStatusText("LOADING 3D CORE & SCENE...");
        } else {
          setStatusText("SYSTEM READY");
        }
      },
      onComplete: () => {
        // Kill background loops
        pulseLoop.kill();
        breathLoop.kill();

        // 6. Final Flash: Synchronized energy surge through all 4 triangles
        const exitTl = gsap.timeline({
          onComplete: () => {
            setIsVisible(false);
            document.body.style.overflow = "";
            onLoaded?.();
          },
        });

        exitTl
          .to([t1, t2, t3, t4], {
            x: 0,
            y: 0,
            scale: 1.1,
            filter: "brightness(2) drop-shadow(0 0 24px rgba(8,115,182,0.95))",
            duration: 0.28,
            ease: "power2.out",
          })
          .to(contentRef.current, {
            y: -25,
            opacity: 0,
            filter: "blur(12px)",
            duration: 0.35,
            ease: "power2.in",
          })
          .to(
            overlayRef.current,
            {
              yPercent: -100,
              duration: 0.85,
              ease: "power4.inOut",
              onStart: () => {
                onLoaded?.();
              },
            },
            "-=0.1"
          );
      },
    });

    return () => {
      progressTween.kill();
      masterTl.kill();
      pulseLoop.kill();
      breathLoop.kill();
      document.body.style.overflow = "";
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div
      ref={overlayRef}
      className="preloader-overlay fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#06080d] select-none pointer-events-auto"
      style={{ willChange: "transform" }}
    >
      {/* Background ambient glowing lights with the 4 brand colors */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full blur-[130px] pointer-events-none opacity-60"
        style={{
          background:
            "radial-gradient(circle, rgba(8,115,182,0.20) 0%, rgba(67,96,158,0.14) 40%, rgba(34,68,143,0.10) 70%, transparent 100%)",
        }}
      />

      {/* Fine background tech grid lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      {/* Main Preloader Content */}
      <div
        ref={contentRef}
        className="relative z-10 flex flex-col items-center text-center px-4 max-w-sm sm:max-w-md w-full"
      >
        {/* Animated Custom 4-Triangle Parallelepiped Logo */}
        <div ref={logoWrapperRef} className="relative mb-6 flex items-center justify-center">
          {/* Ethereal background aura behind the logo */}
          <div
            className="absolute -inset-6 rounded-full blur-2xl pointer-events-none animate-pulse opacity-75"
            style={{
              background:
                "radial-gradient(circle, rgba(8,115,182,0.35) 0%, rgba(67,96,158,0.2) 60%, transparent 100%)",
            }}
          />

          <svg
            viewBox="0 0 75 257"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-14 sm:w-16 h-auto drop-shadow-[0_0_20px_rgba(8,115,182,0.5)] relative z-10"
            style={{ overflow: "visible" }}
          >
            {/* 1. Top Triangle: rgb(34, 68, 143) */}
            <polygon
              ref={t1Ref}
              points="0,0 75,43.3 0,86.6"
              fill="rgb(34, 68, 143)"
              className="will-change-transform"
            />

            {/* 2. Second Triangle: rgb(67, 96, 158) */}
            <polygon
              ref={t2Ref}
              points="75,56.6 0,99.9 75,143.2"
              fill="rgb(67, 96, 158)"
              className="will-change-transform"
            />

            {/* 3. Third Triangle: rgb(8, 115, 182) */}
            <polygon
              ref={t3Ref}
              points="0,113.2 75,156.5 0,199.8"
              fill="rgb(8, 115, 182)"
              className="will-change-transform"
            />

            {/* 4. Bottom Triangle: rgb(137, 168, 214) */}
            <polygon
              ref={t4Ref}
              points="75,169.8 0,213.1 75,256.4"
              fill="rgb(137, 168, 214)"
              className="will-change-transform"
            />
          </svg>
        </div>

        {/* Brand Name: Emerges sequentially from behind a single line */}
        <div className="mb-8 flex flex-col items-center w-full">
          {/* Title masked container (slides up from line) */}
          <div className="overflow-hidden py-1">
            <div
              ref={titleRef}
              className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white will-change-transform"
            >
              ISDS<span style={{ color: "rgb(8, 115, 182)" }}>.UZ</span>
            </div>
          </div>

          {/* Single Revealer Line (expands horizontally) */}
          <div
            ref={lineRef}
            className="h-[1.5px] w-48 sm:w-56 my-1.5 rounded-full will-change-transform shadow-[0_0_12px_rgba(8,115,182,0.8)]"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgb(34, 68, 143) 20%, rgb(67, 96, 158) 40%, rgb(8, 115, 182) 65%, rgb(137, 168, 214) 85%, transparent 100%)",
            }}
          />

          {/* Subtitle masked container (slides down from line) */}
          <div className="overflow-hidden py-1">
            <div
              ref={subtitleRef}
              className="text-[11px] font-mono tracking-[0.25em] text-zinc-400 uppercase font-medium will-change-transform"
            >
              Enterprise IT Systems
            </div>
          </div>
        </div>

        {/* Progress Section */}
        <div className="w-full space-y-3">
          {/* Centered Status text (no percentage) */}
          <div className="flex items-center justify-center text-center">
            <span className="text-zinc-400 text-[11px] font-mono tracking-widest uppercase">
              {statusText}
            </span>
          </div>

          {/* Progress bar track with the 4 brand colors gradient */}
          <div className="h-1.5 w-full bg-zinc-900 border border-zinc-800/80 rounded-full overflow-hidden relative shadow-inner">
            <div
              ref={progressBarRef}
              className="h-full rounded-full transition-[width] duration-75 ease-out shadow-[0_0_14px_rgba(8,115,182,0.8)]"
              style={{
                width: "0%",
                background:
                  "linear-gradient(90deg, rgb(34, 68, 143) 0%, rgb(67, 96, 158) 33%, rgb(8, 115, 182) 66%, rgb(137, 168, 214) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
