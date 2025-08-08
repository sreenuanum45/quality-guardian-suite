import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Project Manager, 2the Point",
    quote:
      "Sreenu built an automation suite that gave us confidence to ship faster. His attention to detail and ownership were exceptional.",
  },
  {
    name: "Rahul Verma",
    role: "Senior QA, IoT Marketplace",
    quote:
      "He designed reliable UI/API test flows and significantly improved our regression coverage. A great collaborator!",
  },
  {
    name: "Anita Desai",
    role: "Dev Lead",
    quote:
      "His continuous improvements to the framework reduced flaky tests and saved the team hours every sprint.",
  },
];

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-section-bg">
      <div className="container max-w-6xl mx-auto px-4">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary to-tech-secondary bg-clip-text text-transparent">
            Testimonials
          </h2>
          <p className="text-lg text-muted-foreground">What teammates and managers say</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <Card key={t.name} className="glass-card glass-hover glow-on-hover p-6 relative overflow-hidden border border-primary/20">
              <Quote className="absolute -top-6 -left-6 h-24 w-24 text-primary/10" />
              <div className="relative z-10 space-y-3">
                <p className="text-sm text-muted-foreground leading-relaxed">“{t.quote}”</p>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
