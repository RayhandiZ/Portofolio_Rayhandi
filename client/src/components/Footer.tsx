import { Heart } from "lucide-react";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";
import { Button } from "@/components/ui/button";

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border" data-testid="footer">
      <div className="section-container">
        <div className="flex flex-col items-center gap-6">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="font-heading text-2xl font-bold gradient-text"
            data-testid="link-footer-logo"
          >
            Rayhandi Zulmi
          </a>

          <nav className="flex flex-wrap justify-center gap-4">
            {quickLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                data-testid={`link-footer-${link.name.toLowerCase()}`}
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-linkedin"
            >
              <Button size="icon" variant="ghost">
                <SiLinkedin className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-github"
            >
              <Button size="icon" variant="ghost">
                <SiGithub className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-footer-instagram"
            >
              <Button size="icon" variant="ghost">
                <SiInstagram className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <div className="text-center text-muted-foreground text-sm">
            <p className="flex items-center justify-center gap-1">
              Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> by
              Rayhandi Zulmi
            </p>
            <p className="mt-1">
              {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
