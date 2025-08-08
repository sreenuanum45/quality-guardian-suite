import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";

const education = [
  {
    degree: "B.Tech – Mechanical Engineering",
    institution: "Malla Reddy Engineering College (JNTUH)",
    location: "Hyderabad",
    period: "2018 – 2021",
    type: "Bachelor's Degree"
  },
  {
    degree: "Diploma – Mechanical Engineering",
    institution: "Government Polytechnic",
    location: "Warangal",
    period: "2015 – 2018",
    type: "Diploma"
  },
  {
    degree: "SSC",
    institution: "Sharadha High School",
    location: "Hyderabad",
    period: "2014 – 2015",
    type: "Secondary Education"
  }
];

const certifications = [
  {
    title: "Software Testing",
    provider: "Magnitia IT Solutions",
    year: "2023",
    category: "Testing"
  },
  {
    title: "Cucumber BDD – ZeroToHero",
    provider: "Udemy",
    year: "2024",
    category: "Automation"
  },
  {
    title: "REST API & Java",
    provider: "TestDome",
    year: "2025",
    category: "Development"
  },
  {
    title: "JMeter Basics",
    provider: "Infosys Springboard",
    year: "July 2025",
    category: "Performance"
  }
];

const EducationSection = () => {
  return (
    <section id="education" className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
            Education & Certifications
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development in software testing and automation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <GraduationCap className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-bold text-primary">Education</h3>
            </div>
            
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card 
                  key={index}
                  className="p-6 hover:shadow-lg transition-all duration-300 animate-scale-in bg-gradient-to-br from-card to-section-bg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <Badge className="bg-primary text-primary-foreground">
                        {edu.type}
                      </Badge>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    
                    <h4 className="text-lg font-semibold text-foreground">
                      {edu.degree}
                    </h4>
                    
                    <div className="text-muted-foreground">
                      <div className="font-medium">{edu.institution}</div>
                      <div className="text-sm">{edu.location}</div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6">
            <div className="flex items-center gap-2 mb-8">
              <Award className="h-6 w-6 text-tech-secondary" />
              <h3 className="text-2xl font-bold text-tech-secondary">Certifications</h3>
            </div>
            
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <Card 
                  key={index}
                  className="p-4 hover:shadow-lg transition-all duration-300 animate-scale-in group bg-gradient-to-br from-card to-background"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="flex items-center justify-between">
                    <div className="space-y-2 flex-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <Badge 
                          variant="secondary" 
                          className="text-xs group-hover:bg-tech-secondary group-hover:text-white transition-colors duration-300"
                        >
                          {cert.category}
                        </Badge>
                        <span className="text-sm text-muted-foreground">{cert.year}</span>
                      </div>
                      
                      <h4 className="font-semibold text-foreground group-hover:text-tech-secondary transition-colors duration-300">
                        {cert.title}
                      </h4>
                      
                      <p className="text-sm text-muted-foreground">
                        {cert.provider}
                      </p>
                    </div>
                    
                    <Award className="h-8 w-8 text-tech-accent opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;