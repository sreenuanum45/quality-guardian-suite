import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, TrendingUp } from "lucide-react";

const projects = [
  {
    title: "2the Point – Adaptive Learning Platform",
    period: "Jan 2024 – July 2025",
    description: "Comprehensive test automation framework for an adaptive learning platform with cross-browser compatibility and CI/CD integration.",
    technologies: ["Selenium WebDriver", "TestNG", "Maven", "Jenkins", "ExtentReports", "Page Object Model"],
    achievements: [
      "Built hybrid framework with POM + TestNG + Maven",
      "Automated UI tests across Chrome, Firefox, and Edge",
      "Integrated tests with Jenkins + GitHub",
      "Enhanced reporting with ExtentReports and visual logs",
      "Collaborated on 30+ acceptance test cases with product teams"
    ],
    category: "Web Automation",
    impact: "80% reduction in manual testing effort"
  },
  {
    title: "IoT Marketplace – E-commerce for IoT Devices",
    period: "June 2023 – Jan 2024",
    description: "End-to-end automation testing for an IoT device marketplace including API testing, performance testing, and service mocking.",
    technologies: ["REST Assured", "Postman", "JMeter", "WireMock", "Cucumber BDD"],
    achievements: [
      "Automated REST API tests using Postman and REST Assured",
      "Used JMeter for performance testing with 10K+ virtual users",
      "Created combined UI + API test flows using test data-driven approach",
      "Mocked third-party services using WireMock"
    ],
    category: "API & Performance",
    impact: "40% performance improvement"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
            Key Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Delivering comprehensive automation solutions for complex business requirements
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-card glass-hover glow-on-hover p-4 sm:p-6 transition-all duration-500 animate-scale-in group overflow-hidden relative border border-primary/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Enhanced Glassmorphism Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-tech-secondary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-glass-morph"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-tech-accent/5 to-primary/5 opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
              
              <div className="relative z-10 space-y-4 sm:space-y-6">
                {/* Header */}
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex flex-wrap items-center gap-2">
                    <Badge className="glass-card bg-tech-primary/80 text-white text-xs sm:text-sm px-2 sm:px-3 py-1">
                      {project.category}
                    </Badge>
                    <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                      <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                      {project.period}
                    </div>
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold gradient-text group-hover:scale-105 transition-transform duration-300">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Impact Metric */}
                <div className="flex items-center gap-2 p-3 bg-gradient-to-r from-tech-secondary/10 to-tech-accent/10 rounded-lg">
                  <TrendingUp className="h-4 w-4 text-tech-secondary" />
                  <span className="text-sm font-medium text-tech-secondary">
                    {project.impact}
                  </span>
                </div>

                {/* Technologies */}
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-primary">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary" 
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Achievements */}
                <div className="space-y-3">
                  <h4 className="text-sm font-semibold text-primary">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {project.achievements.map((achievement, achIndex) => (
                      <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                        <div className="w-1 h-1 bg-tech-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Button */}
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  View Project Details
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;