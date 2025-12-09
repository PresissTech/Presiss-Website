import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Zap, Target, Rocket, Clock, Code, Percent, Infinity } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

// UPDATED ZOD VALIDATION FOR PHONE
const contactSchema = z.object({
  fullName: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),

  // Allow only digits and optional leading +
  phone: z
    .string()
    .trim()
    .regex(/^\+?\d+$/, "Phone number must contain only numbers and optional + sign")
    .min(10, "Phone number is required")
    .max(20),

  category: z.string().min(1, "Please select a category"),
  budget: z.string().min(1, "Please select a budget"),
  message: z.string().trim().max(1000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);

    setTimeout(() => {
      console.log("Form data:", data);
      toast({
        title: "Message Sent!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-primary via-primary to-primary/90">
          <div className="container">
            <div className="max-w-4xl">
              <p className="text-accent text-sm font-semibold mb-4 flex items-center gap-2">
                ✨ Get In Touch
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Let's Build Something
                <span className="text-accent block">Amazing Together</span>
              </h1>
              <p className="text-lg text-primary-foreground/90 mb-12 max-w-2xl">
                Have a project in mind? We'd love to hear about it. Share your vision with us and let's
                turn your ideas into reality with cutting-edge technology and innovative solutions.
              </p>

              {/* Features */}
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Fast Response</h3>
                  <p className="text-sm text-primary-foreground/80">We'll get back to you within 24 hours</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Target className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Tailored Solutions</h3>
                  <p className="text-sm text-primary-foreground/80">Custom solutions for your specific needs</p>
                </div>

                <div className="text-center">
                  <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-8 h-8 text-accent" />
                  </div>
                  <h3 className="font-semibold text-primary-foreground mb-2">Expert Team</h3>
                  <p className="text-sm text-primary-foreground/80">Experienced developers and designers</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-20 bg-background">
          <div className="container max-w-4xl">
            <div className="bg-card border rounded-lg p-8 shadow-lg">
              <p className="text-muted-foreground mb-6">
                Fill out the form below and we'll get back to you with a personalized proposal for your project.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName">Full Name*</Label>
                    <Input
                      id="fullName"
                      placeholder="Enter Your Name"
                      {...register("fullName")}
                      className={errors.fullName ? "border-destructive" : ""}
                    />
                    {errors.fullName && (
                      <p className="text-sm text-destructive">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address*</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter Your Email Address"
                      {...register("email")}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email.message}</p>
                    )}
                  </div>
                </div>

                {/* UPDATED PHONE FIELD */}
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number*</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter Your Phone Number"
                    {...register("phone")}
                    className={errors.phone ? "border-destructive" : ""}
                    onInput={(e) => {
                      // Allow leading +, remove everything else except digits
                      e.target.value = e.target.value.replace(/(?!^\+)\D/g, "");
                    }}
                    onKeyDown={(e) => {
                      const allowedKeys = ["Backspace", "Delete", "ArrowLeft", "ArrowRight", "Tab"];
                      if (allowedKeys.includes(e.key)) return;

                      if (!/[0-9]/.test(e.key) && !(e.key === "+" && e.target.value.length === 0)) {
                        e.preventDefault();
                      }
                    }}
                  />
                  {errors.phone && (
                    <p className="text-sm text-destructive">{errors.phone.message}</p>
                  )}
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="category">Category*</Label>
                    <Select onValueChange={(value) => setValue("category", value)}>
                      <SelectTrigger className={errors.category ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select Category" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="web-development">Web Development</SelectItem>
                        <SelectItem value="mobile-app">Mobile App Development</SelectItem>
                        <SelectItem value="ui-ux">UI/UX Design</SelectItem>
                        <SelectItem value="custom-software">Custom Software</SelectItem>
                        <SelectItem value="qa-testing">QA Testing</SelectItem>
                        <SelectItem value="talent-solutions">Talent Solutions</SelectItem>
                        <SelectItem value="ai-integration">AI Integration</SelectItem>
                        <SelectItem value="consulting">Consulting</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.category && (
                      <p className="text-sm text-destructive">{errors.category.message}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="budget">Budget*</Label>
                    <Select onValueChange={(value) => setValue("budget", value)}>
                      <SelectTrigger className={errors.budget ? "border-destructive" : ""}>
                        <SelectValue placeholder="Select Budget" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="under-1k">Under $1,000</SelectItem>
                        <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                        <SelectItem value="4k-10k">$5,000 - $10,000</SelectItem>
                        <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                        <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                        <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                        <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                        <SelectItem value="250k-plus">$250,000+</SelectItem>
                        <SelectItem value="discuss">Let's Discuss</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.budget && (
                      <p className="text-sm text-destructive">{errors.budget.message}</p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Enter Your Message"
                    rows={5}
                    {...register("message")}
                    className={errors.message ? "border-destructive" : ""}
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive">{errors.message.message}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full bg-accent hover:bg-accent/90"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-accent/5 to-background">
          <div className="container">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Presiss Technologies?</h2>
              <p className="text-muted-foreground text-lg">
                We deliver exceptional results with cutting-edge development
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Percent className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-accent">40%</h3>
                <h4 className="font-semibold mb-2">Faster Development</h4>
                <p className="text-sm text-muted-foreground">
                  Accelerated delivery without compromising quality
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-accent">24h</h3>
                <h4 className="font-semibold mb-2">Response Time</h4>
                <p className="text-sm text-muted-foreground">
                  Quick responses to your inquiries and needs
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-accent">100%</h3>
                <h4 className="font-semibold mb-2">Code Quality</h4>
                <p className="text-sm text-muted-foreground">
                  Rigorous testing and review processes
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Infinity className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-3xl font-bold mb-2 text-accent">∞</h3>
                <h4 className="font-semibold mb-2">Ongoing Support</h4>
                <p className="text-sm text-muted-foreground">
                  Continuous maintenance and feature updates
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
