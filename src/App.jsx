import { NavBar } from "./components/ui/navbar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "./components/ui/scene";
import { Hero } from "./components/ui/hero.jsx";

function App() {
  return (
    <>
      <div className="relative w-full h-screen bg-black overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Canvas dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>

        <NavBar />
        <Hero />
      </div>
    </>
  );
}

export default App;
