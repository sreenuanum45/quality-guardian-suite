import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ParticlesBackground } from "@/components/ui/ParticlesBackground";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MapPin, Phone, Mail, Linkedin, Github, Download, Eye } from "lucide-react";
const HeroSection = () => {
  const {
    ref: heroRef,
    isVisible
  } = useScrollAnimation({
    triggerOnce: true
  });
  return <section id="home" ref={heroRef} className="relative min-h-screen overflow-hidden bg-gradient-to-br from-primary/5 via-background to-tech-secondary/5 flex items-center justify-center px-4 py-20">
      {/* Animated Background */}
      <ParticlesBackground particleCount={30} />
      
      {/* Floating Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-primary/10 to-tech-secondary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-tech-accent/10 to-primary/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-tech-secondary/10 to-tech-accent/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '4s'
      }}></div>
      </div>

      <div className="container max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Info */}
          <div className={`text-center lg:text-left space-y-6 transition-all duration-1000 ${isVisible ? 'animate-slide-in-left' : 'opacity-0 translate-x-[-100px]'}`}>
            <div className="space-y-4">
              <Badge className="bg-gradient-to-r from-tech-primary to-tech-secondary text-white px-4 py-2 text-sm font-medium shadow-lg hover:shadow-xl transition-all duration-300 animate-bounce-subtle">
                ⚡ Available for New Opportunities
              </Badge>
              
              {/* Animated Name with Gradient */}
              <div className="relative">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-tech-secondary to-tech-accent bg-clip-text text-transparent leading-tight animate-gradient-shift bg-[length:200%_auto]">
                  Anumandla Sreenu
                </h1>
                {/* Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"></div>
                </div>
              </div>
              
              <div className="relative">
                <h2 className="text-xl md:text-2xl text-muted-foreground font-medium hover:text-foreground transition-colors duration-300">
                  QA Automation Engineer
                </h2>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-tech-secondary hover:w-full transition-all duration-500"></div>
              </div>
              
              <p className="text-lg text-muted-foreground max-w-lg mx-auto lg:mx-0 leading-relaxed">
                2.6+ years of expertise in automated testing, CI/CD integration, and delivering 
                <span className="text-primary font-medium"> high-quality software solutions</span>
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Phone className="h-4 w-4 text-tech-primary" />
                <a href="tel:+917416472820" className="underline-offset-4 hover:underline" aria-label="Call +91-7416472820">
                  +91-7416472820
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Mail className="h-4 w-4 text-tech-primary" />
                <a href="mailto:anumandlasreenu@gmail.com" className="underline-offset-4 hover:underline" aria-label="Send email to anumandlasreenu@gmail.com">
                  anumandlasreenu@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <MapPin className="h-4 w-4 text-tech-primary" />
                <span>Hyderabad, India</span>
              </div>
              <div className="flex items-center gap-2 justify-center lg:justify-start">
                <Linkedin className="h-4 w-4 text-tech-primary" />
                <a href="https://www.linkedin.com/in/anumandlasreenu/" target="_blank" rel="noopener noreferrer" className="underline-offset-4 hover:underline" aria-label="Open LinkedIn profile">
                  LinkedIn Profile
                </a>
              </div>
            </div>

            {/* Enhanced Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button asChild size="lg" className="group bg-gradient-to-r from-primary to-tech-secondary hover:from-tech-secondary hover:to-primary hover:shadow-2xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <a href="https://github.com/sreenuanum45" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Github className="h-4 w-4 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                  <span className="relative z-10">View GitHub</span>
                </a>
              </Button>
              
              <Button asChild variant="outline" size="lg" className="group hover:bg-gradient-to-r hover:from-primary hover:to-tech-secondary hover:text-white hover:border-transparent hover:shadow-xl hover:scale-105 transition-all duration-500 relative overflow-hidden">
                <a href="https://drive.google.com/file/d/1gW6pjX7oxx0pMBqsyFa3-4yaSzyY6JKq/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="Download resume">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-tech-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <Download className="h-4 w-4 mr-2 group-hover:animate-bounce transition-transform duration-300" />
                  <span className="relative z-10">Download Resume</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Enhanced Profile Card */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 delay-300 ${isVisible ? 'animate-slide-in-right' : 'opacity-0 translate-x-[100px]'}`}>
            <Card className="group p-8 bg-gradient-to-br from-card via-card to-section-bg shadow-2xl hover:shadow-floating backdrop-blur-sm border-glass-border hover:scale-105 transition-all duration-700 max-w-md w-full relative overflow-hidden">
              {/* Glassmorphism Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary via-tech-secondary to-tech-accent opacity-0 group-hover:opacity-20 blur-sm transition-opacity duration-500"></div>
              
              <div className="relative z-10 text-center space-y-6">
                {/* Enhanced Avatar */}
                <div className="relative mx-auto w-32 h-32">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary to-tech-secondary rounded-full animate-pulse-glow"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary to-tech-secondary rounded-full flex items-center justify-center text-white text-4xl font-bold shadow-lg hover:shadow-glow transition-all duration-500 group-hover:scale-110">
                    <span className="animate-tilt">AS</span>
                  </div>
                  {/* Floating Ring */}
                  <div className="absolute inset-0 border-2 border-white/30 animate-rotate-slow rounded-full"></div>
                </div>
                
                {/* Enhanced Stats */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
                    Quick Stats ⚡
                  </h3>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="group p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg hover:from-primary/10 hover:to-primary/20 transition-all duration-300 hover:scale-105 cursor-default">
                      <div className="text-2xl font-bold text-primary group-hover:animate-bounce-subtle">500+</div>
                      <div className="text-xs text-muted-foreground">Test Cases Automated</div>
                    </div>
                    <div className="group p-3 bg-gradient-to-br from-tech-secondary/5 to-tech-secondary/10 rounded-lg hover:from-tech-secondary/10 hover:to-tech-secondary/20 transition-all duration-300 hover:scale-105 cursor-default">
                      <div className="text-2xl font-bold text-tech-secondary group-hover:animate-bounce-subtle">2.6+</div>
                      <div className="text-xs text-muted-foreground">Years Experience</div>
                    </div>
                    <div className="group p-3 bg-gradient-to-br from-tech-accent/5 to-tech-accent/10 rounded-lg hover:from-tech-accent/10 hover:to-tech-accent/20 transition-all duration-300 hover:scale-105 cursor-default">
                      <div className="text-2xl font-bold text-tech-accent group-hover:animate-bounce-subtle">80%</div>
                      <div className="text-xs text-muted-foreground">Effort Reduction</div>
                    </div>
                    <div className="group p-3 bg-gradient-to-br from-primary/5 to-primary/10 rounded-lg hover:from-primary/10 hover:to-primary/20 transition-all duration-300 hover:scale-105 cursor-default">
                      <div className="text-2xl font-bold text-primary group-hover:animate-bounce-subtle">3+</div>
                      <div className="text-xs text-muted-foreground">Zero-Defect Releases</div>
                    </div>
                  </div>
                </div>
                
                {/* View Portfolio Button */}
                <Button variant="ghost" className="w-full group bg-gradient-to-r from-transparent to-transparent hover:from-primary/10 hover:to-tech-secondary/10 border border-primary/20 hover:border-primary/40 transition-all duration-300">
                  <Eye className="h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Explore Portfolio
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>;
};
export default HeroSection;