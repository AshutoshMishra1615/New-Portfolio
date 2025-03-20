import React from "react";
import { LogoCarousel } from "@/components/ui/logo-carousel";
import {
  VercelIcon,
  NextjsIcon,
  TailwindCSSIcon,
  TypeScriptIcon,
  ReactIcon,
  JSICON,
  PYTHONICON,
  BlenderIcon,
  NODEICON,
  FIREBASEICON,
  HTMLICON,
  CSSICON,
} from "@/components/ui/logosvg.jsx";

const allLogos = [
  { name: "Javascript", id: 1, img: JSICON },
  { name: "Python", id: 2, img: PYTHONICON },
  { name: "Blender", id: 3, img: BlenderIcon },
  { name: "Node", id: 4, img: NODEICON },
  { name: "FIrebase", id: 5, img: FIREBASEICON },
  { name: "Html", id: 6, img: HTMLICON },
  { name: "Css", id: 7, img: CSSICON },

  { name: "Vercel", id: 8, img: VercelIcon },

  { name: "Nextjs", id: 9, img: NextjsIcon },
  { name: "Tailwind", id: 10, img: TailwindCSSIcon },
  { name: "Typescript", id: 11, img: TypeScriptIcon },

  { name: "ReactIcon", id: 12, img: ReactIcon },
];

export function Logos() {
  return (
    <div className="y-space-3 py-10">
      <div className="flex justify-center relative text-3xl font-bold text-white ">
        SKILLS
      </div>
      <LogoCarousel columnCount={3} logos={allLogos} />
    </div>
  );
}
