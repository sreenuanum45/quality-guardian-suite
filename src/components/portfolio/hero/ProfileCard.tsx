import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Eye } from "lucide-react";

interface ProfileCardProps {
  isVisible: boolean;
}

const ProfileCard = ({ isVisible }: ProfileCardProps) => {
  const stats = [
    { value: "500+", label: "Test Cases Automated", color: "primary" },
    { value: "2.8", label: "Years Experience", color: "tech-secondary" },
    { value: "80%", label: "Effort Reduction", color: "tech-accent" },
    { value: "3+", label: "Zero-Defect Releases", color: "primary" }
  ];

  return (
    <div className={`flex justify-center lg:justify-end transition-all duration-700 delay-200 ${
      isVisible ? 'animate-slide-in-right opacity-100' : 'opacity-100'
    }`}>
      <Card className="group p-6 sm:p-8 bg-gradient-to-br from-card via-card to-section-bg shadow-xl hover:shadow-floating backdrop-blur-sm border-glass-border hover:scale-105 transition-all duration-500 max-w-md w-full relative overflow-hidden">
        {/* Optimized Glassmorphism Effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="relative z-10 text-center space-y-6">
          {/* Optimized Avatar */}
          <div className="relative mx-auto w-24 sm:w-32 h-24 sm:h-32">
            <div className="relative w-full h-full bg-gradient-to-br from-primary to-tech-secondary rounded-full flex items-center justify-center text-white text-2xl sm:text-4xl font-bold shadow-lg transition-all duration-300 group-hover:scale-110">
              <span>AS</span>
            </div>
          </div>
          
          {/* Optimized Stats */}
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
              Quick Stats ⚡
            </h3>
            <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
              {stats.map((stat, index) => (
                <div 
                  key={stat.label} 
                  className="group/stat p-2 sm:p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg hover:from-primary/10 hover:to-primary/20 transition-all duration-300 hover:scale-105 cursor-default"
                >
                  <div className={`text-xl sm:text-2xl font-bold text-${stat.color} group-hover/stat:animate-bounce-subtle`}>
                    {stat.value}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Portfolio Button */}
          <Button 
            variant="ghost" 
            className="w-full group/btn bg-gradient-to-r from-transparent to-transparent hover:from-primary/10 hover:to-tech-secondary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            <Eye className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform duration-300" />
            Explore Portfolio
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default ProfileCard;