"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Filter, Search } from "lucide-react";
import ProjectCard from "./project-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const projectsData = [
  {
    id: 1,
    title: "Taskinator",
    description:
      "A Kanban-style task management application allowing users to track and manage tasks efficiently.",
    image: "/images/taskinator.png",
    category: "web",
    technologies: ["JavaScript", "HTML", "CSS"],
    link: "https://ashutoshmishra1615.github.io/taskinator/",
    github: "https://github.com/AshutoshMishra1615/taskinator",
  },
  {
    id: 2,
    title: "Memorite",
    description:
      "A memory game application that challenges users to match pairs of cards within a time limit.",
    image: "/images/memorite.png",
    category: "game",
    technologies: ["React", "CSS", "JavaScript"],
    link: "https://ashutoshmishra1615.github.io/memorite/",
    github: "https://github.com/AshutoshMishra1615/memorite",
  },
  {
    id: 3,
    title: "Restaurant Page",
    description:
      "A multi-page restaurant website showcasing menu items, contact information, and online reservations.",
    image: "/images/restaurant-page.png",
    category: "web",
    technologies: ["JavaScript", "Webpack", "CSS", "HTML"],
    link: "https://ashutoshmishra1615.github.io/restaurant-page/",
    github: "https://github.com/AshutoshMishra1615/restaurant-page",
  },
];

const categories = ["all", "web", "mobile", "ai", "data", "blockchain"];

export default function ProjectsShowcase() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProject, setHoveredProject] = useState(null);

  const filteredProjects = projectsData.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.technologies.some((tech) =>
        tech.toLowerCase().includes(searchQuery.toLowerCase())
      );

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h1 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-cyan-400 mb-4">
          My Projects
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Explore my creative work and technical projects. Each project
          represents a unique challenge and solution.
        </p>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row justify-between items-center mb-12 gap-4"
      >
        <div className="relative w-full md:w-96">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          <Input
            type="text"
            placeholder="Search projects..."
            className="pl-10 w-full"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="flex items-center gap-3">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="text-white flex items-center gap-2"
              >
                <Filter className="h-4 w-4" />
                {selectedCategory.charAt(0).toUpperCase() +
                  selectedCategory.slice(1)}{" "}
                Projects
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {categories.map((category) => (
                <DropdownMenuItem
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className="capitalize"
                >
                  {category}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </motion.div>
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.1 * (project.id % 6),
              }}
              whileHover={{
                y: -10,
                transition: { duration: 0.2 },
              }}
              onHoverStart={() => setHoveredProject(project.id)}
              onHoverEnd={() => setHoveredProject(null)}
            >
              <ProjectCard
                project={project}
                isHovered={hoveredProject === project.id}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <h3 className="text-2xl font-medium text-muted-foreground">
            No projects found matching your criteria
          </h3>
          <p className="mt-2">Try adjusting your search or filter settings</p>
        </motion.div>
      )}
    </div>
  );
}
