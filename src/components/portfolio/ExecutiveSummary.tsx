import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CheckCircle, TrendingUp, Users, Zap } from "lucide-react";

const ExecutiveSummary = () => {
  const coreCompetencies = [
    { name: "Test Automation", section: "skills" },
    { name: "CI/CD Integration", section: "experience" },
    { name: "API Testing", section: "projects" },
    { name: "Performance Testing", section: "skills" },
    { name: "Agile/Scrum", section: "experience" },
    { name: "Cross-browser Testing", section: "projects" }
  ];

  const highlights = [
    { 
      icon: TrendingUp, 
      title: "40% Performance Improvement", 
      description: "Achieved through JMeter load testing optimization"
    },
    { 
      icon: Users, 
      title: "500+ Test Cases Automated", 
      description: "Comprehensive UI and API test coverage"
    },
    { 
      icon: Zap, 
      title: "65% Efficiency Increase", 
      description: "Through NLP-driven codeless automation"
    },
    { 
      icon: CheckCircle, 
      title: "Zero Production Bugs", 
      description: "In last 6 months through rigorous testing"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="py-12 bg-gradient-to-br from-primary/5 via-background to-tech-secondary/5">
      <div className="container max-w-6xl mx-auto px-4">
        <Card className="glass-card p-6 md:p-8 border border-primary/20 glow-on-hover">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Badge className="bg-gradient-to-r from-primary to-tech-secondary text-white">
                Available for Hire
              </Badge>
              <Badge variant="outline" className="glass-card">
                2.6+ Years Experience
              </Badge>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold gradient-text mb-4">
              QA Automation Engineer & Test Architecture Specialist
            </h2>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Passionate QA Engineer specializing in building robust automation frameworks, 
              CI/CD integration, and performance optimization. Proven track record of delivering 
              high-quality software solutions while reducing testing time by 65% and improving 
              system performance by 40%.
            </p>
          </div>

          {/* Core Competencies */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-4 text-center">Core Competencies</h3>
            <div className="flex flex-wrap justify-center gap-2 mb-6">
              {coreCompetencies.map((skill, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="sm"
                  className="glass-card hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
                  onClick={() => scrollToSection(skill.section)}
                >
                  {skill.name}
                </Button>
              ))}
            </div>
          </div>

          {/* Key Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div 
                  key={index} 
                  className="text-center p-4 rounded-lg glass-card hover:glass-hover transition-all duration-300"
                >
                  <Icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <div className="font-bold text-sm text-primary mb-1">
                    {highlight.title}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {highlight.description}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Employment Status */}
          <div className="text-center p-4 bg-gradient-to-r from-primary/10 to-tech-secondary/10 rounded-lg border border-primary/20">
            <div className="flex items-center justify-center gap-2 mb-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="font-semibold text-primary">Currently Available</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Open to full-time opportunities • Remote or Hybrid • 
              <span className="text-primary font-medium"> Immediate Start Available</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ExecutiveSummary;