import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Linkedin, Github, Download } from "lucide-react";
import ProtectedMailto from "@/components/security/ProtectedMailto";

const FORMSPREE_ID = ""; // Set your Formspree form ID to enable the contact form securely.

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-primary/5 via-background to-tech-secondary/5">
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
                  <a href="tel:+917416472820" className="text-sm text-muted-foreground underline-offset-4 hover:underline" aria-label="Call +91-7416472820">+91-7416472820</a>
                </div>
              </div>
              
              <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-primary/5 transition-colors duration-300">
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <div className="font-medium">Email</div>
                  <ProtectedMailto
                    user="anumandlasreenu"
                    domain="gmail.com"
                    className="text-sm text-muted-foreground underline-offset-4 hover:underline"
                    aria-label="Send email"
                  />
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
                asChild
                size="lg" 
                className="w-full bg-gradient-to-r from-primary to-tech-secondary hover:shadow-lg transition-all duration-300"
              >
                <a href="https://drive.google.com/file/d/1gW6pjX7oxx0pMBqsyFa3-4yaSzyY6JKq/view?usp=drive_link" target="_blank" rel="noopener noreferrer" aria-label="Download resume">
                  <span className="inline-flex items-center">
                    <Download className="h-5 w-5 mr-2" />
                    Download Resume
                  </span>
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="w-full hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <a href="https://www.linkedin.com/in/anumandlasreenu/" target="_blank" rel="noopener noreferrer" aria-label="Open LinkedIn profile">
                  <span className="inline-flex items-center">
                    <Linkedin className="h-5 w-5 mr-2" />
                    View LinkedIn Profile
                  </span>
                </a>
              </Button>
              
              <Button 
                asChild
                variant="outline" 
                size="lg" 
                className="w-full hover:bg-tech-secondary hover:text-white transition-all duration-300"
              >
                <a href="https://github.com/sreenuanum45" target="_blank" rel="noopener noreferrer" aria-label="Open GitHub profile">
                  <span className="inline-flex items-center">
                    <Github className="h-5 w-5 mr-2" />
                    Check GitHub Portfolio
                  </span>
                </a>
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

        {FORMSPREE_ID && (
          <Card className="mt-8 glass-card glass-hover p-6 sm:p-8 animate-slide-up border border-tech-secondary/20 glow-on-hover">
            <h3 className="text-lg sm:text-xl font-semibold mb-6 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">Send a Message</h3>
            <form method="POST" action={`https://formspree.io/f/${FORMSPREE_ID}`} className="grid grid-cols-1 gap-4" aria-label="Contact form">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input id="name" name="name" placeholder="Your name" required autoComplete="name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" name="email" type="email" placeholder="you@example.com" required autoComplete="email" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" name="message" placeholder="How can I help you?" required rows={5} />
              </div>

              <input type="text" name="_gotcha" className="hidden" tabIndex={-1} aria-hidden="true" />
              <div className="flex justify-end">
                <Button type="submit" className="bg-gradient-to-r from-primary to-tech-secondary">
                  Send Securely
                </Button>
              </div>
            </form>
          </Card>
        )}
      </div>
    </section>
  );
};

export default ContactSection;