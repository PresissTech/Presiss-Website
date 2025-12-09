import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { 
  Zap, 
  Search, 
  Clock, 
  Gauge, 
  Smartphone, 
  Globe,
  Code2,
  Blocks,
  ShoppingCart,
  TrendingUp,
  Settings,
  Sparkles
} from "lucide-react";

const WebDevelopment = () => {
  const stats = [
    { icon: Zap, value: "Lightning Fast", label: "Performance" },
    { icon: Search, value: "SEO Optimized", label: "Search Rankings" },
    { icon: Clock, value: "<2s", label: "Page Load Time" },
    { icon: Gauge, value: "95+", label: "Performance Score" },
    { icon: Smartphone, value: "100%", label: "Mobile Responsive" },
    { icon: Globe, value: "500+", label: "Websites Built" },
  ];

  const services = [
    {
      icon: Code2,
      title: "Static & Dynamic Website Development",
      description: "Fast, SEO-optimized websites built with modern frameworks and best practices",
    },
    {
      icon: Blocks,
      title: "Jamstack / Headless CMS Solutions",
      description: "Scalable, secure websites with content management flexibility and developer efficiency",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Platforms",
      description: "Complete online stores with payment integration, inventory management, and analytics",
    },
    {
      icon: TrendingUp,
      title: "Web App Performance Optimization",
      description: "Speed optimization, caching strategies, and performance monitoring for peak efficiency",
    },
    {
      icon: Sparkles,
      title: "Advanced SEO & Speed Enhancements",
      description: "Technical SEO implementation and Core Web Vitals optimization for better rankings",
    },
    {
      icon: Settings,
      title: "Frontend Automation",
      description: "Automated testing, deployment, and build processes for streamlined development",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-br from-background via-background to-muted/30 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-3xl mx-auto text-center space-y-6 animate-fade-in">
            <div className="inline-block px-4 py-2 bg-accent/10 rounded-full">
              <p className="text-accent font-medium">Web Excellence</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary">
              Web Development That Performs
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Create high-performance websites using modern development tools and automated deployment pipelines. 
              From lightning-fast static sites to complex web applications that scale.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Link to="/contact">
                <Button size="lg" className="bg-accent hover:bg-accent/90">
                  Start Your Website
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline">
                  View Our Work
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/30">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center space-y-3 animate-fade-in">
                <div className="w-16 h-16 mx-auto bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-primary">{stat.value}</h3>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-primary">
              Complete Web Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              From simple landing pages to complex web applications, we build websites that drive results 
              and deliver exceptional user experiences.
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

      {/* Portfolio Preview Section */}
      <section className="py-20 bg-muted/30">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">
            Website Success Stories
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how our web development expertise has transformed online presence
          </p>
          <Link to="/portfolio">
            <Button size="lg" variant="outline" className="mt-4">
              View Our Portfolio
            </Button>
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
        <div className="container text-center space-y-6">
          <h2 className="text-3xl md:text-5xl font-bold text-primary">
            Ready to Build Your Website?
          </h2>
          <p className="text-lg text-muted-foreground">
            Let's create a high-performance website that drives results for your business
          </p>
          <div className="max-w-3xl mx-auto text-center space-y-10"></div>
            <Link to="/contact">
              <Button size="lg" className="text-base">
                Get Started Today
              </Button>
            </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;
