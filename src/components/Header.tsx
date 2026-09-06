import { useEffect, useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { navLinks } from '@/data/content';
import { useNav } from '@/context/NavContext';
import Logo from './Logo';

export default function Header() {
  const { currentPage, navigate } = useNav();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (page: typeof navLinks[number]['id']) => {
    navigate(page);
    setMobileOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Logo />

          <nav className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  currentPage === link.id
                    ? 'text-arex-blue'
                    : scrolled
                      ? 'text-neutral-600 hover:text-arex-blue'
                      : 'text-neutral-700 hover:text-arex-blue'
                }`}
              >
                {link.label}
                {currentPage === link.id && (
                  <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-arex-green" />
                )}
              </button>
            ))}
          </nav>

          <div className="hidden lg:flex">
            <button
              onClick={() => handleNav('contact')}
              className="group flex items-center gap-2 rounded-full bg-arex-green px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark hover:shadow-green-glow"
            >
              Nous contacter
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </button>
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg text-arex-blue lg:hidden"
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-[500px]' : 'max-h-0'
        }`}
      >
        <div className="bg-white/95 backdrop-blur-md px-4 pb-6 pt-2 shadow-soft">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNav(link.id)}
                className={`flex items-center justify-between rounded-lg px-4 py-3 text-left text-sm font-semibold transition-colors ${
                  currentPage === link.id
                    ? 'bg-arex-blue-50 text-arex-blue'
                    : 'text-neutral-600 hover:bg-neutral-50'
                }`}
              >
                {link.label}
                <ArrowRight className="h-4 w-4 opacity-40" />
              </button>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
