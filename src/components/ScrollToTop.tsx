
// Disable browser scroll restoration
if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
  window.history.scrollRestoration = 'manual';
}

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);
  // Force scroll to top on initial mount (hard refresh)
  useEffect(() => {
    // Some browsers restore scroll after reload, so force it after a short delay
    const timeout = setTimeout(() => {
      window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
    }, 10);
    return () => clearTimeout(timeout);
  }, []);
  return null;
}
