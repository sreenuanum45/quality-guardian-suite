import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useMouseTracker } from "@/hooks/useParallax";

const HeroSection = () => {
  const scrollRef = useScrollAnimation() as any;
  const cardRef = useMouseTracker() as any;

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-primary/5 via-background to-tech-secondary/5 flex items-center justify-center px-4 py-20 overflow-hidden">
      {/* Floating background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-tech-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-tech-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-tech-accent/10 rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container max-w-6xl" ref={scrollRef}>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="text-center lg:text-left space-y-6 reveal-on-scroll">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-tech-primary to-tech-secondary text-white px-4 py-2 text-sm font-medium animate-pulse-glow">
                Available for New Opportunities
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent leading-tight text-shimmer">
                Anumandla Sreenu
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium animate-fade-in-left">
                QA Automation Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 animate-fade-in-right">
                2.6+ years of expertise in automated testing, CI/CD integration, and delivering high-quality software solutions
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm animate-fade-in-left">
              <div className="flex items-center gap-2 justify-center lg:justify-start hover-lift group">
                <Phone className="h-4 w-4 text-tech-primary transition-transform group-hover:scale-110" />
                <span className="transition-colors group-hover:text-primary">+91-7416472820</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start hover-lift group">
                <Mail className="h-4 w-4 text-tech-primary transition-transform group-hover:scale-110" />
                <span className="transition-colors group-hover:text-primary">anumandlasreenu@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start hover-lift group">
                <MapPin className="h-4 w-4 text-tech-primary transition-transform group-hover:scale-110" />
                <span className="transition-colors group-hover:text-primary">Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start hover-lift group">
                <Linkedin className="h-4 w-4 text-tech-primary transition-transform group-hover:scale-110" />
                <span className="transition-colors group-hover:text-primary">LinkedIn Profile</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4 animate-bounce-in">
              <Button size="lg" className="bg-gradient-to-r from-primary to-tech-secondary hover:shadow-glow hover:scale-105 transition-all duration-300 pulse-glow">
                <Github className="h-4 w-4 mr-2" />
                View GitHub
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground hover:scale-105 transition-all duration-300 glass-morphism">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <Card 
              ref={cardRef}
              className="p-8 bg-gradient-to-br from-card to-section-bg shadow-tech hover:shadow-glow transition-all duration-500 max-w-md w-full hover-lift glass-morphism"
            >
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-tech-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg animate-pulse-glow floating-animation">
                  AS
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2 gradient-text">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-primary/5 rounded-lg hover-lift transition-all duration-300 hover:bg-primary/10 stagger-animation" style={{ '--stagger-delay': '1' } as any}>
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Test Cases Automated</div>
                    </div>
                    <div className="p-3 bg-tech-secondary/5 rounded-lg hover-lift transition-all duration-300 hover:bg-tech-secondary/10 stagger-animation" style={{ '--stagger-delay': '2' } as any}>
                      <div className="text-2xl font-bold text-tech-secondary">2.6+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="p-3 bg-tech-accent/5 rounded-lg hover-lift transition-all duration-300 hover:bg-tech-accent/10 stagger-animation" style={{ '--stagger-delay': '3' } as any}>
                      <div className="text-2xl font-bold text-tech-accent">80%</div>
                      <div className="text-xs text-muted-foreground">Effort Reduction</div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg hover-lift transition-all duration-300 hover:bg-primary/10 stagger-animation" style={{ '--stagger-delay': '4' } as any}>
                      <div className="text-2xl font-bold text-primary">3+</div>
                      <div className="text-xs text-muted-foreground">Zero-Defect Releases</div>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;