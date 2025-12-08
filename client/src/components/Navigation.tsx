import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiGithub, SiLinkedin, SiInstagram } from "react-icons/si";

const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.href.slice(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect border-b border-border/50 py-3"
          : "bg-transparent py-5"
      }`}
      data-testid="navigation"
    >
      <div className="section-container">
        <div className="flex items-center justify-between gap-4">
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="font-heading text-xl font-bold gradient-text"
            data-testid="link-logo"
          >
            Rayhandi
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
                data-testid={`link-nav-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-linkedin"
            >
              <Button size="icon" variant="ghost">
                <SiLinkedin className="w-4 h-4" />
              </Button>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="link-github"
            >
              <Button size="icon" variant="ghost">
                <SiGithub className="w-4 h-4" />
              </Button>
            </a>
          </div>

          <Button
            size="icon"
            variant="ghost"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </Button>
        </div>

        <div
          className={`md:hidden absolute top-full left-0 right-0 glass-effect border-b border-border/50 transition-all duration-300 ${
            isMobileMenuOpen
              ? "opacity-100 visible translate-y-0"
              : "opacity-0 invisible -translate-y-4"
          }`}
        >
          <div className="section-container py-4 flex flex-col gap-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href);
                }}
                className={`px-4 py-3 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item.href.slice(1)
                    ? "text-foreground bg-accent"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                }`}
                data-testid={`link-nav-mobile-${item.name.toLowerCase()}`}
              >
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-2 mt-4 px-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-linkedin-mobile"
              >
                <Button size="icon" variant="ghost">
                  <SiLinkedin className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-github-mobile"
              >
                <Button size="icon" variant="ghost">
                  <SiGithub className="w-4 h-4" />
                </Button>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="link-instagram-mobile"
              >
                <Button size="icon" variant="ghost">
                  <SiInstagram className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
