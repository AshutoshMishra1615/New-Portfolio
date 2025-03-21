import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function NavBarConstructer({ items, className }) {
  const [activeTab, setActiveTab] = useState(items[0].name);

  return (
    <div
      className={`fixed bottom-0 sm:top-0 left-1/2 -translate-x-1/2 z-50 mb-6 sm:pt-6 ${className}`}
    >
      <div className="flex items-center gap-3 bg-black/50 border border-gray-800 backdrop-blur-lg py-1 px-1 rounded-full shadow-lg shadow-black/40">
        {items.map((item) => {
          const isActive = activeTab === item.name;

          return (
            <Link
              key={item.name}
              to={item.url}
              onClick={() => setActiveTab(item.name)}
              className={`relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors
                text-gray-300 hover:text-white ${
                  isActive
                    ? "bg-gray-900 text-white shadow-md shadow-primary/30"
                    : ""
                }`}
            >
              <span className="hidden md:inline">{item.name}</span>
              <span className="md:hidden">
                <item.icon size={18} strokeWidth={2.5} />
              </span>
              {isActive && (
                <motion.div
                  layoutId="lamp"
                  className="absolute inset-0 w-full bg-primary/5 rounded-full -z-10"
                  initial={false}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                >
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-white rounded-t-full">
                    <div className="absolute w-12 h-6 bg-white/20 rounded-full blur-md -top-2 -left-2" />
                    <div className="absolute w-8 h-6 bg-white/20 rounded-full blur-md -top-1" />
                    <div className="absolute w-4 h-4 bg-white/20 rounded-full blur-sm top-0 left-2" />
                  </div>
                </motion.div>
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
