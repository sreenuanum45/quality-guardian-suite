import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import ProtectedMailto from "@/components/security/ProtectedMailto";
import { Button } from "@/components/ui/button";

const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 py-8 md:py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
          <div className="text-center md:text-left">
            <h2 className="text-lg font-semibold">Anumandla Sreenu</h2>
            <p className="text-sm text-muted-foreground">QA Automation Engineer</p>
            <p className="mt-2 text-xs text-muted-foreground">© {new Date().getFullYear()} All rights reserved.</p>
          </div>

          <nav aria-label="Footer navigation" className="flex items-center gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground story-link">About</a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-foreground story-link">Projects</a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-foreground story-link">Contact</a>
          </nav>

          <div className="flex items-center gap-3">
            <Button asChild variant="ghost" size="icon" aria-label="LinkedIn">
              <a href="https://www.linkedin.com/in/anumandlasreenu/" target="_blank" rel="noopener noreferrer">
                <Linkedin />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="GitHub">
              <a href="https://github.com/sreenuanum45" target="_blank" rel="noopener noreferrer">
                <Github />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" aria-label="Email">
              <ProtectedMailto user="anumandlasreenu" domain="gmail.com">
                <Mail />
              </ProtectedMailto>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
