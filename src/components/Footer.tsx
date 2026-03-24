import { Mail, MapPin, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Kenya News", href: "/kenya" },
    { name: "World News", href: "/world" },
    { name: "About Us", href: "/about" },
  ];

  const categories = [
    { name: "Politics", href: "/category/politics" },
    { name: "Business", href: "/category/business" },
    { name: "Sports", href: "/category/sports" },
    { name: "Entertainment", href: "/category/entertainment" },
    { name: "Technology", href: "/category/technology" },
    { name: "Health", href: "/category/health" },
  ];

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "#" },
    { name: "Twitter", icon: Twitter, href: "#" },
    { name: "Instagram", icon: Instagram, href: "#" },
    { name: "LinkedIn", icon: Linkedin, href: "#" },
  ];

  return (
    <footer className="bg-gradient-to-r from-gray-900 to-gray-800 text-white">
      {/* Main Footer */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold flex items-center gap-2">
              📰 NewsApp
            </h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Your trusted source for the latest news from Kenya and around the world. 
              Stay informed with real-time updates and breaking stories.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-blue-600 transition"
                  aria-label={social.name}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-blue-400 transition text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Categories</h4>
            <ul className="space-y-2">
              {categories.map((category) => (
                <li key={category.name}>
                  <Link
                    to={category.href}
                    className="text-gray-300 hover:text-blue-400 transition text-sm"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-blue-400">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-gray-300 text-sm">
                <MapPin size={18} className="mt-0.5 text-blue-400" />
                <span>Nairobi, Kenya</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Mail size={18} className="text-blue-400" />
                <a href="mailto:info@newsapp.co.ke" className="hover:text-blue-400 transition">
                  benokoth707@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-gray-300 text-sm">
                <Phone size={18} className="text-blue-400" />
                <a href="tel:+254701804627" className="hover:text-blue-400 transition">
                  +254 701804627
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm text-center md:text-left">
              © {currentYear} NewsApp. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <Link to="/about" className="text-gray-400 hover:text-blue-400 transition">
                Privacy Policy
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-blue-400 transition">
                Terms of Service
              </Link>
              <Link to="/about" className="text-gray-400 hover:text-blue-400 transition">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;