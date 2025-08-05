import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-tech-secondary/5">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to contribute to your team's success with robust automation solutions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {/* Contact Info */}
          <Card className="glass-card glass-hover glow-on-hover p-6 sm:p-8 transition-all duration-500 animate-scale-in border border-primary/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 gradient-text">Get In Touch</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Phone</div>
                  <div className="text-sm text-muted-foreground">+91-7416472820</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <div className="text-sm text-muted-foreground">anumandlasreenu@gmail.com</div>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Location</div>
                  <div className="text-sm text-muted-foreground">Hyderabad, India</div>
                </div>
              </div>
            </div>
          </Card>

          {/* Quick Actions */}
          <Card className="glass-card glass-hover glow-on-hover p-6 sm:p-8 transition-all duration-500 animate-scale-in border border-tech-secondary/20">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 sm:mb-6 bg-gradient-to-r from-tech-secondary to-tech-accent bg-clip-text text-transparent">Quick Actions</h3>
            
            <div className="space-y-4">
              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-tech-secondary hover:shadow-lg transition-all duration-300"
              >
                <Download className="h-5 w-5 mr-2" />
                Download Resume
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Linkedin className="h-5 w-5 mr-2" />
                View LinkedIn Profile
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="w-full hover:bg-tech-secondary hover:text-white transition-all duration-300"
              >
                <Github className="h-5 w-5 mr-2" />
                Check GitHub Portfolio
              </Button>
            </div>
            
            <div className="mt-8 p-4 bg-gradient-to-r from-tech-secondary/10 to-tech-accent/10 rounded-lg">
              <div className="text-center">
                <div className="text-sm text-muted-foreground mb-2">Available for</div>
                <div className="font-semibold text-tech-secondary">
                  Full-time opportunities • Remote • Hybrid
                </div>
              </div>
            </div>
          </Card>
        </div>

        {/* Professional Summary */}
        <Card className="glass-card glass-hover p-6 sm:p-8 animate-slide-up border border-primary/20 glow-on-hover">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-semibold mb-4 gradient-text">Professional Summary</h3>
            <p className="text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Detail-oriented QA Automation Engineer with 2.6+ years of experience in manual and automated testing 
              of web and API applications. Proficient in designing robust hybrid automation frameworks and integrating 
              them into CI/CD pipelines. Skilled in REST API automation, performance testing using JMeter, and agile 
              methodologies. Committed to delivering high-quality software through rigorous testing and cross-team collaboration.
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default ContactSection;