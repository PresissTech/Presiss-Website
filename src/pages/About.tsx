import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90">
          <div className="container">
            <p className="text-accent text-lg mb-4 animate-fade-in">Presiss Technologies</p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Fueling Your Business Growth With Next-Level Digital Excellence
            </h1>
            <p className="text-xl text-white/90 max-w-3xl animate-fade-in">
              Our reputation is built on scalable, cost-efficient solutions crafted with unmatched expertise, professionalism, and precision.
            </p>
          </div>
        </section>

        {/* Expert Professionals Section */}
        <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                50+ Expert Professionals
              </h2>

              <p className="text-xl text-accent font-semibold mb-6">
                "Empowering brands to create unforgettable digital experiences"
              </p>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                At Presiss Technologies, our strength lies in our team of 50+ highly skilled developers, designers, and analysts, each specializing in different stages of the Software Development Life Cycle (SDLC). With deep technical expertise and a strong understanding of business needs, we translate client requirements into precisely engineered, high-quality digital products.
              </p>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                Our agile approach allows us to stay flexible and responsive to evolving requirements, ensuring that every solution we build is aligned with our clients’ vision and goals.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Backed by years of experience and a passion for innovation, our team excels in delivering scalable, secure, and performance-driven solutions across mobile, web, and enterprise platforms. What sets us apart is our ability to truly understand customer needs and craft solutions that consistently exceed expectations—no matter the complexity of the project.
              </p>

            </div>

            <div className="space-y-6">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-brand-navy/20 rounded-lg"></div>
            </div>

          </div>
        </div>
        </section>

        {/* Mission and Vision */}
        <section className="py-20 bg-muted/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12">
              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent to-brand-orange flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Mission</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our mission is to become a globally trusted technology partner known for precision engineering, innovation, and delivering future-ready digital platforms that shape smarter, connected enterprises. We envision a world where every business, regardless of size can unlock the power of digital intelligence through seamless software, cloud automation, and transformative user experiences.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2 hover:border-accent transition-colors">
                <CardContent className="p-8">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent to-brand-orange flex items-center justify-center mb-6">
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Our Vision</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    At <strong>Presiss Technologies</strong>, our vision is to empower businesses with precise, innovative, and scalable digital solutions that drive growth, enhance efficiency, and accelerate digital transformation, we combine cutting-edge technologies, deep industry expertise, and customer-centric engineering to build secure, high-performance mobile, web, and enterprise applications that deliver real business value.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container text-center">
            <div className="max-w-3xl mx-auto text-center space-y-6">
              <h2 className="text-3xl md:text-5xl font-bold text-primary">
                Let's Connect With Us
              </h2>
              <p className="text-lg text-muted-foreground">
                "Ready to bring your ideas to life? Contact us today and let’s collaborate to build powerful, meaningful, and innovative digital experiences."
              </p>
              <div className="max-w-3xl mx-auto text-center space-y-10"></div>
              <Link to="/contact">
                <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-semibold transition-colors">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
