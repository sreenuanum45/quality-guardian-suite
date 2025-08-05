import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Briefcase } from "lucide-react";

const experiences = [
  {
    title: "QA Automation Engineer",
    company: "Getinfy Solutions Pvt Ltd",
    location: "Hyderabad, India",
    period: "June 2023 – July 2025",
    type: "Full-time",
    achievements: [
      "Developed a robust hybrid automation framework (POM + TestNG + Maven)",
      "Automated 80+ cross-browser UI test cases for Chrome, Firefox, and Edge",
      "Integrated test suite into Jenkins CI/CD pipeline using GitHub",
      "Used ExtentReports for detailed reporting with screenshots",
      "Designed and executed 30+ acceptance scenarios in collaboration with product and dev teams",
      "Automated REST API tests using Postman and REST Assured (BDD approach)",
      "Simulated 10K+ users using JMeter, achieving 40% response time improvement",
      "Created integrated test flows combining UI and API validations",
      "Used WireMock to mock external dependencies for test isolation"
    ]
  },
  {
    title: "QA Intern",
    company: "Getinfy Solutions Pvt Ltd",
    location: "Hyderabad, India",
    period: "Jan 2023 – June 2023",
    type: "Internship",
    achievements: [
      "Created NLP-driven codeless automation POCs",
      "Increased test design efficiency by 65% with keyword-driven approaches",
      "Participated in Agile ceremonies: daily stand-ups, sprint planning, and reviews"
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Building robust automation frameworks and delivering quality software solutions
          </p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:-ml-0.5 w-0.5 h-full bg-gradient-to-b from-primary to-tech-secondary"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index} 
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:justify-start' : 'md:justify-end'
                } animate-slide-up`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-2 md:left-1/2 md:-ml-3 w-6 h-6 bg-gradient-to-r from-primary to-tech-secondary rounded-full border-4 border-background shadow-lg flex items-center justify-center">
                  <Briefcase className="h-3 w-3 text-white" />
                </div>

                {/* Experience Card with Glassmorphism */}
                <Card className={`glass-card glass-hover glow-on-hover p-4 sm:p-6 w-full md:w-5/12 ml-8 sm:ml-12 md:ml-0 transition-all duration-300 border border-primary/20 ${
                  index % 2 === 0 ? 'md:mr-auto md:ml-8' : 'md:ml-auto md:mr-8'
                }`}>
                  <div className="space-y-3 sm:space-y-4">
                    <div>
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <Badge className="glass-card bg-primary/80 text-primary-foreground text-xs sm:text-sm px-2 sm:px-3 py-1">
                          {exp.type}
                        </Badge>
                        <div className="flex items-center text-xs sm:text-sm text-muted-foreground">
                          <Calendar className="h-3 w-3 sm:h-4 sm:w-4 mr-1" />
                          {exp.period}
                        </div>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold gradient-text mb-1">
                        {exp.title}
                      </h3>
                      <div className="flex items-center text-muted-foreground mb-2">
                        <span className="font-medium">{exp.company}</span>
                        <span className="mx-2">•</span>
                        <MapPin className="h-4 w-4 mr-1" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="font-semibold text-sm text-primary mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="text-sm text-muted-foreground flex items-start">
                            <div className="w-1 h-1 bg-tech-secondary rounded-full mt-2 mr-3 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;