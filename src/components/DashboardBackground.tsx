import powerbiDash1 from "@/assets/powerbi-dashboard-1.png";
import powerbiDash2 from "@/assets/powerbi-dashboard-2.png";
import powerbiDash3 from "@/assets/powerbi-dashboard-3.png";
import powerbiDash4 from "@/assets/powerbi-dashboard-4.png";
import tableauDash1 from "@/assets/tableau-dashboard-1.png";
import tableauDash2 from "@/assets/tableau-dashboard-2.png";
import tableauDash3 from "@/assets/tableau-dashboard-3.png";

export const DashboardBackground = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {/* Animated grid background */}
      <div className="absolute inset-0 animated-grid opacity-20" />
      
      {/* Floating Dashboard Images */}
      {/* Top Left Section */}
      <div className="absolute top-10 -left-20 w-96 h-72 opacity-[0.08] animate-float-slow">
        <img 
          src={powerbiDash1} 
          alt="" 
          className="w-full h-full object-cover rounded-lg border border-primary/20 shadow-lg rotate-[-12deg] blur-[0.5px]"
        />
      </div>
      
      {/* Top Right Section */}
      <div className="absolute top-32 -right-20 w-96 h-72 opacity-[0.08] animate-float-slower">
        <img 
          src={tableauDash1} 
          alt="" 
          className="w-full h-full object-cover rounded-lg border border-secondary/20 shadow-lg rotate-[8deg] blur-[0.5px]"
        />
      </div>
      
      {/* Middle Left */}
      <div className="absolute top-1/3 -left-32 w-80 h-60 opacity-[0.08] animate-float-medium">
        <img 
          src={tableauDash2} 
          alt="" 
          className="w-full h-full object-cover rounded-lg border border-primary/20 shadow-lg rotate-[15deg] blur-[0.5px]"
        />
      </div>
      
      {/* Middle Right */}
      <div className="absolute top-1/2 -right-24 w-96 h-72 opacity-[0.08] animate-float-slow">
        <img 
          src={powerbiDash3} 
          alt="" 
          className="w-full h-full object-cover rounded-lg border border-secondary/20 shadow-lg rotate-[-10deg] blur-[0.5px]"
        />
      </div>
      
      {/* Bottom Left */}
      <div className="absolute bottom-32 -left-24 w-96 h-72 opacity-[0.08] animate-float-slower">
        <img 
          src={powerbiDash2} 
          alt="" 
          className="w-full h-full object-cover rounded-lg border border-primary/20 shadow-lg rotate-[12deg] blur-[0.5px]"
        />
      </div>
      
      {/* Bottom Right */}
      <div className="absolute bottom-20 -right-28 w-80 h-60 opacity-[0.08] animate-float-medium">
        <img 
          src={tableauDash3} 
          alt="" 
          className="w-full h-full object-cover rounded-lg border border-secondary/20 shadow-lg rotate-[-15deg] blur-[0.5px]"
        />
      </div>
      
      {/* Center Top */}
      <div className="absolute top-20 left-1/3 w-72 h-52 opacity-[0.08] animate-float-slow" style={{ animationDelay: '2s' }}>
        <img 
          src={powerbiDash4} 
          alt="" 
          className="w-full h-full object-cover rounded-lg border border-primary/20 shadow-lg rotate-[5deg] blur-[0.5px]"
        />
      </div>
      
      {/* Center Bottom */}
      <div className="absolute bottom-40 right-1/3 w-80 h-60 opacity-[0.08] animate-float-slower" style={{ animationDelay: '3s' }}>
        <img 
          src={tableauDash1} 
          alt="" 
          className="w-full h-full object-cover rounded-lg border border-secondary/20 shadow-lg rotate-[-8deg] blur-[0.5px]"
        />
      </div>
    </div>
  );
};
