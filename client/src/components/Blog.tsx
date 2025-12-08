import { useState, useEffect, useRef } from "react";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";
import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { blogPosts } from "@/lib/blogData";

const categories = ["All", "Web Development", "Data Analysis", "Data Engineering", "Database"];

function BlogCard({
  post,
  index,
}: {
  post: (typeof blogPosts)[0];
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
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transitionDelay: `${index * 100}ms`,
      }}
      data-testid={`card-blog-${post.id}`}
    >
      <Card className="h-full group hover-elevate overflow-visible">
        <div
          className={`h-32 rounded-t-lg bg-gradient-to-br ${
            categoryColors[post.category] || "from-primary/20 to-purple-500/20"
          } flex items-center justify-center relative overflow-hidden`}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
          <span className="font-heading text-5xl font-bold text-foreground/10">
            {post.title.charAt(0)}
          </span>
          <div className="absolute bottom-3 left-4">
            <Badge variant="secondary" className="text-xs">
              {post.category}
            </Badge>
          </div>
        </div>
        <CardContent className="p-5">
          <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="font-heading text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {post.title}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4 line-clamp-2">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap gap-1.5 mb-4">
            {post.tags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className="text-xs">
                {tag}
              </Badge>
            ))}
          </div>
          <Link href={`/blog/${post.id}`}>
            <Button variant="ghost" size="sm" className="w-full gap-2" data-testid={`button-read-more-${post.id}`}>
              Read More
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export function Blog() {
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

  const filteredPosts =
    activeCategory === "All"
      ? blogPosts
      : blogPosts.filter((p) => p.category === activeCategory);

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="py-24 relative"
      data-testid="section-blog"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
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
            data-testid="text-blog-title"
          >
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Insights, tutorials, and thoughts on SI, development, and data
            engineering
          </p>

          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "secondary"}
                size="sm"
                onClick={() => setActiveCategory(category)}
                data-testid={`button-blog-filter-${category.toLowerCase().replace(/\s+/g, "-")}`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredPosts.map((post, index) => (
            <BlogCard key={post.id} post={post} index={index} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No articles found in this category.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
