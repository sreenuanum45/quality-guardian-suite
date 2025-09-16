import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import ProfileInfo from "./hero/ProfileInfo";
import ProfileCard from "./hero/ProfileCard";
import BackgroundEffects from "./hero/BackgroundEffects";

const HeroSection = () => {
  const { ref: heroRef, isVisible } = useScrollAnimation({ triggerOnce: true, threshold: 0, rootMargin: '100% 0px' });

  return (
    <section 
      id="home" 
      ref={heroRef} 
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-background to-tech-secondary/5 flex items-center justify-center px-4 py-12 sm:py-16 lg:py-20"
    >
      {/* Optimized Background Effects */}
      <BackgroundEffects />

      <div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Profile Information */}
          <ProfileInfo isVisible={isVisible} />
          
          {/* Profile Card */}
          <ProfileCard isVisible={isVisible} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;