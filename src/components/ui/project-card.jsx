import { motion } from "framer-motion";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Skeleton } from "./skeleton";

export default function ProjectCard({ project, isHovered }) {
  const { title, description, image, technologies, link, github } = project;

  return (
    <Card className="overflow-hidden h-full flex flex-col group border-muted-foreground/20 bg-card/50 backdrop-blur-sm">
      <div className="relative overflow-hidden aspect-video">
        <motion.div
          animate={{
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
          className="w-full h-full"
        >
          <Skeleton className="object-cover w-full h-full transition-all" />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <motion.div
          className="absolute bottom-4 left-4 right-4 flex justify-between opacity-0 group-hover:opacity-100"
          initial={{ y: 20, opacity: 0 }}
          animate={{
            y: isHovered ? 0 : 20,
            opacity: isHovered ? 1 : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <a href={github} target="_blank" rel="noopener noreferrer">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <Github className="h-4 w-4" />
              <span className="sr-only">GitHub Repository</span>
            </Button>
          </a>
          <a href={link} target="_blank" rel="noopener noreferrer">
            <Button
              size="icon"
              variant="secondary"
              className="rounded-full bg-background/80 backdrop-blur-sm hover:bg-background"
            >
              <ExternalLink className="h-4 w-4" />
              <span className="sr-only">Live Demo</span>
            </Button>
          </a>
        </motion.div>
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-bold">{title}</CardTitle>
        <CardDescription className="line-clamp-2">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: 0.05 * index,
              }}
            >
              <Badge variant="outline" className="bg-primary/5">
                {tech}
              </Badge>
            </motion.div>
          ))}
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/projects/${project.id}`} className="w-full">
          <Button variant="ghost" className="w-full justify-between group">
            <span>View Details</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
