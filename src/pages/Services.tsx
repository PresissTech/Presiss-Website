import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  const services = [
    {
      number: "01",
      title: "All-In-One Solutions",
      items: [
        { title: "Custom Application Development", description: "Tailored applications for businesses to meet specific needs." },
        { title: "Web Development", description: "Building responsive websites using modern technologies (e.g., MERN stack, PHP, etc.)." },
        { title: "Mobile App Development", description: "Native and hybrid apps for Android and iOS." },
        { title: "ERP/CRM Solutions", description: "Development of Enterprise Resource Planning (ERP) and Customer Relationship Management (CRM) systems." },
      ],
    },
    {
      number: "02",
      title: "Digital Marketing Services",
      items: [
        { title: "SEO & SEM", description: "Helping businesses rank better in search engine results and run effective marketing campaigns." },
        { title: "Social Media Marketing", description: "Managing social media profiles and running paid campaigns to increase brand visibility." },
        { title: "Content Marketing", description: "Creating and promoting content to drive customer engagement and improve SEO." },
      ],
    },
    {
      number: "03",
      title: "Data Solutions",
      items: [
        { title: "Data Backup and Recovery", description: "Implementing backup systems and recovery strategies to prevent data loss." },
        { title: "Database Design & Management", description: "Creating efficient databases and maintaining their performance." },
        { title: "Big Data Solutions", description: "Implementing solutions for large-scale data analysis and management." },
      ],
    },
    {
      number: "04",
      title: "Customer Relationship Management (CRM) Systems",
      items: [
        { title: "Lead Management", description: "Custom lead tracking, nurturing, and conversion solutions." },
        { title: "Marketing Automation", description: "Automation of marketing campaigns, email outreach, and customer segmentation." },
        { title: "Sales Pipeline Tracking", description: "Visual tools to track and manage sales from leads to conversions." },
        { title: "Customer Support", description: "Custom ticketing and helpdesk systems for improved customer service." },
      ],
    },
    {
      number: "05",
      title: "Custom Inventory & Supply Chain Management",
      items: [
        { title: "Inventory Tracking", description: "Real-time stock monitoring, order management, and stock alerts." },
        { title: "Supplier & Vendor Management", description: "Custom solutions to track suppliers, purchase orders, and payment schedules." },
        { title: "Warehouse Management Systems (WMS)", description: "Optimized solutions for warehouse operations, including picking, packing, and shipping." },
        { title: "Logistics & Shipping Management", description: "Custom tracking and optimization for shipping logistics, order fulfillment, and delivery." },
      ],
    },
    {
      number: "06",
      title: "Custom Business Intelligence (BI) and Reporting Systems",
      items: [
        { title: "Custom Dashboards", description: "Real-time data visualization and business reporting dashboards tailored to business needs." },
        { title: "Data Analytics", description: "Custom solutions for analyzing and interpreting business data to make informed decisions." },
        { title: "KPI Tracking", description: "Custom metrics and Key Performance Indicator (KPI) tracking based on business goals." },
        { title: "Data Integration", description: "Custom integration with existing data sources and external APIs to gather and analyze data." },
      ],
    },
    {
      number: "07",
      title: "Project Management Software",
      items: [
        { title: "Task and Resource Management", description: "Custom solutions for task assignments, resource allocation, and project deadlines." },
        { title: "Team Collaboration", description: "Integrated communication tools, file sharing, and real-time collaboration within teams." },
        { title: "Time Tracking", description: "Custom time logging and reporting tools to track the time spent on tasks and projects." },
        { title: "Client & Vendor Management", description: "Managing client projects, communications, and vendor relations within one platform." },
      ],
    },
    {
      number: "08",
      title: "Custom POS (Point of Sale) Systems",
      items: [
        { title: "Retail POS Systems", description: "Tailored POS solutions for managing sales transactions, inventory, and customer data in retail environments." },
        { title: "Online POS Integration", description: "Custom integration of physical stores with e-commerce platforms for seamless sales management." },
        { title: "Payment Gateway Integration", description: "Integration with various payment gateways for secure transaction processing." },
      ],
    },
    {
      number: "09",
      title: "Custom E-commerce Platforms",
      items: [
        { title: "E-commerce Website Development", description: "Custom-built e-commerce platforms tailored to business needs with features like product management, payment gateways, and reporting." },
        { title: "Subscription-Based Services", description: "Custom systems for managing subscription services, billing, and customer profiles." },
        { title: "Multi-Channel Selling", description: "Integration with various online marketplaces (e.g., Amazon, eBay) for centralized inventory management and sales reporting." },
      ],
    },
    {
      number: "10",
      title: "Custom Human Resource Management (HRM) Software",
      items: [
        { title: "Recruitment Management", description: "Custom tools for managing job openings, applications, interviews, and hires." },
        { title: "Employee Performance Management", description: "Tools for performance evaluations, appraisals, and feedback." },
        { title: "Leave & Attendance Management", description: "Tailored solutions to track employee leaves, attendance, and working hours." },
        { title: "Employee Self-Service Portals", description: "Custom portals where employees can access their information, request leave, and manage personal details." },
      ],
    },
    {
      number: "11",
      title: "Custom Workflow & Automation Tools",
      items: [
        { title: "Business Process Automation (BPA)", description: "Custom automation tools to streamline repetitive business tasks like approvals, reporting, and communications." },
        { title: "Document Management Systems (DMS)", description: "A custom solution to store, organize, and manage business documents digitally." },
        { title: "Approval Workflows", description: "Tailored workflows for document approval, expense management, and other internal processes." },
      ],
    },
    {
      number: "12",
      title: "Custom Collaboration Tools",
      items: [
        { title: "Team Communication Platforms", description: "Tailored chat and communication platforms for teams, with file sharing, direct messaging, and group collaboration." },
        { title: "Task & Project Collaboration", description: "Integrated task management and project collaboration tools with file sharing, notes, and reminders." },
        { title: "Real-Time Document Editing", description: "Custom collaborative document editing tools for teams to work together on projects." },
      ],
    },
    {
      number: "13",
      title: "Custom Document Management Systems (DMS)",
      items: [
        { title: "Document Storage & Retrieval", description: "Custom systems for storing, organizing, and retrieving documents." },
        { title: "Document Security & Permissions", description: "Solutions for managing access rights, encryption, and document sharing." },
        { title: "Version Control", description: "Custom tools for versioning documents, tracking changes, and reverting to previous versions." },
      ],
    },
    {
      number: "14",
      title: "Custom Time & Attendance Systems",
      items: [
        { title: "Clock-In/Out Systems", description: "Custom software to track employee work hours, either manually or through biometric systems like fingerprint scanners." },
        { title: "Scheduling & Shift Management", description: "Tailored tools for managing employee schedules, shifts, and availability." },
        { title: "Overtime Calculation & Reporting", description: "Custom solutions for calculating overtime, holidays, and payroll integration." },
      ],
    },
    {
      number: "15",
      title: "Custom Financial & Accounting Software",
      items: [
        { title: "Invoice & Billing Systems", description: "Tailored tools for generating invoices, processing payments, and managing client billing." },
        { title: "Expense Tracking & Reporting", description: "Custom systems for managing business expenses, generating reports, and handling reimbursements." },
        { title: "Tax Calculation", description: "Custom tools for calculating business taxes, deductions, and filing reports." },
      ],
    },
    {
      number: "16",
      title: "Custom Learning Management Systems (LMS)",
      items: [
        { title: "Employee Training Platforms", description: "Custom e-learning portals for training employees, tracking progress, and assessments." },
        { title: "Course Creation & Management", description: "Tailored solutions for creating and managing courses, quizzes, and certifications." },
        { title: "Compliance Training", description: "Custom systems to track employee completion of required training programs." },
      ],
    },
    {
      number: "17",
      title: "Custom Scheduling & Booking Systems",
      items: [
        { title: "Appointment Scheduling", description: "Custom solutions for businesses that need to manage appointments, client bookings, and availability." },
        { title: "Resource Booking", description: "Systems for scheduling and booking resources like meeting rooms, equipment, and vehicles." },
        { title: "Client Notifications", description: "Automated email/SMS notifications for appointment reminders and confirmations." },
      ],
    },
    {
      number: "18",
      title: "Custom Marketing Automation Software",
      items: [
        { title: "Email Campaigns", description: "Custom solutions for creating, scheduling, and analyzing email marketing campaigns." },
        { title: "Social Media Management", description: "Tailored tools for managing social media accounts, posting, and engagement tracking." },
        { title: "Lead Scoring & Nurturing", description: "Automation for lead scoring, nurturing, and conversion tracking." },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90">
          <div className="container">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in">
              Our Services
            </h1>
            <p className="text-xl text-white/90 max-w-3xl animate-fade-in">
              Comprehensive IT solutions tailored to transform your business and drive digital excellence
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-background">
          <div className="container">
            <div className="grid gap-8 md:gap-12">
              {services.map((service, index) => (
                <Card 
                  key={index} 
                  className="border-2 hover:border-accent transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent to-brand-orange flex items-center justify-center">
                          <span className="text-2xl font-bold text-white">{service.number}</span>
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-primary mb-6">{service.title}</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          {service.items.map((item, i) => (
                            <div key={i} className="space-y-2">
                              <h4 className="font-semibold text-foreground">{item.title}:</h4>
                              <p className="text-sm text-muted-foreground leading-relaxed">
                                {item.description}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-brand-navy to-brand-navy/90">
          <div className="container text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help you achieve your goals
            </p>
            <button className="bg-accent hover:bg-accent/90 text-white px-8 py-3 rounded-md font-semibold transition-colors">
              Get Started
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
