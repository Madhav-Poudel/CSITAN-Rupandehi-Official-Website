import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { motion } from 'framer-motion';
import csitanLogo from '../assets/csitan-logo.png'; // ✅ Import logo here

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/csitanrupandehi', icon: FaFacebook },
    { name: 'Instagram', href: 'https://www.instagram.com/csitanrupandehi/', icon: FaInstagram },
    { name: 'LinkedIn', href: 'https://www.linkedin.com/company/csitanrupandehi/', icon: FaLinkedin },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Organization Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="flex items-center space-x-5">
              <img
                src={csitanLogo}
                alt="CSITAN Rupandehi Logo"
                className="w-15 h-14 object-contain rounded-md"
              />
              {/* <h3 className="text-xl font-bold">CSITAN Rupandehi</h3> */}
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              CSIT Association of Nepal - Rupandehi is a regional body dedicated
              to empowering students and advancing technology in the Rupandehi district.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">rupandehicsitan@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">+977-9849121059</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-muted-foreground text-sm">Butwal, Rupandehi, Nepal</span>
              </div>
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-2 text-left"
          >
            <h3 className="text-lg font-semibold mb-1">Stay Connected</h3>
            <div className="flex items-center gap-1 justify-start">
              {socialLinks.map((social, idx) => {
                const Icon = social.icon;
                return (
                  <React.Fragment key={social.name}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 flex items-center justify-center rounded-lg shadow-sm hover:shadow-md transition-all group bg-transparent"
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5 text-[#CF4546] group-hover:text-[#1FADE4] transition-colors duration-200" />
                    </a>
                    {idx < socialLinks.length - 1 && (
                      <div className="h-4 w-px bg-gray-300" />
                    )}
                  </React.Fragment>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="border-t border-muted-foreground/20 mt-8 pt-8 text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {currentYear} CSIT Association of Nepal - Rupandehi. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
