import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className={`fixed bottom-6 right-6 z-50 bg-primary text-white rounded-full shadow-lg p-3 transition-opacity duration-300 hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-primary/60 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <ArrowUp className="w-6 h-6" />
    </button>
  );
}
