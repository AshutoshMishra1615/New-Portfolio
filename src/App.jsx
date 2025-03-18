import { NavBar } from "./components/ui/navbar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "./components/ui/scene";
import { Hero } from "./components/ui/hero.jsx";
import { LogoCarouselDemo } from "./components/ui/logo";

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
        <div className="flex justify-center relative top-[30px] sm:top-[100px]">
          <img
            src="avatar.png"
            alt="avatar"
            className="w-64 h-64 rounded-full border-4 border-gray-700 shadow-lg"
          />
        </div>
        <div className=" w-full h-screen flex flex-col items-center justify-start z-10 pointer-events-none">
          <Hero />

          <LogoCarouselDemo />
        </div>
      </div>
    </>
  );
}

export default App;
