import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, Target, Award, Zap } from "lucide-react";

const achievements = [
  {
    title: "Test Automation Excellence",
    description: "Automated 500+ test cases, reducing manual effort by 80%",
    icon: TrendingUp,
    metric: "500+",
    unit: "Test Cases",
    color: "text-tech-primary",
    bgColor: "bg-tech-primary/10"
  },
  {
    title: "Zero-Defect Releases",
    description: "Delivered 3+ releases with full automation coverage",
    icon: Target,
    metric: "3+",
    unit: "Perfect Releases",
    color: "text-tech-secondary",
    bgColor: "bg-tech-secondary/10"
  },
  {
    title: "Performance Optimization",
    description: "Improved API performance by 40% using JMeter optimization",
    icon: Zap,
    metric: "40%",
    unit: "Performance Boost",
    color: "text-tech-accent",
    bgColor: "bg-tech-accent/10"
  },
  {
    title: "Cross-Browser Quality",
    description: "Detected and fixed 20+ UI issues before UAT",
    icon: Award,
    metric: "20+",
    unit: "Issues Prevented",
    color: "text-primary",
    bgColor: "bg-primary/10"
  }
];

const highlights = [
  {
    category: "Automation Impact",
    items: [
      "Reduced manual testing effort by 80% across all projects",
      "Achieved 100% automation coverage for critical user flows",
      "Implemented data-driven testing for scalable test scenarios"
    ]
  },
  {
    category: "Quality Assurance",
    items: [
      "Maintained zero production defects for 3 consecutive releases",
      "Established comprehensive regression test suites",
      "Created robust error handling and recovery mechanisms"
    ]
  },
  {
    category: "Performance Excellence",
    items: [
      "Optimized application response times by 40% through targeted testing",
      "Successfully load tested applications with 10K+ concurrent users",
      "Identified and resolved critical performance bottlenecks"
    ]
  },
  {
    category: "Team Collaboration",
    items: [
      "Collaborated effectively with cross-functional teams in Agile environment",
      "Mentored junior team members on automation best practices",
      "Contributed to framework design and architecture decisions"
    ]
  }
];

const AchievementsSection = () => {
  return (
    <section id="achievements" className="py-20 bg-section-bg">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
            Key Achievements
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Measurable impact through innovative automation solutions and quality engineering
          </p>
        </div>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => {
            const Icon = achievement.icon;
            return (
              <Card 
                key={achievement.title}
                className="p-6 text-center hover:shadow-xl transition-all duration-500 animate-scale-in group bg-gradient-to-br from-card to-background relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Background Gradient Effect */}
                <div className={`absolute inset-0 ${achievement.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 space-y-4">
                  <div className={`w-16 h-16 mx-auto ${achievement.bgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className={`h-8 w-8 ${achievement.color}`} />
                  </div>
                  
                  <div>
                    <div className={`text-3xl font-bold ${achievement.color} group-hover:scale-110 transition-transform duration-300`}>
                      {achievement.metric}
                    </div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {achievement.unit}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-2 group-hover:text-primary transition-colors duration-300">
                      {achievement.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>

        {/* Detailed Highlights */}
        <div className="grid md:grid-cols-2 gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={highlight.category}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-slide-up bg-gradient-to-br from-card to-background"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Badge className="bg-gradient-to-r from-primary to-tech-secondary text-white">
                    {highlight.category}
                  </Badge>
                </div>
                
                <ul className="space-y-3">
                  {highlight.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-sm text-muted-foreground flex items-start">
                      <div className="w-1.5 h-1.5 bg-tech-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;