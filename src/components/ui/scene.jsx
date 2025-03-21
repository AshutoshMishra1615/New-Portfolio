import { useRef, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, PerspectiveCamera, OrbitControls } from "@react-three/drei";
import * as THREE from "three";

export function Scene() {
  const groupRef = useRef(null);

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
      <color attach="background" args={["#0f0d0d"]} />
      <fog attach="fog" args={["#000000", 5, 15]} />

      <PerspectiveCamera makeDefault position={[0, 0, 7]} fov={75} />
      <OrbitControls enableZoom={false} enablePan={false} />

      <ambientLight intensity={0.4} />
      <directionalLight position={[10, 10, 5]} intensity={0.5} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} color="#4ecdc4" />

      <group ref={groupRef}>
        <Float
          speed={2}
          rotationIntensity={1}
          floatIntensity={1}
          floatingRange={[0, 0.5]}
        >
          <mesh position={[-5, 0, 0]}>
            <octahedronGeometry args={[2]} />
            <meshStandardMaterial
              color="#ffffff"
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
          <mesh position={[5, 0, 0]}>
            <torusKnotGeometry args={[0.7, 0.2, 128, 32]} />
            <meshStandardMaterial
              color="#ffffff"
              roughness={0.3}
              metalness={0.8}
            />
          </mesh>
        </Float>
      </group>
    </>
  );
}
