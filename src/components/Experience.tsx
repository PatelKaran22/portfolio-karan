import { Briefcase, MapPin, Calendar } from "lucide-react";
import { siteConfig } from "@/data/site";

export const Experience = () => {
  return (
    <section id="experience" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Work <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Experience</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {siteConfig.experience.map((exp, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:neon-glow-cyan group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="p-3 rounded-xl bg-primary/10 border border-primary/30 group-hover:neon-glow-cyan transition-all">
                    <Briefcase className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground mb-1">{exp.role}</h3>
                  <p className="text-lg text-primary font-medium mb-2">{exp.company}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {exp.dates}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {exp.location}
                    </span>
                  </div>
                  <p className="text-muted-foreground italic mb-4">{exp.intro}</p>
                </div>
              </div>

              <div className="ml-16 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs rounded-full bg-muted/50 border border-border text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all cursor-default"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.bullets.map((bullet, bulletIndex) => (
                      <li key={bulletIndex} className="flex gap-3 text-sm text-muted-foreground">
                        <span className="text-primary mt-1.5 flex-shrink-0">▸</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
