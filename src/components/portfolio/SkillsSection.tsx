import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

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
  return (
    <section className="py-20 bg-section-bg">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive expertise in test automation, performance testing, and modern development practices
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <Card 
              key={category.category} 
              className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-to-br from-card to-background"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-primary">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                    />
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Technologies Cloud */}
        <Card className="p-8 animate-slide-up bg-gradient-to-r from-primary/5 to-tech-secondary/5">
          <h3 className="text-xl font-semibold mb-6 text-center">
            Technologies & Tools
          </h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {technologies.map((tech, index) => (
              <Badge 
                key={tech}
                variant="secondary"
                className="px-4 py-2 text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default"
                style={{ 
                  animationDelay: `${index * 0.05}s`,
                  animation: 'scale-in 0.4s ease-out forwards'
                }}
              >
                {tech}
              </Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default SkillsSection;