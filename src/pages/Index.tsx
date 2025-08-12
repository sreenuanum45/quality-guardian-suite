import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ExperienceSection from "@/components/portfolio/ExperienceSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import EducationSection from "@/components/portfolio/EducationSection";
import AchievementsSection from "@/components/portfolio/AchievementsSection";
import TestimonialsSection from "@/components/portfolio/TestimonialsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Navbar from "@/components/portfolio/Navbar";
import Footer from "@/components/portfolio/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main id="main-content" tabIndex={-1} className="focus:outline-none">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <EducationSection />
        <AchievementsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
