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

        {/* Enhanced Skills Grid with Glassmorphism */}
        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category} 
              className={`group glass-card glass-hover glow-on-hover p-4 sm:p-6 transition-all duration-500 relative overflow-hidden border-0 shadow-lg ${
                animatedItems.has(index) ? 'animate-slide-up opacity-100' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {/* Enhanced Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glass-morph"></div>
              
              {/* Multi-layer Animated Border */}
              <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary/30 via-tech-secondary/30 to-tech-accent/30 opacity-0 group-hover:opacity-50 blur-sm transition-opacity duration-500"></div>
              <div className="absolute inset-0 rounded-lg bg-gradient-to-l from-tech-accent/20 via-primary/20 to-tech-secondary/20 opacity-0 group-hover:opacity-30 blur-lg transition-opacity duration-700"></div>
              
              <div className="relative z-10">
                <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 gradient-text group-hover:scale-105 transition-transform duration-300">
                  {category.category}
                </h3>
                
                <div className="space-y-3 sm:space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skill.name} className="space-y-2 group/skill">
                      <div className="flex justify-between items-center">
                        <span className="text-sm sm:text-base font-medium group-hover/skill:text-primary transition-colors duration-300">
                          {skill.name}
                        </span>
                        <span className="text-xs sm:text-sm text-muted-foreground font-mono bg-primary/5 px-2 py-1 rounded group-hover/skill:bg-primary/10 group-hover/skill:animate-skill-glow transition-all duration-300">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="relative skill-progress">
                        <Progress 
                          value={skill.level} 
                          className="h-3 sm:h-4 bg-muted/50 overflow-hidden rounded-full group-hover/skill:animate-skill-glow"
                        />
                        {/* Multi-layer Glow Effects */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/40 via-tech-secondary/40 to-tech-accent/30 rounded-full opacity-0 group-hover/skill:opacity-100 transition-opacity duration-500 blur-sm"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary/20 to-tech-secondary/20 rounded-full opacity-0 group-hover/skill:opacity-80 transition-opacity duration-700 blur-md"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                        {/* Interactive shimmer effect */}
                        <div 
                          className="absolute top-0 left-0 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-full opacity-0 group-hover/skill:opacity-100 group-hover/skill:animate-shimmer transition-opacity duration-300"
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

        {/* Enhanced Technologies Cloud with Glassmorphism */}
        <Card className="group glass-card glass-hover glow-on-hover p-6 sm:p-8 animate-slide-up shadow-lg transition-all duration-500 relative overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-tech-secondary/10 to-tech-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-rotate bg-[length:400%_400%]"></div>
          
          <div className="relative z-10">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 text-center gradient-text">
              🛠️ Technologies & Tools
            </h3>
            
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              {technologies.map((tech, index) => (
                <Badge 
                  key={tech}
                  variant="secondary"
                  className="group/badge glass-card px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm hover:bg-gradient-to-r hover:from-primary hover:to-tech-secondary hover:text-white hover:scale-110 hover:shadow-lg glow-on-hover transition-all duration-300 cursor-default relative overflow-hidden border border-primary/20"
                  style={{ 
                    animationDelay: `${index * 0.05}s`,
                    animation: 'scale-in 0.4s ease-out forwards'
                  }}
                >
                  {/* Enhanced Shimmer Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent opacity-0 group-hover/badge:opacity-100 group-hover/badge:animate-shimmer"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-tech-secondary/10 to-tech-accent/10 opacity-0 group-hover/badge:opacity-50 transition-opacity duration-300"></div>
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