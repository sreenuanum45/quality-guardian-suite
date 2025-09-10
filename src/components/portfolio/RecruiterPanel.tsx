import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Phone, Mail, Linkedin, Github, Calendar, X, Users } from "lucide-react";
import ProtectedMailto from "@/components/security/ProtectedMailto";

const RecruiterPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const quickStats = [
    { label: "Experience", value: "2.6+ Years", icon: Calendar },
    { label: "Test Cases", value: "500+", icon: Users },
    { label: "Projects", value: "10+", icon: Github },
  ];

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsExpanded(false);
  };

  return (
    <>
      {/* Mobile Quick Access Button */}
      <div className="fixed bottom-4 right-4 z-50 md:hidden">
        <Button
          onClick={() => setIsExpanded(!isExpanded)}
          className="rounded-full w-14 h-14 bg-gradient-to-r from-primary to-tech-secondary shadow-glow hover:shadow-xl transition-all duration-300"
        >
          {isExpanded ? <X className="h-6 w-6" /> : <Users className="h-6 w-6" />}
        </Button>
      </div>

      {/* Desktop Side Panel */}
      <div className="hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-40">
        <Card className="glass-card p-4 w-64 border border-primary/20">
          <div className="space-y-4">
            <div className="text-center">
              <Badge className="bg-gradient-to-r from-primary to-tech-secondary text-white mb-2">
                Available for Hire
              </Badge>
              <h3 className="font-semibold text-sm">Quick Access</h3>
            </div>

            <div className="grid grid-cols-3 gap-2 text-center">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="space-y-1">
                    <Icon className="h-4 w-4 mx-auto text-primary" />
                    <div className="text-xs font-bold text-primary">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                );
              })}
            </div>

            <div className="space-y-2">
              <Button 
                className="w-full bg-gradient-to-r from-primary to-tech-secondary hover:from-primary/90 hover:to-tech-secondary/90"
                onClick={() => window.open('/resume.pdf', '_blank')}
              >
                <Download className="h-4 w-4 mr-2" />
                Resume
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm" className="glass-card">
                  <Phone className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" className="glass-card">
                  <Mail className="h-4 w-4" />
                </Button>
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="glass-card"
                  onClick={() => window.open('https://linkedin.com/in/yourprofile', '_blank')}
                >
                  <Linkedin className="h-4 w-4" />
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="glass-card"
                  onClick={() => window.open('https://github.com/yourprofile', '_blank')}
                >
                  <Github className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="pt-2 border-t border-primary/20">
              <div className="text-xs text-center text-muted-foreground mb-2">Quick Navigation</div>
              <div className="space-y-1">
                {['experience', 'projects', 'skills', 'contact'].map((section) => (
                  <Button
                    key={section}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs capitalize"
                    onClick={() => scrollToSection(section)}
                  >
                    {section}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Mobile Expanded Panel */}
      {isExpanded && (
        <div className="fixed inset-0 bg-background/95 backdrop-blur-sm z-40 md:hidden">
          <div className="fixed bottom-0 left-0 right-0 p-4">
            <Card className="glass-card p-6 border border-primary/20">
              <div className="space-y-4">
                <div className="text-center">
                  <Badge className="bg-gradient-to-r from-primary to-tech-secondary text-white mb-2">
                    Available for Hire
                  </Badge>
                  <h3 className="font-semibold">Recruiter Quick Access</h3>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  {quickStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="space-y-1">
                        <Icon className="h-5 w-5 mx-auto text-primary" />
                        <div className="text-sm font-bold text-primary">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    className="bg-gradient-to-r from-primary to-tech-secondary"
                    onClick={() => window.open('/resume.pdf', '_blank')}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Resume
                  </Button>
                  <Button 
                    variant="outline"
                    onClick={() => scrollToSection('contact')}
                  >
                    <Mail className="h-4 w-4 mr-2" />
                    Contact
                  </Button>
                </div>

                <div className="grid grid-cols-4 gap-2">
                  {['experience', 'projects', 'skills', 'about'].map((section) => (
                    <Button
                      key={section}
                      variant="ghost"
                      size="sm"
                      className="text-xs capitalize"
                      onClick={() => scrollToSection(section)}
                    >
                      {section}
                    </Button>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
};

export default RecruiterPanel;