import { Mail, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/data/site";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center space-y-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Let's <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Connect</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              I'm always open to discussing new opportunities, collaborations, or data challenges. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
            <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:neon-glow-cyan group">
              <div className="flex flex-col items-center space-y-3">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 group-hover:neon-glow-cyan transition-all">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1">Email</h3>
                  <Button
                    variant="link"
                    asChild
                    className="text-sm text-muted-foreground hover:text-primary p-0"
                  >
                    <a href={`mailto:${siteConfig.links.email}`}>
                      {siteConfig.links.email}
                    </a>
                  </Button>
                </div>
              </div>
            </div>

            <div className="glass-card rounded-2xl p-6 hover:-translate-y-1 transition-all duration-300 hover:neon-glow-cyan group">
              <div className="flex flex-col items-center space-y-3">
                <div className="p-4 rounded-xl bg-primary/10 border border-primary/30 group-hover:neon-glow-cyan transition-all">
                  <Linkedin className="h-8 w-8 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground mb-1">LinkedIn</h3>
                  <Button
                    variant="link"
                    asChild
                    className="text-sm text-muted-foreground hover:text-primary p-0"
                  >
                    <a href={siteConfig.links.linkedin} target="_blank" rel="noopener noreferrer">
                      Connect
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <a 
              href="/Karan_Patel_Resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-primary transition-colors underline"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
