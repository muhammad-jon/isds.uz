import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";
import { OrbitControls } from "@react-three/drei";
import { Globe } from "../globe";
import { SceneLights } from "../demos/scene-lights";
import { GlobeRouteAnimation } from "@/lib/types";
import { GLOBE_DEFAULTS } from "@/lib/config";
import { gsap } from "gsap";

interface RotatingGlobeProps {
  routes: GlobeRouteAnimation[][];
  isLoaded?: boolean;
  rotationSpeed?: number;
  paused?: boolean;
  tilt?: number;
  sphereColor?: string;
  dotDensity?: number;
  dotColor?: string;
  twinkleStrength?: number;
  arcColor?: string;
  pathColor?: string;
  animationSpeed?: number;
  ambientIntensity?: number;
  directionalIntensity?: number;
}

const RotatingGlobe = ({
  routes,
  isLoaded = true,
  rotationSpeed = GLOBE_DEFAULTS.rotationSpeed,
  paused = false,
  tilt = GLOBE_DEFAULTS.tilt,
  sphereColor = GLOBE_DEFAULTS.sphereColor,
  dotDensity = GLOBE_DEFAULTS.dotDensity,
  dotColor = GLOBE_DEFAULTS.dotColor,
  twinkleStrength = GLOBE_DEFAULTS.twinkleStrength,
  arcColor = GLOBE_DEFAULTS.arcColor,
  pathColor = GLOBE_DEFAULTS.pathColor,
  animationSpeed = GLOBE_DEFAULTS.animationSpeed,
  ambientIntensity = GLOBE_DEFAULTS.ambientIntensity,
  directionalIntensity = GLOBE_DEFAULTS.directionalIntensity,
}: RotatingGlobeProps) => {
  const globeRef = useRef<Group>(null);
  const hasAnimatedRef = useRef(false);

  useEffect(() => {
    if (!globeRef.current) return;

    if (!isLoaded) {
      globeRef.current.scale.set(0.001, 0.001, 0.001);
      return;
    }

    if (hasAnimatedRef.current) {
      globeRef.current.scale.set(1, 1, 1);
      return;
    }

    hasAnimatedRef.current = true;
    gsap.fromTo(
      globeRef.current.scale,
      { x: 0.001, y: 0.001, z: 0.001 },
      {
        x: 1,
        y: 1,
        z: 1,
        duration: 1.5,
        delay: 0.1,
        ease: "power3.out",
      }
    );
  }, [isLoaded]);

  useFrame(() => {
    if (globeRef.current && !paused) {
      globeRef.current.rotation.y -= rotationSpeed;
    }
  });

  return (
    <>
      <Globe
        ref={globeRef}
        position={[0, 0, 0]}
        routes={routes}
        rotation={[tilt, 0, 0]}
        sphereColor={sphereColor}
        dotDensity={dotDensity}
        dotColor={dotColor}
        twinkleStrength={twinkleStrength}
        arcColor={arcColor}
        pathColor={pathColor}
        animationSpeed={animationSpeed}
      />
      <SceneLights ambientIntensity={ambientIntensity} directionalIntensity={directionalIntensity} />
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        enableDamping
        dampingFactor={0.1}
        rotateSpeed={0.5}
      />
    </>
  );
};

export { RotatingGlobe };
