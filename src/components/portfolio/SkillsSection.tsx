import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useStaggeredAnimation } from "@/hooks/useScrollAnimation";

const skillCategories = [
  {
    category: "Programming Languages",
    skills: [
      { name: "Core Java", level: 85 },
      { name: "JavaScript", level: 80 },
      { name: "SQL", level: 75 },
      { name: "HTML/CSS", level: 70 }
    ]
  },
  {
    category: "Automation Tools",
    skills: [
      { name: "Selenium WebDriver", level: 90 },
      { name: "REST Assured", level: 85 },
      { name: "Postman", level: 88 },
      { name: "Apache JMeter", level: 80 }
    ]
  },
  {
    category: "Frameworks & Tools",
    skills: [
      { name: "TestNG", level: 85 },
      { name: "Cucumber BDD", level: 80 },
      { name: "Maven", level: 75 },
      { name: "Jenkins", level: 70 }
    ]
  },
  {
    category: "Testing & Methodologies",
    skills: [
      { name: "Test Automation", level: 90 },
      { name: "API Testing", level: 85 },
      { name: "Performance Testing", level: 80 },
      { name: "Agile/Scrum", level: 85 }
    ]
  }
];

const technologies = [
  "Selenium", "TestNG", "Maven", "Jenkins", "JIRA", "REST Assured",
  "Postman", "JMeter", "Cucumber", "Git", "GitHub", "ExtentReports",
  "WireMock", "JSON", "XML", "Page Object Model"
];

const SkillsSection = () => {
  const { ref: skillsRef, animatedItems } = useStaggeredAnimation(150);

  return (
    <section className="relative py-20 bg-section-bg overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-transparent to-tech-secondary/20 animate-gradient-shift bg-[length:200%_auto]"></div>
      </div>
      
      <div className="container max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-tech-secondary to-tech-accent bg-clip-text text-transparent animate-gradient-shift bg-[length:200%_auto]">
            ⚡ Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Comprehensive expertise in <span className="text-primary font-medium">test automation</span>, 
            <span className="text-tech-secondary font-medium"> performance testing</span>, and 
            <span className="text-tech-accent font-medium"> modern development practices</span>
          </p>
        </div>

        {/* Enhanced Skills Grid */}
        <div ref={skillsRef} className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category} 
              className={`group p-6 hover:shadow-floating hover:scale-105 transition-all duration-500 bg-gradient-to-br from-card via-card to-background relative overflow-hidden border-0 shadow-lg ${
                animatedItems.has(index) ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Animated Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/20 via-tech-secondary/20 to-tech-accent/20 opacity-0 group-hover:opacity-30 blur-sm transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent group-hover:scale-105 transition-transform duration-300">
                  {category.category}
                </h3>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="font-medium group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-sm text-muted-foreground font-mono bg-primary/5 px-2 py-1 rounded group-hover/skill:bg-primary/10 transition-colors duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative">
                        <Progress 
                          value={skill.level} 
                          className="h-3 bg-muted/50 overflow-hidden rounded-full"
                        />
                        {/* Animated Glow Effect */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/30 to-tech-secondary/30 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 blur-sm"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Enhanced Technologies Cloud */}
        <Card className="group p-8 bg-gradient-to-r from-primary/5 via-tech-secondary/5 to-tech-accent/5 animate-slide-up shadow-lg hover:shadow-floating transition-all duration-500 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-tech-secondary/10 to-tech-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate bg-[length:400%_400%]"></div>
          
          <div className="relative z-10">
            <h3 className="text-xl font-semibold mb-6 text-center bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
              🛠️ Technologies & Tools
            </h3>
            
            <div className="flex flex-wrap gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech}
                  variant="secondary"
                  className="group/badge px-4 py-2 text-sm hover:bg-gradient-to-r hover:from-primary hover:to-tech-secondary hover:text-white hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default relative overflow-hidden"
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    animation: 'scale-in 0.4s ease-out forwards'
                  }}
                >
                  {/* Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/badge:opacity-100 group-hover/badge:animate-shimmer"></div>
                  <span className="relative z-10">{tech}</span>
                </Badge>
              ))}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;