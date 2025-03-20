import { NavBar } from "./components/ui/navbar";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Scene } from "./components/ui/scene";
import { Home } from "./components/ui/home.jsx";
import { About } from "./components/ui/about";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="w-screen h-screen z-0">
        <div className="absolute inset-0 z-0">
          <Canvas dpr={[1, 2]}>
            <Suspense fallback={null}>
              <Scene />
            </Suspense>
          </Canvas>
        </div>
        <NavBar />
        <div className="bg-[#0f0d0d] z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
