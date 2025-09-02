import { ParticlesBackground } from "@/components/ui/ParticlesBackground";

const BackgroundEffects = () => {
  return (
    <>
      {/* Optimized Particles Background */}
      <ParticlesBackground particleCount={20} />
      
      {/* Optimized Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-gradient-to-r from-primary/8 to-tech-secondary/8 rounded-full blur-3xl animate-float"></div>
        <div 
          className="absolute bottom-1/4 right-1/4 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-tech-accent/6 to-primary/6 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '2s' }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 sm:w-48 h-32 sm:h-48 bg-gradient-to-r from-tech-secondary/8 to-tech-accent/8 rounded-full blur-3xl animate-float" 
          style={{ animationDelay: '4s' }}
        ></div>
      </div>
    </>
  );
};

export default BackgroundEffects;