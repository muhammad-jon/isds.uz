"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export function ThreeHeroVisual() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // 1. Scene setup
    const scene = new THREE.Scene();

    // 2. Camera setup
    const width = container.clientWidth || 500;
    const height = container.clientHeight || 500;
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    // 3. Renderer with antialiasing and transparent background
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // 4. Group to hold our entire 3D cybernetic core
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // --- Inner Faceted Icosahedron Core (matching ISDS triangular brand facets) ---
    const innerGeom = new THREE.IcosahedronGeometry(1.4, 1);
    const innerMat = new THREE.MeshPhysicalMaterial({
      color: 0x1d4ed8,
      emissive: 0x0f2b82,
      roughness: 0.15,
      metalness: 0.85,
      clearcoat: 1.0,
      clearcoatRoughness: 0.1,
      wireframe: false,
      flatShading: true,
    });
    const innerMesh = new THREE.Mesh(innerGeom, innerMat);
    coreGroup.add(innerMesh);

    // Wireframe overlay on the core for high-tech holographic look
    const wireGeom = new THREE.WireframeGeometry(innerGeom);
    const wireMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const wireMesh = new THREE.LineSegments(wireGeom, wireMat);
    innerMesh.add(wireMesh);

    // --- Concentric Gyroscopic Rings ---
    const createRing = (radius: number, tube: number, color: number, tiltX: number, tiltY: number) => {
      const ringGeom = new THREE.TorusGeometry(radius, tube, 16, 100);
      const ringMat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.6,
        roughness: 0.3,
        metalness: 0.9,
      });
      const ring = new THREE.Mesh(ringGeom, ringMat);
      ring.rotation.x = tiltX;
      ring.rotation.y = tiltY;
      return ring;
    };

    const ring1 = createRing(2.1, 0.025, 0x3b82f6, Math.PI / 4, 0); // Blue ring
    const ring2 = createRing(2.4, 0.02, 0x06b6d4, -Math.PI / 3, Math.PI / 6); // Cyan ring
    const ring3 = createRing(2.7, 0.018, 0x818cf8, Math.PI / 6, -Math.PI / 4); // Indigo ring
    coreGroup.add(ring1);
    coreGroup.add(ring2);
    coreGroup.add(ring3);

    // Satellites / Data Beads on Rings
    const beadGeom = new THREE.SphereGeometry(0.08, 16, 16);
    const beadMat1 = new THREE.MeshBasicMaterial({ color: 0x60a5fa });
    const beadMat2 = new THREE.MeshBasicMaterial({ color: 0x22d3ee });
    const beadMat3 = new THREE.MeshBasicMaterial({ color: 0xa5b4fc });

    const bead1 = new THREE.Mesh(beadGeom, beadMat1);
    const bead2 = new THREE.Mesh(beadGeom, beadMat2);
    const bead3 = new THREE.Mesh(beadGeom, beadMat3);
    ring1.add(bead1);
    ring2.add(bead2);
    ring3.add(bead3);
    bead1.position.set(2.1, 0, 0);
    bead2.position.set(2.4, 0, 0);
    bead3.position.set(2.7, 0, 0);

    // --- Ambient Particle Nebula / Starfield ---
    const particleCount = 700;
    const particleGeom = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x38bdf8); // Sky blue
    const c2 = new THREE.Color(0x6366f1); // Indigo
    const c3 = new THREE.Color(0x10b981); // Emerald

    for (let i = 0; i < particleCount; i++) {
      // Golden spiral distribution in sphere
      const phi = Math.acos(-1 + (2 * i) / particleCount);
      const theta = Math.sqrt(particleCount * Math.PI) * phi;
      const radius = 2.8 + Math.random() * 2.2;

      particlePositions[i * 3] = radius * Math.cos(theta) * Math.sin(phi);
      particlePositions[i * 3 + 1] = radius * Math.sin(theta) * Math.sin(phi);
      particlePositions[i * 3 + 2] = radius * Math.cos(phi);

      const chosenColor = i % 3 === 0 ? c1 : i % 3 === 1 ? c2 : c3;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeom.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeom.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
    });
    const particles = new THREE.Points(particleGeom, particleMat);
    scene.add(particles);

    // --- Lighting ---
    const ambientLight = new THREE.AmbientLight(0x0a192f, 2.5);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x38bdf8, 45, 20);
    pointLight1.position.set(5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0x818cf8, 40, 20);
    pointLight2.position.set(-5, -4, 4);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x10b981, 30, 15);
    pointLight3.position.set(0, -5, -4);
    scene.add(pointLight3);

    // --- Interactive Mouse Parallax & Inertia ---
    let targetRotationX = 0;
    let targetRotationY = 0;
    let mouseX = 0;
    let mouseY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const normX = (e.clientX - rect.left) / rect.width - 0.5;
      const normY = (e.clientY - rect.top) / rect.height - 0.5;
      mouseX = normX * 2;
      mouseY = normY * 2;
      targetRotationY = mouseX * 0.8;
      targetRotationX = mouseY * 0.8;
    };

    const handlePointerLeave = () => {
      targetRotationX = 0;
      targetRotationY = 0;
    };

    container.addEventListener("mousemove", handlePointerMove);
    container.addEventListener("mouseleave", handlePointerLeave);

    // --- Animation Loop ---
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Core rotation
      innerMesh.rotation.y = elapsedTime * 0.35;
      innerMesh.rotation.x = Math.sin(elapsedTime * 0.25) * 0.2;

      // Pulse the scale of the inner core subtly
      const scalePulse = 1 + Math.sin(elapsedTime * 2.0) * 0.03;
      innerMesh.scale.set(scalePulse, scalePulse, scalePulse);

      // Rotate gyroscopic rings in opposite directions
      ring1.rotation.z = elapsedTime * 0.45;
      ring2.rotation.y = -elapsedTime * 0.55;
      ring3.rotation.x = elapsedTime * 0.35;

      // Rotate starfield slowly
      particles.rotation.y = elapsedTime * 0.08;
      particles.rotation.x = elapsedTime * 0.04;

      // Smooth inertia towards mouse position
      coreGroup.rotation.y += (targetRotationY - coreGroup.rotation.y) * 0.05;
      coreGroup.rotation.x += (targetRotationX - coreGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // --- Resize Handler ---
    const handleResize = () => {
      if (!container) return;
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener("resize", handleResize);

    // --- Cleanup ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", handleResize);
      container.removeEventListener("mousemove", handlePointerMove);
      container.removeEventListener("mouseleave", handlePointerLeave);

      // Dispose Three.js objects to avoid memory leaks
      innerGeom.dispose();
      innerMat.dispose();
      wireGeom.dispose();
      wireMat.dispose();
      particleGeom.dispose();
      particleMat.dispose();
      beadGeom.dispose();
      beadMat1.dispose();
      beadMat2.dispose();
      beadMat3.dispose();
      renderer.dispose();

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div className="relative w-full aspect-square max-w-[520px] lg:max-w-none mx-auto flex items-center justify-center">
      {/* Subtle background ambient aura */}
      <div className="absolute inset-4 bg-gradient-to-tr from-blue-600/25 via-indigo-600/20 to-cyan-500/20 rounded-full blur-[90px] pointer-events-none -z-10 animate-pulse" />

      {/* Pure 3D WebGL Canvas */}
      <div
        ref={mountRef}
        className="w-full h-full cursor-grab active:cursor-grabbing rounded-3xl overflow-hidden"
        style={{ touchAction: "none" }}
      />
    </div>
  );
}
