import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Linkedin, Github, Download } from "lucide-react";

interface ProfileInfoProps {
  isVisible: boolean;
}

const ProfileInfo = ({ isVisible }: ProfileInfoProps) => {
  return (
    <div className={`text-center lg:text-left space-y-4 sm:space-y-6 transition-all duration-700 ${
      isVisible ? 'animate-slide-in-left opacity-100' : 'opacity-100'
    }`}>
      <div className="space-y-3 sm:space-y-4">
        <Badge className="bg-gradient-to-r from-tech-primary to-tech-secondary text-white px-3 py-1.5 text-xs sm:text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300">
          ⚡ Available for Opportunities
        </Badge>
        
        {/* Optimized Name with Gradient */}
        <div className="relative">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-tech-secondary to-tech-accent bg-clip-text text-transparent leading-tight">
            Anumandla Sreenu
          </h1>
        </div>
        
        <h2 className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-medium hover:text-foreground transition-colors duration-300">
          QA Automation Engineer
        </h2>
        
        <p className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
          2.8 years of expertise in automated testing, CI/CD integration, and delivering
          <span className="text-primary font-medium"> high-quality software solutions</span>
        </p>
      </div>

      {/* Optimized Contact Info */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <Phone className="h-4 w-4 text-tech-primary" />
          <a href="tel:+917416472820" className="hover:text-primary transition-colors" aria-label="Call">
            +91-7416472820
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <Mail className="h-4 w-4 text-tech-primary" />
          <a href="mailto:anumandlasreenu@gmail.com" className="hover:text-primary transition-colors" aria-label="Email">
            anumandlasreenu@gmail.com
          </a>
        </div>
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <MapPin className="h-4 w-4 text-tech-primary" />
          <span>Hyderabad, India</span>
        </div>
        <div className="flex items-center gap-2 justify-center lg:justify-start">
          <Linkedin className="h-4 w-4 text-tech-primary" />
          <a href="https://www.linkedin.com/in/anumandlasreenu/" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors" aria-label="LinkedIn">
            LinkedIn Profile
          </a>
        </div>
      </div>

      {/* Optimized Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start pt-2">
        <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-tech-secondary hover:shadow-lg hover:scale-105 transition-all duration-300">
          <a href="https://github.com/sreenuanum45" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
            View GitHub
          </a>
        </Button>
        
        <Button asChild variant="outline" size="lg" className="group hover:bg-gradient-to-r hover:from-primary hover:to-tech-secondary hover:text-white hover:border-transparent hover:shadow-lg hover:scale-105 transition-all duration-300">
          <a href="https://drive.google.com/file/d/1gW6pjX7oxx0pMBqsyFa3-4yaSzyY6JKq/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="Resume">
            <Download className="h-4 w-4 mr-2 group-hover:animate-bounce transition-transform duration-300" />
            Download Resume
          </a>
        </Button>
      </div>
    </div>
  );
};

export default ProfileInfo;