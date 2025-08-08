import { useState } from "react";
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
} from "lucide-react";

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

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      setOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-50">
      <nav className="border-b border-border bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto max-w-7xl px-4 h-14 flex items-center justify-between">
          <button
            onClick={() => scrollTo("home")}
            className="font-bold text-sm md:text-base bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent"
            aria-label="Go to Home"
          >
            AS • Portfolio
          </button>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-1">
            {navItems.map(({ label, id, Icon }) => (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors story-link"
                >
                  <span className="inline-flex items-center gap-2">
                    <Icon className="h-4 w-4" /> {label}
                  </span>
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <Button asChild size="sm" variant="outline" className="hover:bg-primary hover:text-primary-foreground">
              <a href="/resume.pdf" target="_blank" rel="noopener" aria-label="Open resume">
                <span className="inline-flex items-center gap-2">
                  <FileText className="h-4 w-4" /> Resume
                </span>
              </a>
            </Button>
          </div>

          {/* Mobile */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" aria-label="Toggle menu" onClick={() => setOpen((v) => !v)}>
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden border-t border-border">
            <ul className="px-2 py-2 grid grid-cols-2 gap-1">
              {navItems.map(({ label, id, Icon }) => (
                <li key={id}>
                  <button
                    onClick={() => scrollTo(id)}
                    className="w-full text-left px-3 py-2 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-primary/5 transition-colors"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon className="h-4 w-4" /> {label}
                    </span>
                  </button>
                </li>
              ))}
              <li className="col-span-2">
                <Button asChild variant="secondary" className="w-full">
                  <a href="/resume.pdf" target="_blank" rel="noopener">
                    <span className="inline-flex items-center gap-2">
                      <FileText className="h-4 w-4" /> Resume
                    </span>
                  </a>
                </Button>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
