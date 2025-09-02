import React from "react";
import { Github, Linkedin, Mail, MapPin, Phone, ArrowUp } from "lucide-react";
import ProtectedMailto from "@/components/security/ProtectedMailto";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-background via-background to-muted border-t border-border overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-gradient-to-r from-primary to-tech-secondary rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gradient-to-r from-tech-accent to-primary rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-6 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-8">
          
          {/* About Me Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
              About Me
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              QA Automation Engineer passionate about delivering quality software solutions. 
              Experienced in test automation, performance testing, and continuous integration.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              <span>Hyderabad, India</span>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
              Quick Links
            </h3>
            <nav aria-label="Footer navigation" className="flex flex-col space-y-3">
              <a href="#about" className="footer-link text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <span className="relative">
                  About
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-tech-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
              <a href="#projects" className="footer-link text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <span className="relative">
                  Projects
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-tech-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
              <a href="#skills" className="footer-link text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <span className="relative">
                  Skills
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-tech-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
              <a href="#experience" className="footer-link text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <span className="relative">
                  Experience
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-tech-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
              <a href="#contact" className="footer-link text-muted-foreground hover:text-primary transition-colors duration-300 group">
                <span className="relative">
                  Contact
                  <span className="absolute inset-x-0 -bottom-1 h-0.5 bg-gradient-to-r from-primary to-tech-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </span>
              </a>
            </nav>
          </div>

          {/* Social Media Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
              Connect With Me
            </h3>
            <p className="text-muted-foreground text-sm">
              Let's connect and discuss opportunities!
            </p>
            <div className="flex items-center gap-4">
              <Button 
                asChild 
                variant="ghost" 
                size="icon" 
                aria-label="LinkedIn"
                className="social-icon h-12 w-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
              >
                <a href="https://www.linkedin.com/in/anumandlasreenu/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="icon" 
                aria-label="GitHub"
                className="social-icon h-12 w-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
              >
                <a href="https://github.com/sreenuanum45" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </a>
              </Button>
              <Button 
                asChild 
                variant="ghost" 
                size="icon" 
                aria-label="Email"
                className="social-icon h-12 w-12 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
              >
                <ProtectedMailto user="anumandlasreenu" domain="gmail.com">
                  <Mail className="h-5 w-5 group-hover:text-primary transition-colors duration-300" />
                </ProtectedMailto>
              </Button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-6"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="text-center md:text-left">
              <h4 className="font-semibold text-lg bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
                Anumandla Sreenu
              </h4>
              <p className="text-sm text-muted-foreground">QA Automation Engineer</p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} All rights reserved.
            </p>
            <Button
              onClick={scrollToTop}
              variant="ghost"
              size="icon"
              aria-label="Scroll to top"
              className="h-10 w-10 rounded-full border border-border hover:border-primary hover:bg-primary/10 hover:scale-110 transition-all duration-300 group"
            >
              <ArrowUp className="h-4 w-4 group-hover:text-primary transition-colors duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
