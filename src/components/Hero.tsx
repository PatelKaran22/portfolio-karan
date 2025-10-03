import { FileText, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Profile Image */}
          <div className="flex justify-center md:justify-end animate-fade-in">
            <div className="mx-auto md:mx-0 rounded-full overflow-hidden ring-2 ring-cyan-400 ring-offset-2 ring-offset-slate-950 shadow-xl">
              <img
                src="/profile.jpg"
                alt="Karan Patel"
                className="object-cover object-[center_20%] w-64 h-64 md:w-80 md:h-80"
              />
            </div>
          </div>

          {/* Right: Content */}
          <div className="space-y-6 animate-slide-in">
            <div className="space-y-3">
              <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                {siteConfig.name}
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground font-medium">
                Business Intelligence & Supply Chain Analytics | Turning Data into Decisions
              </p>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse-glow" />
                {siteConfig.status}
              </div>
            </div>

            <div className="space-y-2">
              {siteConfig.role_titles.map((title, index) => (
                <h2
                  key={index}
                  className="text-xl md:text-2xl font-heading text-primary/80"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {title}
                </h2>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-2">
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-primary/30 hover:bg-primary/10 hover:neon-glow-cyan transition-all"
              >
                <a href="https://www.linkedin.com/in/kpate304/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="mr-2 h-5 w-5" />
                  LinkedIn
                </a>
              </Button>
              <Button
                size="lg"
                asChild
                className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-all neon-glow-cyan"
              >
                <a href="/Karan_Patel_Resume.pdf" target="_blank" rel="noopener noreferrer">
                  <FileText className="mr-2 h-5 w-5" />
                  Resume
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
