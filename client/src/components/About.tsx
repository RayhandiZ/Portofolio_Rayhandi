import { useEffect, useState, useRef } from "react";
import { Code, Database, BarChart3, Workflow } from "lucide-react";
import { Card } from "@/components/ui/card";

const skills = [
  { name: "Full-stack Development", percentage: 90, icon: Code },
  { name: "Data Analysis", percentage: 85, icon: BarChart3 },
  { name: "Data Engineering", percentage: 80, icon: Workflow },
  { name: "Database Management", percentage: 88, icon: Database },
];

function SkillBar({
  name,
  percentage,
  icon: Icon,
  delay,
}: {
  name: string;
  percentage: number;
  icon: typeof Code;
  delay: number;
}) {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedPercentage, setAnimatedPercentage] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        let start = 0;
        const step = percentage / 30;
        const interval = setInterval(() => {
          start += step;
          if (start >= percentage) {
            setAnimatedPercentage(percentage);
            clearInterval(interval);
          } else {
            setAnimatedPercentage(Math.round(start));
          }
        }, 30);
        return () => clearInterval(interval);
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [isVisible, percentage, delay]);

  return (
    <div
      ref={ref}
      className="opacity-0 translate-y-4 transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(16px)",
        transitionDelay: `${delay}ms`,
      }}
      data-testid={`skill-${name.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          <Icon className="w-4 h-4 text-primary" />
          <span className="text-sm font-medium">{name}</span>
        </div>
        <span className="text-sm text-muted-foreground">{animatedPercentage}%</span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-primary to-purple-500 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: isVisible ? `${percentage}%` : "0%",
            transitionDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export function About() {
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

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 relative"
      data-testid="section-about"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="section-container relative z-10">
        <div
          className="text-center mb-16 transition-all duration-700"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(30px)",
          }}
        >
          <h2
            className="font-heading text-3xl md:text-4xl font-bold mb-4"
            data-testid="text-about-title"
          >
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, skills, and what drives me in the
            world of Sistem Informasi
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div
            className="transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(-30px)",
              transitionDelay: "200ms",
            }}
          >
            <div className="relative w-full max-w-md mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-purple-500/20 to-transparent rounded-2xl blur-xl" />
              <Card className="relative overflow-hidden p-6">
                <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-card to-muted flex items-center justify-center mb-6">
                  <span className="font-heading text-8xl font-bold gradient-text">
                    RZ
                  </span>
                </div>
                <div className="text-center">
                  <h3 className="font-heading text-xl font-bold mb-1">
                    Rayhandi Zulmi
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    SI Specialist & Developer
                  </p>
                </div>
              </Card>
            </div>
          </div>

          <div
            className="space-y-8 transition-all duration-700"
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? "translateX(0)" : "translateX(30px)",
              transitionDelay: "400ms",
            }}
          >
            <div>
              <p
                className="text-foreground/90 leading-relaxed mb-4"
                data-testid="text-about-description"
              >
                Sistem Informasi student with boundless creativity! Mastering
                technical skills to transform ideas into innovative solutions.
                Combining analytical expertise with a touch of aesthetics to
                create meaningful works.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I specialize in building full-stack web applications, analyzing
                complex datasets, designing robust data pipelines, and managing
                efficient database systems. My passion lies in creating
                technology solutions that make a real impact.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="font-heading text-lg font-semibold mb-4">
                My Skills
              </h4>
              {skills.map((skill, index) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  percentage={skill.percentage}
                  icon={skill.icon}
                  delay={index * 150}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
