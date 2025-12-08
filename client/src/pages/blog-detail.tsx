import { useParams, Link } from "wouter";
import { ArrowLeft, Calendar, Clock, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { getBlogPostById, blogPosts } from "@/lib/blogData";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ParticlesBackground } from "@/components/ParticlesBackground";

export default function BlogDetail() {
  const { id } = useParams<{ id: string }>();
  const post = getBlogPostById(id || "");

  if (!post) {
    return (
      <div className="min-h-screen bg-background relative">
        <ParticlesBackground />
        <Navigation />
        <main className="relative z-10 pt-24">
          <div className="section-container py-24 text-center">
            <h1 className="font-heading text-4xl font-bold mb-4">
              Article Not Found
            </h1>
            <p className="text-muted-foreground mb-8">
              The article you're looking for doesn't exist.
            </p>
            <Link href="/#blog">
              <Button className="gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
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

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id && p.category === post.category)
    .slice(0, 2);

  return (
    <div className="min-h-screen bg-background relative">
      <ParticlesBackground />
      <Navigation />
      <main className="relative z-10 pt-24">
        <article className="section-container py-12">
          <Link href="/#blog">
            <Button variant="ghost" className="gap-2 mb-8" data-testid="button-back-blog">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>

          <div
            className={`h-48 md:h-64 rounded-2xl bg-gradient-to-br ${
              categoryColors[post.category] || "from-primary/20 to-purple-500/20"
            } flex items-center justify-center relative overflow-hidden mb-8`}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
            <span className="font-heading text-8xl md:text-9xl font-bold text-foreground/10">
              {post.title.charAt(0)}
            </span>
            <div className="absolute bottom-6 left-6 right-6">
              <Badge variant="secondary" className="mb-4">
                {post.category}
              </Badge>
              <h1
                className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold"
                data-testid="text-blog-title"
              >
                {post.title}
              </h1>
            </div>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-8">
                <span className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  {post.author}
                </span>
                <span className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}
                </span>
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime}
                </span>
              </div>

              <Card>
                <CardContent className="p-6 md:p-8">
                  <div
                    className="prose prose-invert max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-muted-foreground prose-strong:text-foreground prose-code:text-primary prose-code:bg-muted prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-pre:bg-muted prose-pre:border prose-pre:border-border"
                    data-testid="blog-content"
                  >
                    {post.content.split('\n').map((line, index) => {
                      if (line.startsWith('# ')) {
                        return <h1 key={index} className="text-2xl md:text-3xl font-bold mt-8 mb-4">{line.slice(2)}</h1>;
                      }
                      if (line.startsWith('## ')) {
                        return <h2 key={index} className="text-xl md:text-2xl font-semibold mt-6 mb-3">{line.slice(3)}</h2>;
                      }
                      if (line.startsWith('### ')) {
                        return <h3 key={index} className="text-lg md:text-xl font-semibold mt-4 mb-2">{line.slice(4)}</h3>;
                      }
                      if (line.startsWith('- ')) {
                        return <li key={index} className="text-muted-foreground ml-4">{line.slice(2)}</li>;
                      }
                      if (line.startsWith('```')) {
                        return null;
                      }
                      if (line.trim() === '') {
                        return <br key={index} />;
                      }
                      return <p key={index} className="text-muted-foreground leading-relaxed mb-4">{line}</p>;
                    })}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardContent className="p-5">
                  <h4 className="font-heading font-semibold mb-4 flex items-center gap-2">
                    <Tag className="w-4 h-4" />
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {relatedPosts.length > 0 && (
                <Card>
                  <CardContent className="p-5">
                    <h4 className="font-heading font-semibold mb-4">
                      Related Articles
                    </h4>
                    <div className="space-y-4">
                      {relatedPosts.map((relatedPost) => (
                        <Link key={relatedPost.id} href={`/blog/${relatedPost.id}`}>
                          <div className="group cursor-pointer">
                            <h5 className="text-sm font-medium group-hover:text-primary transition-colors line-clamp-2">
                              {relatedPost.title}
                            </h5>
                            <p className="text-xs text-muted-foreground mt-1">
                              {relatedPost.readTime}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              <Card>
                <CardContent className="p-5">
                  <h4 className="font-heading font-semibold mb-2">
                    About the Author
                  </h4>
                  <p className="text-muted-foreground text-sm mb-4">
                    SI specialist sharing insights on development, data
                    engineering, and database management.
                  </p>
                  <Link href="/#contact">
                    <Button size="sm" className="w-full" data-testid="button-contact-author">
                      Get in Touch
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
