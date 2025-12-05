import { Link } from "react-router-dom";
import logo from "@/assets/presiss-logo-light.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <img src={logo} alt="Presiss Technologies" className="h-10 w-auto brightness-0 invert" />
            <p className="text-sm text-primary-foreground/80">
              Precisely building the digital foundations for the enterprises
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-sm hover:text-accent transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-accent transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-accent transition-colors">Contact Us</Link></li>
              <li><Link to="/portfolio" className="text-sm hover:text-accent transition-colors">Portfolio</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Services</h3>
            <ul className="space-y-2">
              <li className="text-sm text-primary-foreground/80">Website Development</li>
              <li className="text-sm text-primary-foreground/80">Mobile App Development</li>
              <li className="text-sm text-primary-foreground/80">Digital Marketing</li>
              <li className="text-sm text-primary-foreground/80">UI/UX Design</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 text-accent">Contact</h3>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li>Email: contact@presiss.com</li>
              <li>Phone: +91 87586 66913</li>
              <li>Address: 304, Blue Stone, Near Shyamdham Temple, Sarthana Jakatnaka, Surat</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Presiss Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
