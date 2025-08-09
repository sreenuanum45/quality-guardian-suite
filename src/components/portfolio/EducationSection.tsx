import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Calendar, Award } from "lucide-react";
import lambdatestCert from "@/assets/certifications/lambdatest-at101.png";

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

            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-tech-accent" />
                <h4 className="text-lg font-semibold text-foreground">Verified Certificates</h4>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="p-4 bg-gradient-to-br from-card to-background hover:shadow-md transition-all">
                  <a
                    href="https://www.testdome.com/certificates/e4af0c2469c24bc1964b453d557a990a"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4"
                    aria-label="View TestDome REST API certificate for Anumandla Sreenu"
                  >
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">TestDome</div>
                      <div className="font-semibold text-foreground">REST API Certificate</div>
                      <div className="text-xs text-muted-foreground">Anumandla Sreenu • Verified</div>
                    </div>
                    <div className="text-right">
                      <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs text-foreground">
                        View
                      </span>
                    </div>
                  </a>
                </Card>

                <Card className="p-4 bg-gradient-to-br from-card to-background hover:shadow-md transition-all">
                  <a
                    href="https://www.lambdatest.com/certifications/lambdatest-certified/AT101-B7AZT8.png"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                    aria-label="View LambdaTest Accessibility Testing 101 Certificate"
                  >
                    <img
                      src={lambdatestCert}
                      alt="LambdaTest Accessibility Testing 101 certificate (84.25% score)"
                      loading="lazy"
                      className="w-full h-40 object-contain rounded-md border bg-muted"
                    />
                    <div className="mt-2">
                      <div className="font-semibold text-foreground">Accessibility Testing 101</div>
                      <p className="text-xs text-muted-foreground">Score: 84.25% • Valid 2 years</p>
                    </div>
                  </a>
                </Card>

                <Card className="p-4 sm:col-span-2 bg-gradient-to-br from-card to-background hover:shadow-md transition-all">
                  <a
                    href="https://www.udemy.com/certificate/UC-608fe8b3-6a72-4a08-af6a-d98a44dda0b5/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
                    aria-label="View Udemy ZeroToHero Cucumber BDD certificate"
                  >
                    <div className="flex-1">
                      <div className="text-sm text-muted-foreground">Udemy</div>
                      <div className="font-semibold text-foreground">
                        ZeroToHero Cucumber BDD – Basics, Advanced & Framework Design
                      </div>
                    </div>
                    <span className="inline-flex items-center rounded-md bg-secondary px-2 py-1 text-xs text-foreground">
                      View
                    </span>
                  </a>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;