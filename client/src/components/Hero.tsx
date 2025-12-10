import { useState, useEffect } from "react";
import { ChevronDown, Download, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const roles = [
  "Full-stack Developer",
  "Data Analyst",
  "Data Engineer",
  "Database Specialist",
];

export function Hero() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    const typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && displayText === currentRole) {
      const timeout = setTimeout(() => setIsDeleting(true), 2000);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayText(currentRole.slice(0, displayText.length - 1));
      } else {
        setDisplayText(currentRole.slice(0, displayText.length + 1));
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, currentRoleIndex]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
      data-testid="section-hero"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <p
              className="text-muted-foreground text-lg mb-2 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.2s" }}
              data-testid="text-greeting"
            >
              I'm
            </p>
            <h1
              className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-4 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
              data-testid="text-name"
            >
              <span className="gradient-text">Rayhandi Zulmi</span>
            </h1>
            <div
              className="h-12 mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.4s" }}
            >
              <span
                className="font-heading text-xl md:text-2xl text-foreground/90"
                data-testid="text-role"
              >
                {displayText}
                <span className="ml-0.5 inline-block w-0.5 h-6 bg-primary animate-blink" />
              </span>
            </div>
            <p
              className="text-muted-foreground text-base md:text-lg max-w-lg mx-auto lg:mx-0 mb-8 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.5s" }}
              data-testid="text-description"
            >
              I am ready to bring fresh and innovative ideas to your project.
              Let's make your vision come true together! Specializing in Sistem
              Informasi with expertise in full-stack development, data
              analytics, and database management.
            </p>

            <div
              className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mb-8 opacity-0 animate-fade-in-up"
              style={{ animationDelay: "0.6s" }}
            >
              <Button
                onClick={() => scrollToSection("#projects")}
                className="gap-2"
                data-testid="button-view-projects"
              >
                View Projects
                <ChevronDown className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection("#contact")}
                className="gap-2"
                data-testid="button-contact-me"
              >
                <MessageCircle className="w-4 h-4" />
                Contact Me
              </Button>
            </div>

            <div
              className="flex items-center justify-center lg:justify-start gap-3 opacity-0 animate-fade-in"
              style={{ animationDelay: "0.7s" }}
            >
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-hero-linkedin"
              >
                <Button size="icon" variant="secondary" className="rounded-full">
                  <SiLinkedin className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-hero-github"
              >
                <Button size="icon" variant="secondary" className="rounded-full">
                  <SiGithub className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-hero-instagram"
              >
                <Button size="icon" variant="secondary" className="rounded-full">
                  <SiInstagram className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>

          <div
            className="order-1 lg:order-2 flex justify-center opacity-0 animate-scale-in"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 via-purple-500/30 to-blue-500/30 rounded-full blur-2xl animate-pulse-glow" />
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary/30 gradient-border">
                <div className="w-full h-full bg-gradient-to-br from-card to-muted flex items-center justify-center">
                    <img
                      src="/foto_profil.jpg"
                      className="w-full h-full object-cover"
                      alt="Rayhandi Zulmi"
                    />
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 animate-float">
                <div className="bg-card border border-border rounded-lg px-4 py-2 shadow-lg">
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="font-heading font-bold text-lg">SI Specialist</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          scrollToSection("#about");
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in cursor-pointer"
        style={{ animationDelay: "1s" }}
        data-testid="link-scroll-down"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground animate-float" />
      </a>
    </section>
  );
}
