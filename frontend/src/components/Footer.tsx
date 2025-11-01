import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CC</span>
              </div>
              <span className="font-bold text-xl">Culinary Canvas</span>
            </div>
            <p className="text-muted-foreground text-sm">
              Celebrating India's diverse culinary heritage through traditional recipes and cultural stories.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              <Link to="/" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Home
              </Link>
              <Link to="/states" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Browse States
              </Link>
              <Link to="/gallery" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Gallery
              </Link>
              <Link to="/reviews" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Reviews
              </Link>
              <Link to="/upload" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Upload Recipe
              </Link>
            </div>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Popular States</h3>
            <div className="space-y-2">
              <Link to="/states?state=punjab" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Punjab
              </Link>
              <Link to="/states?state=kerala" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Kerala
              </Link>
              <Link to="/states?state=rajasthan" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                Rajasthan
              </Link>
              <Link to="/states?state=west-bengal" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                West Bengal
              </Link>
              <Link to="/about" className="block text-muted-foreground hover:text-primary transition-colors text-sm">
                About Us
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-semibold text-foreground">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Mail className="h-4 w-4" />
                <span>info@culinarycanvas.com</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <Phone className="h-4 w-4" />
                <span>+91 8210382838</span>
              </div>
              <div className="flex items-center space-x-2 text-muted-foreground text-sm">
                <MapPin className="h-4 w-4" />
                <span>Bihar, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2026 Culinary Canvas. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm mt-2 md:mt-0">
            Developed with ❤️ by <span className="text-primary font-medium">Rahul</span>
          </p>
        </div>
      </div>
    </footer>
  );
};