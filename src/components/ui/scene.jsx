import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export function Scene() {
  const groupRef = useRef(null); // ✅ FIXED: Removed TypeScript-like syntax

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(time / 4) * 0.2;
    }
  });

  useEffect(() => {
    return () => {
      console.log("Scene unmounted, cleaning up resources.");
    };
  }, []);

  return (
    <>
      <color attach="background" args={["#000000"]} />
      <fog attach="fog" args={["#000000", 5, 15]} />

      <PerspectiveCamera makeDefault position={[0, 0, 8]} fov={75} />
      <OrbitControls enableZoom={false} enablePan={false} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ecdc4" />

      <group ref={groupRef}>
        {" "}
        {/* ✅ FIXED: Correct ref assignment */}
        <Float
          speed={1.5}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0, 0.5]}
        >
          <mesh position={[-2, 0, 0]}>
            <octahedronGeometry args={[1]} />
            <meshStandardMaterial
              color="#ff6b6b"
              wireframe
              roughness={0.5}
              metalness={0.8}
            />
          </mesh>
        </Float>
        <Float
          speed={2}
          rotationIntensity={2}
          floatIntensity={1}
          floatingRange={[0, 0.7]}
        >
          <mesh position={[2, 0, 0]}>
            <torusKnotGeometry args={[0.7, 0.2, 128, 32]} />
            <meshStandardMaterial
              color="#4ecdc4"
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>
        </Float>
        <Float
          speed={1.8}
          rotationIntensity={1.5}
          floatIntensity={1}
          floatingRange={[0, 0.6]}
        >
          <mesh position={[0, 2, 0]}>
            <dodecahedronGeometry args={[0.8]} />
            <meshStandardMaterial
              color="#fed766"
              roughness={0.4}
              metalness={0.7}
            />
          </mesh>
        </Float>
      </group>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]}>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial
          color="#2ab7ca"
          roughness={0.7}
          metalness={0.3}
          transparent
          opacity={0.1}
        />
      </mesh>
    </>
  );
}
