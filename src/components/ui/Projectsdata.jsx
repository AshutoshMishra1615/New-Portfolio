import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Github, ExternalLink, Calendar, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "./skeleton";

const projectsData = [
  {
    id: 1,
    title: "Taskinator",
    description: "A task management application with a Kanban-style interface.",
    longDescription:
      "Taskinator is a web-based task management tool that allows users to create, manage, and track tasks using a Kanban-style board. Users can add new tasks, assign them to different categories, and move them across columns representing different stages of progress. The application is designed to improve productivity and organization.",
    image: "/taskinator.png",
    category: "productivity",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://taskinatordev.vercel.app/",
    github: "https://github.com/AshutoshMishra1615/Taskinator",
    date: "March 2024",
    features: [
      "Add, edit, and delete tasks",
      "Drag-and-drop functionality",
      "Persistent data using local storage",
      "Responsive design",
      "User-friendly interface",
    ],
    challenges:
      "Ensuring smooth drag-and-drop functionality across different devices and maintaining data persistence were key challenges. These were overcome by implementing native drag-and-drop events and utilizing local storage effectively.",
  },
  {
    id: 2,
    title: "Memorite",
    description: "A memory game built with HTML, CSS, and JavaScript.",
    longDescription:
      "Memorite is a classic memory matching game where players flip over cards to find matching pairs. It's designed to enhance memory skills and provide entertainment. The game features multiple difficulty levels, a timer, and a scoring system to track player performance.",
    image: "/memorite.png",
    category: "game",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://memorite.vercel.app/",
    github: "https://github.com/AshutoshMishra1615/Memorite",
    date: "February 2024",
    features: [
      "Multiple difficulty levels",
      "Responsive design",
      "Timer and scoring system",
      "Interactive animations",
      "Sound effects",
    ],
    challenges:
      "Implementing efficient card flipping animations and ensuring compatibility across different browsers were notable challenges. These were addressed by using CSS transitions and thorough testing.",
  },

  {
    id: 3,
    title: "Restaurant Page",
    description:
      "A multi-page restaurant website showcasing menu, services, and contact information.",
    longDescription:
      "This project is a responsive restaurant website that provides visitors with information about the restaurant's offerings, including the menu, services, and contact details. The site features a modern design, intuitive navigation, and is optimized for both desktop and mobile users.",
    image: "/restaurant-page.png",
    category: "web",
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://restaurant-page-ashutoshmishra1615s-projects.vercel.app",
    github: "https://github.com/AshutoshMishra1615/Restaurant-Page",
    date: "April 2024",
    features: [
      "Home, Menu, Services, and Contact pages",
      "Responsive design",
      "Interactive menu with images",
      "Contact form with validation",
      "Google Maps integration",
    ],
    challenges:
      "Creating a seamless user experience across multiple pages and ensuring responsiveness on various devices were significant challenges. These were addressed by implementing a mobile-first design approach and thorough testing.",
  },
];

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const projectId = Number.parseInt(id);
      const foundProject = projectsData.find((p) => p.id === projectId);

      if (foundProject) {
        setProject(foundProject);
      } else {
        navigate("/projects");
      }

      setLoading(false);
    }
  }, [id, navigate]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!project) {
    return null;
  }

  return (
    <div className="relative text-white min-h-screen bg-gradient-to-br from-background/50 to-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Projects
          </Button>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">{project.title}</h1>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="outline" className="flex items-center gap-2">
                  <Github className="h-4 w-4" />
                  GitHub
                </Button>
              </a>
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <Button className="flex items-center gap-2">
                  <ExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="relative aspect-video overflow-hidden rounded-lg mb-8">
              <Skeleton
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Overview</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {project.longDescription}
                </p>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">Features</h2>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.1 * index }}
                      className="flex items-start gap-2"
                    >
                      <div className="rounded-full bg-primary/10 p-1 mt-1">
                        <div className="rounded-full bg-primary w-1.5 h-1.5" />
                      </div>
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Challenges & Solutions
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  {project.challenges}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-8"
          >
            <div className="bg-card/50 backdrop-blur-sm rounded-lg p-6 border border-muted-foreground/20">
              <h3 className="text-xl font-semibold mb-4">Project Details</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">{project.date}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Tag className="h-5 w-5 text-muted-foreground" />
                  <div>
                    <p className="text-sm text-muted-foreground">Category</p>
                    <p className="font-medium capitalize">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
