import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Users, Layout, Palette, FileText, Component, CheckCircle } from "lucide-react";

const UiUxDesign = () => {
  const services = [
    {
      icon: Users,
      title: "UX Research & Persona Mapping",
      description: "Understand your users through comprehensive research and intelligent survey clustering",
    },
    {
      icon: Layout,
      title: "Wireframing",
      description: "Create clear, functional wireframes that establish perfect information architecture",
    },
    {
      icon: Palette,
      title: "High-Fidelity Prototyping",
      description: "Build interactive prototypes that bring your vision to life before development",
    },
    {
      icon: FileText,
      title: "UX Writing",
      description: "Craft compelling microcopy and content that guides users seamlessly",
    },
    {
      icon: Component,
      title: "UI Design Systems",
      description: "Develop scalable design systems ensuring consistency across all touchpoints",
    },
    {
      icon: CheckCircle,
      title: "Accessibility & Usability Testing",
      description: "Ensure your designs work for everyone with comprehensive testing protocols",
    },
  ];

  const stats = [
    { value: "340%", label: "Conversion Increase" },
    { value: "85%", label: "User Retention" },
    { value: "3x", label: "Faster Development" },
    { value: "50+", label: "Design Systems" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-background via-muted/20 to-background">
        <div className="container">
          <div className="max-w-4xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
              <span className="text-accent font-semibold">Design Excellence</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              UI/UX Design That Converts
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform user experiences with research-driven design methodologies. From user personas to interactive prototypes, we create designs that drive engagement and deliver measurable results.
            </p>
            <div className="flex flex-wrap gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="text-base">
                  Start Your Project
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="text-base">
                  View Portfolio
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 justify-center pt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>User-Centered Design</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-accent"></div>
                <span>Accessibility First</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                  <div className="w-14 h-14 bg-background rounded-full"></div>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-primary">{stat.value}</h3>
                <p className="text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Comprehensive Design Services
            </h2>
            <p className="text-lg text-muted-foreground">
              From research to implementation, we cover every aspect of the design process to ensure your product succeeds.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-accent transition-colors animate-fade-in">
                <CardContent className="p-6 space-y-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Preview */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              See how our design expertise has transformed businesses
            </p>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="text-base">
                View Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Ready to Transform Your User Experience?
            </h2>
            <p className="text-lg text-muted-foreground">
              Let's create designs that drive engagement and deliver measurable results
            </p>
            <Link to="/contact">
              <Button size="lg" className="text-base">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UiUxDesign;
