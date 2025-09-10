import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Phone, Mail, Linkedin, Github, Calendar, X, Users, Clock, MessageSquare, ExternalLink, Star, Award, Target, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import ProtectedMailto from "@/components/security/ProtectedMailto";

const RecruiterPanel = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);

  const quickStats = [
    { label: "Experience", value: "2.6+ Years", icon: Calendar, detail: "QA Automation Engineer" },
    { label: "Test Cases", value: "500+", icon: Target, detail: "Automated & Executed" },
    { label: "Projects", value: "10+", icon: Github, detail: "Successfully Delivered" },
    { label: "Response", value: "< 24hrs", icon: Clock, detail: "Average Response Time" },
  ];

  const contactMethods = [
    { label: "Resume", icon: Download, action: () => window.open('/resume.pdf', '_blank'), variant: "default" as const, priority: true },
    { label: "Email", icon: Mail, action: () => window.open('mailto:your.email@example.com'), variant: "outline" as const },
    { label: "WhatsApp", icon: MessageSquare, action: () => window.open('https://wa.me/1234567890', '_blank'), variant: "outline" as const },
    { label: "LinkedIn", icon: Linkedin, action: () => window.open('https://linkedin.com/in/yourprofile', '_blank'), variant: "outline" as const },
    { label: "GitHub", icon: Github, action: () => window.open('https://github.com/yourprofile', '_blank'), variant: "outline" as const },
    { label: "Schedule", icon: Calendar, action: () => window.open('https://calendly.com/yourprofile', '_blank'), variant: "secondary" as const },
  ];

  const achievements = [
    { label: "Certifications", value: "5+", icon: Award },
    { label: "Rating", value: "4.9/5", icon: Star },
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
          className="rounded-full w-16 h-16 bg-gradient-to-r from-primary via-tech-secondary to-accent shadow-glow hover:shadow-xl transition-all duration-500 animate-pulse-glow"
        >
          {isExpanded ? <X className="h-7 w-7" /> : <Users className="h-7 w-7" />}
        </Button>
        
        {/* Availability Status Indicator */}
        <div className="absolute -top-2 -left-2 w-6 h-6 bg-tech-secondary rounded-full border-2 border-background animate-pulse flex items-center justify-center">
          <div className="w-3 h-3 bg-background rounded-full animate-ping"></div>
        </div>
      </div>

      {/* Desktop Side Panel */}
      <div className={`hidden md:block fixed right-4 top-1/2 -translate-y-1/2 z-40 transition-all duration-500 ${
        isDesktopCollapsed ? 'translate-x-64' : 'translate-x-0'
      }`}>
        <Card className="recruiter-panel p-6 border border-primary/30 shadow-floating">
          {/* Collapse Toggle */}
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsDesktopCollapsed(!isDesktopCollapsed)}
            className="absolute -left-10 top-4 rounded-l-lg rounded-r-none bg-primary text-primary-foreground hover:bg-primary/90 px-2"
          >
            {isDesktopCollapsed ? <ChevronLeft className="h-4 w-4" /> : <ChevronRight className="h-4 w-4" />}
          </Button>

          <div className={`space-y-6 transition-all duration-300 ${isDesktopCollapsed ? 'w-0 overflow-hidden' : 'w-64'}`}>
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center space-x-2">
                <Badge className="bg-gradient-to-r from-tech-secondary to-accent text-white animate-glow">
                  <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                  Available for Hire
                </Badge>
              </div>
              <h3 className="font-bold text-lg gradient-text">Recruiter Access</h3>
              <p className="text-xs text-muted-foreground flex items-center justify-center">
                <MapPin className="h-3 w-3 mr-1" />
                Available Globally (Remote)
              </p>
            </div>

            {/* Enhanced Stats Grid */}
            <div className="grid grid-cols-2 gap-3">
              {quickStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="glass-card p-3 rounded-lg hover:bg-primary/5 transition-all duration-300 stat-hover group">
                    <Icon className="h-5 w-5 mx-auto text-primary mb-2 group-hover:scale-110 transition-transform" />
                    <div className="text-sm font-bold text-primary text-center">{stat.value}</div>
                    <div className="text-xs text-muted-foreground text-center">{stat.label}</div>
                    <div className="text-xs text-tech-secondary text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      {stat.detail}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Achievements Row */}
            <div className="grid grid-cols-2 gap-2">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <div key={index} className="text-center p-2 rounded-lg bg-gradient-to-r from-primary/10 to-tech-secondary/10">
                    <Icon className="h-4 w-4 mx-auto text-tech-accent mb-1" />
                    <div className="text-xs font-bold text-primary">{achievement.value}</div>
                    <div className="text-xs text-muted-foreground">{achievement.label}</div>
                  </div>
                );
              })}
            </div>

            {/* Enhanced Action Buttons */}
            <div className="space-y-3">
              <div className="grid gap-2">
                {contactMethods.slice(0, 2).map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Button 
                      key={index}
                      variant={method.variant}
                      className={`w-full recruiter-btn ${method.priority ? 'bg-gradient-to-r from-primary to-tech-secondary hover:from-primary/90 hover:to-tech-secondary/90 text-white' : 'glass-card hover:bg-primary/5'}`}
                      onClick={method.action}
                    >
                      <Icon className="h-4 w-4 mr-2" />
                      {method.label}
                      {method.label === "Resume" && <ExternalLink className="h-3 w-3 ml-1" />}
                    </Button>
                  );
                })}
              </div>
              
              <div className="grid grid-cols-2 gap-2">
                {contactMethods.slice(2, 6).map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Button 
                      key={index}
                      variant={method.variant}
                      size="sm" 
                      className="glass-card hover:bg-primary/5 recruiter-btn"
                      onClick={method.action}
                    >
                      <Icon className="h-4 w-4" />
                    </Button>
                  );
                })}
              </div>
            </div>

            {/* Quick Navigation */}
            <div className="pt-4 border-t border-primary/20 space-y-3">
              <div className="text-xs text-center text-muted-foreground font-medium">Quick Navigation</div>
              <div className="space-y-1">
                {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                  <Button
                    key={section}
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start text-xs capitalize hover:bg-primary/10 hover:text-primary transition-colors"
                    onClick={() => scrollToSection(section)}
                  >
                    <div className="w-2 h-2 rounded-full bg-primary mr-3"></div>
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
        <div className="fixed inset-0 bg-background/95 backdrop-blur-lg z-40 md:hidden animate-fade-in">
          <div className="fixed bottom-0 left-0 right-0 p-4">
            <Card className="recruiter-panel p-6 border border-primary/30 shadow-floating rounded-t-2xl">
              <div className="space-y-6">
                {/* Mobile Header */}
                <div className="text-center space-y-3">
                  <div className="flex items-center justify-center space-x-2">
                    <Badge className="bg-gradient-to-r from-tech-secondary to-accent text-white animate-glow">
                      <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                      Available for Hire
                    </Badge>
                  </div>
                  <h3 className="font-bold text-xl gradient-text">Recruiter Dashboard</h3>
                  <p className="text-sm text-muted-foreground flex items-center justify-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Response within 24hrs • Remote Ready
                  </p>
                </div>

                {/* Mobile Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {quickStats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                      <div key={index} className="glass-card p-4 rounded-xl hover:bg-primary/5 transition-all duration-300 stat-hover group">
                        <Icon className="h-6 w-6 mx-auto text-primary mb-3 group-hover:scale-110 transition-transform" />
                        <div className="text-lg font-bold text-primary text-center">{stat.value}</div>
                        <div className="text-sm text-muted-foreground text-center">{stat.label}</div>
                        <div className="text-xs text-tech-secondary text-center mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                          {stat.detail}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Achievements */}
                <div className="flex justify-center space-x-6">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="text-center p-3 rounded-xl bg-gradient-to-r from-primary/10 to-tech-secondary/10">
                        <Icon className="h-5 w-5 mx-auto text-tech-accent mb-2" />
                        <div className="text-sm font-bold text-primary">{achievement.value}</div>
                        <div className="text-xs text-muted-foreground">{achievement.label}</div>
                      </div>
                    );
                  })}
                </div>

                {/* Mobile Action Buttons */}
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-3">
                    {contactMethods.slice(0, 2).map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <Button 
                          key={index}
                          variant={method.variant}
                          className={`recruiter-btn ${method.priority ? 'bg-gradient-to-r from-primary to-tech-secondary hover:from-primary/90 hover:to-tech-secondary/90 text-white' : 'glass-card hover:bg-primary/5'}`}
                          onClick={method.action}
                        >
                          <Icon className="h-4 w-4 mr-2" />
                          {method.label}
                          {method.label === "Resume" && <ExternalLink className="h-3 w-3 ml-1" />}
                        </Button>
                      );
                    })}
                  </div>
                  
                  <div className="grid grid-cols-4 gap-2">
                    {contactMethods.slice(2).map((method, index) => {
                      const Icon = method.icon;
                      return (
                        <Button 
                          key={index}
                          variant="outline"
                          size="sm"
                          className="glass-card hover:bg-primary/5 recruiter-btn aspect-square"
                          onClick={method.action}
                        >
                          <Icon className="h-4 w-4" />
                        </Button>
                      );
                    })}
                  </div>
                </div>

                {/* Mobile Navigation */}
                <div className="grid grid-cols-5 gap-2 pt-4 border-t border-primary/20">
                  {['about', 'experience', 'projects', 'skills', 'contact'].map((section) => (
                    <Button
                      key={section}
                      variant="ghost"
                      size="sm"
                      className="text-xs capitalize hover:bg-primary/10 hover:text-primary transition-colors flex-col py-3"
                      onClick={() => scrollToSection(section)}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary mb-1"></div>
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