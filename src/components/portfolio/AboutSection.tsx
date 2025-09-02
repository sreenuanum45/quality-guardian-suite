import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-12 sm:py-16 lg:py-20 bg-background">
      <div className="container max-w-5xl mx-auto px-4">
        <div className="text-center mb-10 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-primary via-tech-secondary to-tech-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Detail-oriented QA Automation Engineer with 2.6+ years of experience building hybrid automation frameworks,
            integrating tests into CI/CD, and ensuring high-quality releases. Passionate about crafting reliable test
            suites, improving performance, and collaborating closely with engineering and product teams.
          </p>
        </div>

        <Card className="glass-card glass-hover glow-on-hover p-6 md:p-8 border border-primary/20">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <h3 className="font-semibold text-primary">What I Do</h3>
              <p className="text-sm text-muted-foreground">
                UI & API automation, performance testing with JMeter, and robust reporting with ExtentReports.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-tech-secondary">How I Work</h3>
              <p className="text-sm text-muted-foreground">
                Data-driven frameworks, CI/CD integrations, and quality gates to prevent regressions.
              </p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-tech-accent">What I Value</h3>
              <p className="text-sm text-muted-foreground">
                Clear communication, measurable impact, and continuous improvement.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default AboutSection;
