import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "@/assets/logo.png";
import logoWebp from "@/assets/logo.webp";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#products", label: "Products" },
    { href: "#solutions", label: "Solutions" },
    { href: "#industries", label: "Industries" },
    { href: "#why-choose-us", label: "Why Us" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2">
            <svg width="0" height="0" className="absolute">
              <filter id="remove-white" colorInterpolationFilters="sRGB">
                <feColorMatrix in="SourceGraphic" type="matrix" values="
                  1 0 0 0 0
                  0 1 0 0 0
                  0 0 1 0 0
                  -1 -1 -1 0 3
                " result="colorMask" />
                <feComposite in="colorMask" in2="SourceGraphic" operator="in" />
              </filter>
            </svg>
            <picture>
              <source srcSet={logoWebp} type="image/webp" />
              <img 
                src={logo} 
                alt="Agro Power Pellet Logo - Biomass Pellets Manufacturer" 
                className="h-8 w-auto sm:h-10" 
                width="56"
                height="56"
                loading="eager"
                style={{ filter: "url(#remove-white)" }} 
              />
            </picture>
            <span className="font-display text-lg sm:text-xl font-bold text-foreground">
              Agro Power Pellet
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`px-3 py-2 text-sm font-medium transition-colors rounded-lg ${
                  isScrolled
                    ? "text-gray-700 hover:text-green-600 hover:bg-gray-100"
                    : "text-white hover:text-green-400 hover:bg-white/10"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={scrollToContact}
              className={`ml-4 transition-all duration-300 ${
                isScrolled
                  ? "bg-green-500 hover:bg-green-600 text-white"
                  : "bg-white hover:bg-gray-100 text-green-600"
              }`}
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={isScrolled ? "text-gray-900" : "text-white"}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-2 pb-4 space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <Button
              onClick={scrollToContact}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
