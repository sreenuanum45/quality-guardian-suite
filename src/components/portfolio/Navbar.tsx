import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Home,
  User,
  Code2,
  Briefcase,
  Layers,
  GraduationCap,
  Award,
  MessageSquare,
  Phone,
  FileText,
  Menu,
  X,
} from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navItems = [
  { label: "Home", id: "home", Icon: Home },
  { label: "About", id: "about", Icon: User },
  { label: "Skills", id: "skills", Icon: Code2 },
  { label: "Experience", id: "experience", Icon: Briefcase },
  { label: "Projects", id: "projects", Icon: Layers },
  { label: "Education", id: "education", Icon: GraduationCap },
  { label: "Achievements", id: "achievements", Icon: Award },
  { label: "Testimonials", id: "testimonials", Icon: MessageSquare },
  { label: "Contact", id: "contact", Icon: Phone },
] as const;

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <a href="#main-content" className="sr-only focus:not-sr-only fixed top-2 left-2 z-[60] bg-primary text-primary-foreground px-3 py-2 rounded-md shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2">
        Skip to main content
      </a>
      <nav 
        aria-label="Primary" 
        className={`border-b border-border transition-all duration-300 ${
          scrolled 
            ? 'bg-background/95 backdrop-blur-xl shadow-lg' 
            : 'bg-background/70 backdrop-blur'
        } supports-[backdrop-filter]:bg-background/60`}
      >
        <div className="container mx-auto max-w-7xl px-4 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-bold text-lg md:text-xl bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent rounded focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-300 hover:scale-105"
            aria-label="Go to Home"
          >
            AS • Portfolio
          </button>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-2">
            {navItems.map(({ label, id, Icon }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="nav-link px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-all duration-300 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 relative group"
                  role="link"
                  aria-label={`Go to ${label}`}
                >
                  <span className="inline-flex items-center gap-2 relative z-10">
                    <Icon className="h-4 w-4" /> {label}
                  </span>
                  <span className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-primary to-tech-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Button asChild size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <a href="https://drive.google.com/file/d/1gW6pjX7oxx0pMBqsyFa3-4yaSzyY6JKq/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="Open resume">
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Resume
                </span>
              </a>
            </Button>
            <ThemeToggle />
          </div>

          {/* Mobile */}
          <div className="md:hidden flex items-center gap-2">
            <ThemeToggle />
            <Button variant="ghost" size="icon" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((v) => !v)} className="transition-all duration-300 hover:bg-primary/10">
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div id="mobile-menu" className="border-t border-border bg-background/90 backdrop-blur-lg">
            <ul className="px-4 py-4 grid grid-cols-2 gap-2">
              {navItems.map(({ label, id, Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="w-full text-left px-3 py-3 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-gradient-to-r hover:from-primary/10 hover:to-tech-secondary/10 transition-all duration-300"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-4 w-4" /> {label}
                    </span>
                  </button>
                </li>
              ))}
              <li className="col-span-2 mt-2">
                <Button asChild variant="secondary" className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                  <a href="https://drive.google.com/file/d/1gW6pjX7oxx0pMBqsyFa3-4yaSzyY6JKq/view?usp=drive_link" target="_blank" rel="noopener noreferrer">
                    <span className="inline-flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Resume
                    </span>
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
