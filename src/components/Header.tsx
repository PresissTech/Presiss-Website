import { useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "@/components/NavLink";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import logo from "@/assets/presiss-logo-dark.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact Us", path: "/contact" },
  ];

  const serviceItems = [
    { name: "Mobile App Development", path: "/mobile-app" },
    { name: "Website Development", path: "/web-development" },
    { name: "UI/UX Design", path: "/ui-ux-design" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src={logo} alt="Presiss Technologies" className="h-10 w-auto" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <NavLink
            to="/"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            activeClassName="!text-foreground font-semibold"
          >
            Home
          </NavLink>
          
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-sm font-medium text-foreground/60 hover:text-foreground transition-colors">
              Services <ChevronDown size={16} />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-background border border-border">
              {serviceItems.map((service) => (
                <DropdownMenuItem key={service.name} asChild>
                  <Link to={service.path} className="cursor-pointer">
                    {service.name}
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink
            to="/about"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            activeClassName="!text-foreground font-semibold"
          >
            About Us
          </NavLink>
          
          <NavLink
            to="/portfolio"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            activeClassName="!text-foreground font-semibold"
          >
            Portfolio
          </NavLink>
          
          <NavLink
            to="/contact"
            className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
            activeClassName="!text-foreground font-semibold"
          >
            Contact Us
          </NavLink>
        </nav>

        <Link to="/contact">
          <Button className="hidden md:flex bg-accent hover:bg-accent/90">
            Let's Connect
          </Button>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <nav className="container flex flex-col py-4 space-y-4">
            <NavLink
              to="/"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              activeClassName="!text-foreground font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </NavLink>
            
            <div className="flex flex-col space-y-2">
              <span className="text-sm font-medium text-foreground/60">Services</span>
              <div className="flex flex-col space-y-2 pl-4">
                {serviceItems.map((service) => (
                  <Link
                    key={service.name}
                    to={service.path}
                    className="text-sm text-foreground/60 hover:text-foreground transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            <NavLink
              to="/about"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              activeClassName="!text-foreground font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              About Us
            </NavLink>
            
            <NavLink
              to="/portfolio"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              activeClassName="!text-foreground font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </NavLink>
            
            <NavLink
              to="/contact"
              className="text-sm font-medium text-foreground/60 hover:text-foreground transition-colors"
              activeClassName="!text-foreground font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Us
            </NavLink>
            
            <Link to="/contact" className="w-full">
              <Button className="w-full bg-accent hover:bg-accent/90">
                Let's Connect
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
