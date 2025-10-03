import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { DashboardBackground } from "@/components/DashboardBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <DashboardBackground />
      <div className="relative z-10">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Education />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <footer className="py-8 border-t border-border">
          <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
            <p>© 2025 Karan Patel. Built with React & Tailwind CSS.</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Index;
