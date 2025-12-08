import { useParams, Link } from "wouter";
import { ArrowLeft, ExternalLink, Github, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getProjectById } from "@/lib/projectsData";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export default function ProjectDetail() {
  const { id } = useParams<{ id: string }>();
  const project = getProjectById(id || "");

  if (!project) {
    return (
      <div className="min-h-screen bg-background relative">
        <ParticlesBackground />
        <Navigation />
        <main className="relative z-10 pt-24">
          <div className="section-container py-24 text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">
              Project Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The project you're looking for doesn't exist.
            </p>
            <Link href="/">
              <Button className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const categoryColors: Record<string, string> = {
    "Web Development": "from-blue-500/20 to-blue-600/20",
    "Data Analysis": "from-green-500/20 to-emerald-600/20",
    "Data Engineering": "from-purple-500/20 to-violet-600/20",
    "Database": "from-orange-500/20 to-amber-600/20",
  };

  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <Navigation />
      <main className="relative z-10 pt-24">
        <div className="section-container py-12">
          <Link href="/#projects">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back">
              <ArrowLeft className="w-4 h-4" />
              Back to Projects
            </Button>
          </Link>

          <div
            className={`h-64 md:h-80 rounded-2xl bg-gradient-to-br ${
              categoryColors[project.category] || "from-primary/20 to-purple-500/20"
            } flex items-center justify-center relative overflow-hidden mb-8`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <span className="font-heading text-8xl md:text-9xl font-bold text-foreground/10">
              {project.title.charAt(0)}
            </span>
            <div className="absolute bottom-6 left-6 right-6">
              <Badge variant="secondary" className="mb-4">
                {project.category}
              </Badge>
              <h1
                className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-2"
                data-testid="text-project-title"
              >
                {project.title}
              </h1>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Overview</CardTitle>
                </CardHeader>
                <CardContent>
                  <p
                    className="text-muted-foreground leading-relaxed"
                    data-testid="text-project-description"
                  >
                    {project.fullDescription}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Key Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {project.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                        data-testid={`text-feature-${index}`}
                      >
                        <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Case Study</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">
                      The Challenge
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.challenges}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">
                      The Solution
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.solution}
                    </p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-semibold mb-2 text-foreground">
                      The Results
                    </h4>
                    <p className="text-muted-foreground leading-relaxed">
                      {project.results}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Technologies</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" data-testid={`badge-tech-${tech.toLowerCase().replace(/\s+/g, "-")}`}>
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Links</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {project.demoUrl && (
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full gap-2" data-testid="button-demo">
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </Button>
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block"
                    >
                      <Button variant="outline" className="w-full gap-2" data-testid="button-github">
                        <Github className="w-4 h-4" />
                        View Source
                      </Button>
                    </a>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="font-heading">Interested?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm mb-4">
                    Want to discuss a similar project or have questions about
                    this one?
                  </p>
                  <Link href="/#contact">
                    <Button className="w-full" data-testid="button-contact">
                      Get in Touch
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
