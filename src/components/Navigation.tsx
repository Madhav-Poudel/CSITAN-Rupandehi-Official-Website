import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './ui/button';
import { useState as useDialogState } from 'react';
import JoinUsDialog from './JoinUsDialog';
// import ThemeToggle from './ThemeToggle';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import csitanLogo from '../assets/csitan-logo.png'; // ✅ Import logo here

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [joinDialog, setJoinDialog] = useDialogState(false);
  const location = useLocation();

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Events', href: '/events' },
    { name: 'Team', href: '/team' },
    { name: 'Contact Us', href: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b">
      <nav className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 w-full">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <button
              type="button"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (location.pathname !== '/') {
                  window.location.href = '/';
                }
              }}
              className="flex items-center space-x-2 focus:outline-none"
              aria-label="Go to Home"
            >
              <img
                src={csitanLogo}
                alt="CSITAN Rupandehi Logo"
                className="w-15 h-12 object-contain"
              />
            </button>
          </motion.div>

          {/* Desktop Navigation + CTA Button */}
          <div className="hidden md:flex items-center gap-2">
            {navigation.map((item) => {
              const active = isActive(item.href);
              return (
                <div key={item.name} className="relative flex flex-col items-center">
                  <Link
                    to={item.href}
                    className={
                      "px-4 py-2 text-sm font-medium transition-colors duration-200 " +
                      (active ? "text-[#CF4546]" : "text-gray-700 hover:text-[#CF4546]")
                    }
                    onClick={isActive(item.href) ? (e) => {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    } : undefined}
                  >
                    {item.name}
                  </Link>
                  {active && (
                    <motion.div
                      layoutId="underline"
                      className="w-8 h-[2px] bg-[#CF4546] rounded-full mt-[-2px]"
                      transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    />
                  )}
                </div>
              );
            })}
            <button
              type="button"
              onClick={() => setJoinDialog(true)}
              className="ml-4 px-5 py-2 bg-[#CF4546] text-white rounded-full font-semibold shadow hover:bg-[#CF4546]/90 transition-colors duration-200"
            >
              Join Us
            </button>
          </div>

          {/* Hamburger for mobile */}
          <button
            className="md:hidden flex items-center justify-center p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden"
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                      isActive(item.href)
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-2">
                  <Button
                    size="sm"
                    className="w-full bg-[#CF4546] hover:bg-[#CF4546]/90 text-white font-semibold"
                    onClick={() => { setIsOpen(false); setJoinDialog(true); }}
                  >
                    Join Us
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
      <JoinUsDialog open={joinDialog} onOpenChange={setJoinDialog} />
    </header>
  );
};

export default Navigation;
