import { Card, CardContent } from "@/components/ui/card";
import { Code, Smartphone, TrendingUp } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Website Development",
      description: "Website development is the process of building, designing, and maintaining websites for various purposes, including business, e-commerce, blogs, portfolios, and web applications.",
      features: [
        "Custom Website Development",
        "E-commerce Development",
        "Responsive Web Design",
        "CMS Development",
        "Business Websites",
      ],
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Mobile app development involves designing, building, and deploying applications for smartphones and tablets across different platforms.",
      features: [
        "Android App Development",
        "iOS App Development",
        "Cross-Platform App Development",
        "Hybrid App Development",
      ],
    },
    {
      icon: TrendingUp,
      title: "Digital Marketing",
      description: "Digital marketing is the promotion of products, services, or brands through online channels like search engines, social media, email, and websites.",
      features: [
        "Search Engine Optimization",
        "Social Media Marketing",
        "Pay-Per-Click (PPC) Advertising",
        "Content Marketing",
        "Email Marketing & Automation",
      ],
    },
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container">
        <div className="grid md:grid-cols-3 gap-8">
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
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm">
                      <span className="text-accent mt-1">•</span>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
