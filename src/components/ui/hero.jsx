import { motion } from "framer-motion";

export const Hero = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 20 }}
      transition={{ duration: 1 }}
      className="mt-3 sm:mt-22 text-center text-white pointer-events-auto"
    >
      <h1 className="text-5xl font-bold">Ashutosh Mishra</h1>
      <p className="text-lg text-gray-300 mt-2">
        3D Artist | Web Enthusiast | ML Practitioner
      </p>
    </motion.div>
  );
};
