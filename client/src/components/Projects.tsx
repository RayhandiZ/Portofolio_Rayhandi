import { useState, useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@shared/schema";

const categories = [
  "All",
  "Web Development",
  "Data Analysis",
  "Data Engineering",
  "Database",
];

const projects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    category: "Web Development",
    image: "",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
  },
  {
    id: "2",
    title: "Sales Analytics Dashboard",
    description:
      "Interactive dashboard for visualizing sales data, trends, and predictive analytics.",
    category: "Data Analysis",
    image: "",
    technologies: ["Python", "Pandas", "Plotly", "SQL"],
  },
  {
    id: "3",
    title: "ETL Data Pipeline",
    description:
      "Automated data pipeline for processing and transforming large datasets from multiple sources.",
    category: "Data Engineering",
    image: "",
    technologies: ["Apache Airflow", "Python", "Spark", "AWS"],
  },
  {
    id: "4",
    title: "Inventory Management System",
    description:
      "Database-driven inventory system with real-time tracking and automated reordering.",
    category: "Database",
    image: "",
    technologies: ["MySQL", "Express", "React", "Docker"],
  },
  {
    id: "5",
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team features.",
    category: "Web Development",
    image: "",
    technologies: ["Next.js", "Prisma", "TypeScript", "Tailwind"],
  },
  {
    id: "6",
    title: "Customer Segmentation Analysis",
    description:
      "Machine learning project for customer segmentation and behavior analysis.",
    category: "Data Analysis",
    image: "",
    technologies: ["Python", "Scikit-learn", "Jupyter", "Tableau"],
  },
];

function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const categoryColors: Record<string, string> = {
    "Web Development": "from-blue-500/20 to-blue-600/20",
    "Data Analysis": "from-green-500/20 to-emerald-600/20",
    "Data Engineering": "from-purple-500/20 to-violet-600/20",
    "Database": "from-orange-500/20 to-amber-600/20",
  };

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0) scale(1)" : "translateY(30px) scale(0.95)",
        transitionDelay: `${index * 100}ms`,
      }}
      data-testid={`card-project-${project.id}`}
    >
      <Card className="h-full group hover-elevate overflow-visible">
        <div
          className={`h-48 rounded-t-lg bg-gradient-to-br ${
            categoryColors[project.category] || "from-primary/20 to-purple-500/20"
          } flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <span className="font-heading text-4xl font-bold text-foreground/20 group-hover:scale-110 transition-transform duration-300">
            {project.title.charAt(0)}
          </span>
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
            <Badge variant="secondary" className="text-xs">
              {project.category}
            </Badge>
            <div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
              <Button size="icon" variant="secondary" className="h-7 w-7">
                <Github className="w-3 h-3" />
              </Button>
              <Button size="icon" variant="secondary" className="h-7 w-7">
                <ExternalLink className="w-3 h-3" />
              </Button>
            </div>
          </div>
        </div>
        <CardContent className="p-5">
          <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="outline" className="text-xs">
                {tech}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export function Projects() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-24 relative"
      data-testid="section-projects"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div
          className="text-center mb-12 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-projects-title"
          >
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my work across different domains and technologies
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No projects found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
