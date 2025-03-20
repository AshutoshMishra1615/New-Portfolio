import React from "react";
import { Logos } from "@/components/ui/logo";
import { HeroContent } from "@/components/ui/heroContent";

function Home() {
  return (
    <>
      <div className="flex justify-center relative top-[30px] sm:top-[100px]">
        <img
          src="avatar.png"
          alt="avatar"
          className="w-64 h-64 rounded-full border-4 border-gray-700 shadow-lg"
        />
      </div>
      <div className=" w-full h-screen flex flex-col items-center justify-start z-10 pointer-events-none">
        <HeroContent />

        <Logos />
      </div>
    </>
  );
}

export { Home };
