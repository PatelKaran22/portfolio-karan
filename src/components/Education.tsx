import { GraduationCap, MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";

export const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Education</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-6">
          {siteConfig.education.map((edu, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-8 hover:-translate-y-1 transition-all duration-300 hover:neon-glow-violet"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <GraduationCap className="h-6 w-6 text-secondary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.school}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground ml-9">
                    <span>{edu.dates}</span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      {edu.location}
                    </span>
                  </div>
                </div>
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center px-4 py-2 rounded-full bg-secondary/10 border border-secondary/30 text-secondary font-semibold">
                    GPA: {edu.gpa}
                  </div>
                </div>
              </div>

              <div className="ml-9 mt-6">
                <h4 className="text-sm font-semibold text-foreground mb-3">Relevant Coursework:</h4>
                <div className="flex flex-wrap gap-2">
                  {edu.coursework.map((course, courseIndex) => (
                    <span
                      key={courseIndex}
                      className="px-3 py-1 text-xs rounded-full bg-muted/50 border border-border text-foreground hover:bg-secondary hover:text-secondary-foreground hover:border-secondary transition-all cursor-default"
                    >
                      {course}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
