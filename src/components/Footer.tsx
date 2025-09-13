import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="h-8 w-8 gradient-wellness rounded-lg flex items-center justify-center">
                <span className="text-lg font-bold text-foreground">Y</span>
              </div>
              <span className="font-lora text-xl font-semibold">The10YEC</span>
            </div>
            <p className="text-sm text-muted-foreground">
              House of Wellness - Integrating Yoga and Entrepreneurship for Excellence through our SOCH methodology.
            </p>
            <div className="flex space-x-4">
              <Instagram className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
              <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/about" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                About SOCH
              </Link>
              <Link to="/ventures" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                Our Ventures
              </Link>
              <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                Contact Us
              </Link>
            </div>
          </div>

          {/* Ventures */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Ventures</h3>
            <div className="space-y-2">
              <Link to="/ventures/yoga" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                Yoga & Meditation
              </Link>
              <Link to="/ventures/wellness-spa" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                Wellness Spa
              </Link>
              <Link to="/ventures/cafe-nutrition" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                Café & Nutrition
              </Link>
              <Link to="/ventures/accelerator" className="text-sm text-muted-foreground hover:text-primary block transition-colors">
                Startup Accelerator
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>hello@the10yec.com</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Wellness District, NY</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2025 The10YEC Ventures. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground mt-2 md:mt-0">
              Built by YEC Youth 🌱
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;