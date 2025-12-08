import { useEffect, useState, useRef } from "react";
import { Code2, BarChart3, Workflow, Database } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const services = [
  {
    id: "1",
    title: "Full-stack Development",
    description:
      "Building complete web applications from frontend to backend with modern technologies like React, Node.js, and TypeScript.",
    icon: Code2,
  },
  {
    id: "2",
    title: "Data Analytics",
    description:
      "Transforming raw data into actionable insights through statistical analysis, visualization, and reporting.",
    icon: BarChart3,
  },
  {
    id: "3",
    title: "Data Engineering",
    description:
      "Designing and building scalable data pipelines, ETL processes, and data infrastructure for efficient data flow.",
    icon: Workflow,
  },
  {
    id: "4",
    title: "Database Design",
    description:
      "Creating optimized database schemas, queries, and management strategies for reliable data storage and retrieval.",
    icon: Database,
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof services)[0];
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

  const Icon = service.icon;

  return (
    <div
      ref={ref}
      className="transition-all duration-700"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 100}ms`,
      }}
      data-testid={`card-service-${service.id}`}
    >
      <Card className="h-full group hover-elevate overflow-visible">
        <CardContent className="p-6 text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-primary/20 to-purple-500/20 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <h3 className="font-heading text-lg font-semibold mb-3">
            {service.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {service.description}
          </p>
        </CardContent>
      </Card>
    </div>
  );
}

export function Services() {
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
      id="services"
      ref={sectionRef}
      className="py-24 relative"
      data-testid="section-services"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
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
            data-testid="text-services-title"
          >
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I provide several services that I handle with expertise and
            dedication
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
