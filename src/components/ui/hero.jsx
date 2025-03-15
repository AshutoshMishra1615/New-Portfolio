import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-start z-10 pointer-events-none">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mt-20 text-center text-white pointer-events-auto"
      >
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg text-gray-300 mt-2">
          3D Developer | Web Enthusiast
        </p>
      </motion.div>
    </div>
  );
};
