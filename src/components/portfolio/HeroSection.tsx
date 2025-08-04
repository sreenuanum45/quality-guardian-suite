import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Mail, Linkedin, Github } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-tech-secondary/5 flex items-center justify-center px-4 py-20">
      <div className="container max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className="text-center lg:text-left space-y-6 animate-slide-up">
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-tech-primary to-tech-secondary text-white px-4 py-2 text-sm font-medium">
                Available for New Opportunities
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent leading-tight">
                Anumandla Sreenu
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground font-medium">
                QA Automation Engineer
              </h2>
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0">
                2.6+ years of expertise in automated testing, CI/CD integration, and delivering high-quality software solutions
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Phone className="h-4 w-4 text-tech-primary" />
                <span>+91-7416472820</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Mail className="h-4 w-4 text-tech-primary" />
                <span>anumandlasreenu@gmail.com</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="h-4 w-4 text-tech-primary" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Linkedin className="h-4 w-4 text-tech-primary" />
                <span>LinkedIn Profile</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <Button size="lg" className="bg-gradient-to-r from-primary to-tech-secondary hover:shadow-lg transition-all duration-300">
                <Github className="h-4 w-4 mr-2" />
                View GitHub
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Download Resume
              </Button>
            </div>
          </div>

          {/* Profile Card */}
          <div className="flex justify-center lg:justify-end animate-scale-in">
            <Card className="p-8 bg-gradient-to-br from-card to-section-bg shadow-2xl hover:shadow-3xl transition-all duration-500 max-w-md w-full">
              <div className="text-center space-y-6">
                <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary to-tech-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg">
                  AS
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Quick Stats</h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-primary/5 rounded-lg">
                      <div className="text-2xl font-bold text-primary">500+</div>
                      <div className="text-xs text-muted-foreground">Test Cases Automated</div>
                    </div>
                    <div className="p-3 bg-tech-secondary/5 rounded-lg">
                      <div className="text-2xl font-bold text-tech-secondary">2.6+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="p-3 bg-tech-accent/5 rounded-lg">
                      <div className="text-2xl font-bold text-tech-accent">80%</div>
                      <div className="text-xs text-muted-foreground">Effort Reduction</div>
                    </div>
                    <div className="p-3 bg-primary/5 rounded-lg">
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