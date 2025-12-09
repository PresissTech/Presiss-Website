import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Smartphone, 
  Zap, 
  Globe, 
  Code, 
  TestTube, 
  Store,
  Check,
  ChevronRight,
  Star,
  Download,
  TrendingUp,
  Rocket
} from "lucide-react";

const MobileApp = () => {
  const [activeTab, setActiveTab] = useState("all");

  const stats = [
    { icon: Star, value: "4.8★", label: "App Store Rating" },
    { icon: Download, value: "1M+", label: "Downloads" },
    { icon: TrendingUp, value: "60%", label: "Faster Development" },
    { icon: Rocket, value: "200+", label: "Apps Launched" },
  ];

  const services = [
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native performance with shared codebase using React Native and Flutter frameworks",
      features: [
        "Single codebase for iOS and Android",
        "Native UI components",
        "Reduced development time",
        "Cost-effective solution"
      ]
    },
    {
      icon: Globe,
      title: "Progressive Web Apps (PWA)",
      description: "Web apps that feel native with offline functionality and app store distribution",
      features: [
        "Offline functionality",
        "App-like experience",
        "Push notifications",
        "No installation required"
      ]
    },
    {
      icon: Code,
      title: "Smart Code Generation for Core Modules",
      description: "Accelerated development with intelligent code generation for common mobile patterns",
      features: [
        "Automated boilerplate code",
        "Best practices built-in",
        "Faster time to market",
        "Consistent code quality"
      ]
    },
    {
      icon: TestTube,
      title: "Device/OS Compatibility Testing",
      description: "Comprehensive testing across iOS and Android devices for consistent performance",
      features: [
        "Multi-device testing",
        "OS version compatibility",
        "Performance optimization",
        "Bug-free delivery"
      ]
    },
    {
      icon: Zap,
      title: "Real-Time Features",
      description: "Chat, notifications, live updates, and synchronization for engaging user experiences",
      features: [
        "In-app messaging",
        "Push notifications",
        "Live data sync",
        "Real-time updates"
      ]
    },
    {
      icon: Store,
      title: "Store Deployment & Optimization",
      description: "App store optimization, submission, and ongoing performance monitoring",
      features: [
        "App Store submission",
        "ASO optimization",
        "Performance monitoring",
        "Regular updates"
      ]
    },
  ];

  const portfolio = [
    {
      category: "E-commerce",
      title: "Fashion Shopping App",
      description: "Cross-platform shopping app with 500K+ downloads",
      image: "/placeholder.svg",
      tags: ["React Native", "Payment Gateway", "Push Notifications"]
    },
    {
      category: "Healthcare",
      title: "Medical Consultation Platform",
      description: "Telehealth app connecting patients with doctors",
      image: "/placeholder.svg",
      tags: ["Flutter", "Video Call", "Real-time Chat"]
    },
    {
      category: "FinTech",
      title: "Digital Wallet Application",
      description: "Secure mobile banking and payment solution",
      image: "/placeholder.svg",
      tags: ["React Native", "Security", "Biometric Auth"]
    },
    {
      category: "Education",
      title: "Online Learning Platform",
      description: "Interactive e-learning app with 1M+ students",
      image: "/placeholder.svg",
      tags: ["Flutter", "Video Streaming", "Gamification"]
    },
  ];

  const features = [
    "Cross-Platform Development",
    "Native Performance",
    "Scalable Architecture",
    "Secure Data Storage",
    "Cloud Integration",
    "Third-party API Integration"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-accent/10 via-background to-secondary/10 py-20">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="outline" className="text-accent border-accent">
                  Mobile Innovation
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  Mobile Apps That <span className="text-accent">Engage</span>
                </h1>
                <p className="text-lg text-muted-foreground">
                  We engineer cross-platform mobile apps using intelligent automation, clean architecture, and precision 
                  testing—delivering high-impact experiences that accelerate business growth.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="bg-accent hover:bg-accent/90">
                      Start Your App <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                  <Link to="/portfolio">
                    <Button size="lg" variant="outline">
                      View App Portfolio
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">Cross-Platform</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-5 w-5 text-accent" />
                    <span className="text-sm font-medium">Native Performance</span>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="border-2 hover:border-accent transition-colors animate-fade-in">
                    <CardContent className="p-6 text-center space-y-2">
                      <stat.icon className="h-8 w-8 text-accent mx-auto" />
                      <div className="text-3xl font-bold text-accent">{stat.value}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Complete Mobile Solutions</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From initial idea to App Store deployment, we build mobile apps with cutting-edge tools, 
                robust architecture, and industry-proven development practices.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="border-2 hover:border-accent transition-all hover:shadow-lg animate-fade-in">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-secondary flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{service.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {service.description}
                    </p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm">
                          <Check className="h-4 w-4 text-accent mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-20 bg-muted/50">
          <div className="container">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold">Mobile App Success Stories</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                See how our mobile development expertise has created engaging user experiences
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {portfolio.map((project, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow animate-fade-in">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-secondary/20 flex items-center justify-center">
                    <Smartphone className="h-16 w-16 text-accent" />
                  </div>
                  <CardContent className="p-4 space-y-3">
                    <Badge variant="secondary" className="text-xs">
                      {project.category}
                    </Badge>
                    <h3 className="font-bold">{project.title}</h3>
                    <p className="text-sm text-muted-foreground">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, i) => (
                        <Badge key={i} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why Choose Our Mobile App Development
                </h2>
                <p className="text-lg text-muted-foreground">
                  We combine cutting-edge technology with proven methodologies to deliver mobile applications that drive business growth and user engagement.
                </p>
                <ul className="space-y-3">
                  {features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-4 w-4 text-accent" />
                      </div>
                      <span className="text-foreground font-medium">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <Card className="p-6 text-center space-y-2 border-2">
                  <div className="text-4xl font-bold text-accent">100%</div>
                  <div className="text-sm text-muted-foreground">Client Satisfaction</div>
                </Card>
                <Card className="p-6 text-center space-y-2 border-2">
                  <div className="text-4xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Expert Developers</div>
                </Card>
                <Card className="p-6 text-center space-y-2 border-2">
                  <div className="text-4xl font-bold text-accent">24/7</div>
                  <div className="text-sm text-muted-foreground">Support Available</div>
                </Card>
                <Card className="p-6 text-center space-y-2 border-2">
                  <div className="text-4xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-5xl font-bold text-primary">
              Ready to Build Your Mobile App?
            </h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Let's discuss your project and create a mobile experience that your users will love
            </p>
            <div className="max-w-3xl mx-auto text-center space-y-10"></div>
            <Link to="/contact">
              <Button size="lg" className="text-base">
                Get Started Today
              </Button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default MobileApp;
