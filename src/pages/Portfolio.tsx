import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("website");

  const projects = {
    website: [
      {
        id: 1,
        title: "E-Commerce Platform",
        description: "A fully responsive and scalable e-commerce solution featuring advanced product filtering, seamless checkout, and secure payment integration.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        title: "Corporate Website",
        description: "A modern, high-performance corporate website built with CMS integration, multilingual support, and enterprise-grade scalability.",
        image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 3,
        title: "Portfolio Website",
        description: "A visually engaging portfolio website showcasing animations, interactive elements, and smooth user experience to highlight personal or brand identity.",
        image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 4,
        title: "Real Estate Platform",
        description: "A robust property listing system with advanced search filters, virtual tours, and real-time property management tools.",
        image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 5,
        title: "Healthcare Portal",
        description: "A secure patient management platform offering appointment scheduling, medical record management, and healthcare workflow automation.",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 6,
        title: "Educational Platform",
        description: "A complete online learning solution with course management, student tracking, assessments, and interactive learning tools.",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80"
      }
    ],
    app: [
      {
        id: 1,
        title: "Fitness Tracking App",
        description: "A smart fitness companion for tracking workouts, nutrition, progress, and health insights—designed to help users stay motivated and achieve their goals.",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        title: "Food Delivery App",
        description: "A seamless on-demand food delivery platform with real-time order tracking, secure payments, and an intuitive customer experience.",
        image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 3,
        title: "Social Networking App",
        description: "A community-driven social platform built for messaging, content sharing, and meaningful user engagement.",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 4,
        title: "Banking App",
        description: "A secure digital banking solution offering transactions, investments, analytics, and complete financial management on the go.",
        image: "https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 5,
        title: "Travel Booking App",
        description: "An all-in-one travel platform for booking flights, hotels, tours, and itineraries with a smooth and user-friendly experience.",
        image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 6,
        title: "Task Management App",
        description: "A powerful productivity tool for organizing projects, tracking tasks, and enhancing team collaboration.",
        image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?auto=format&fit=crop&w=800&q=80"
      }
    ],
    software: [
      {
        id: 1,
        title: "CRM Software",
        description: "A powerful customer relationship management system designed for streamlined sales pipelines, lead tracking, and advanced analytics to boost conversions.",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 2,
        title: "Inventory Management",
        description: "A complete warehouse and inventory solution with barcode scanning, stock monitoring, and automated reporting for efficient supply chain operations.",
        image: "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 3,
        title: "HR Management System",
        description: "An integrated HR platform for payroll, attendance, recruitment, and complete employee lifecycle management.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 4,
        title: "Analytics Dashboard",
        description: "A business intelligence dashboard featuring real-time data visualization, actionable insights, and customizable reporting.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 5,
        title: "Project Management Tool",
        description: "A comprehensive project tracking system with Gantt charts, task workflows, team collaboration, and resource allocation tools.",
        image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80"
      },
      {
        id: 6,
        title: "ERP Solution",
        description: "A robust enterprise resource planning system unifying all business processes—including finance, operations, HR, and inventory—into a single platform.",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80"
      }
    ]
  };

  const currentProjects = projects[activeTab as keyof typeof projects];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
          <div className="container mx-auto text-center max-w-4xl">
            <div className="mb-4">
              <span className="inline-block text-primary font-medium text-lg">
                ～～～ Presiss Technologies ～～～
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-foreground">
              Empowering Businesses with Next-Generation Software Solutions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our expertise in custom software development, mobile and web app engineering, and advanced IT services. At <span className="font-semibold text-foreground">Presiss Technologies</span>, we build scalable, innovative, and tailor-made digital solutions designed to accelerate your business growth. 
            </p>
          </div>
        </section>

        {/* Tabs Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto max-w-6xl">
            <div className="flex justify-center gap-4 mb-12 flex-wrap">
              <Button
                onClick={() => setActiveTab("website")}
                variant={activeTab === "website" ? "default" : "outline"}
                size="lg"
                className="min-w-[180px]"
              >
                Website Development
              </Button>
              <Button
                onClick={() => setActiveTab("app")}
                variant={activeTab === "app" ? "default" : "outline"}
                size="lg"
                className="min-w-[180px]"
              >
                App Development
              </Button>
              <Button
                onClick={() => setActiveTab("software")}
                variant={activeTab === "software" ? "default" : "outline"}
                size="lg"
                className="min-w-[180px]"
              >
                Software Development
              </Button>
            </div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentProjects.map((project) => (
                <Card key={project.id} className="overflow-hidden hover:shadow-lg transition-shadow group">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    <Button variant="link" className="p-0 h-auto">
                      View Details →
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Portfolio;
