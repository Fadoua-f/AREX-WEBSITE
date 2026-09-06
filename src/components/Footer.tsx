import { ArrowRight, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { navLinks, socialLinks } from '@/data/content';
import { useNav } from '@/context/NavContext';
import Logo from './Logo';

export default function Footer() {
  const { navigate } = useNav();

  return (
    <footer className="bg-neutral-800 text-neutral-200">
      <div className="mx-auto max-w-8xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-sm leading-relaxed text-neutral-300">
              Solutions technologiques et industrielles intelligentes pour un avenir durable.
            </p>
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg bg-neutral-700 text-neutral-300 transition-all duration-300 hover:bg-arex-green hover:text-white"
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Navigation</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => navigate(link.id)}
                    className="group flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-arex-green-light"
                  >
                    <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Expertises</h3>
            <ul className="space-y-3">
              {['Automation', 'Énergie', 'Data Center', 'Transformation Digitale', 'Cybersécurité', 'Smart City'].map(
                (item) => (
                  <li key={item}>
                    <button
                      onClick={() => navigate('expertise')}
                      className="group flex items-center gap-2 text-sm text-neutral-300 transition-colors hover:text-arex-green-light"
                    >
                      <ArrowRight className="h-3 w-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0.5" />
                      {item}
                    </button>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-white">Coordonnées</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-sm text-neutral-300">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-arex-green-light" />
                <span>42 Avenue de l'Innovation, 75008 Paris, France</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-300">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-arex-green-light" />
                <span>+33 1 42 00 00 00</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-300">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-arex-green-light" />
                <span>contact@arex.com</span>
              </li>
              <li className="flex items-start gap-3 text-sm text-neutral-300">
                <Clock className="mt-0.5 h-4 w-4 flex-shrink-0 text-arex-green-light" />
                <span>Lun – Ven : 8h00 – 18h00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-neutral-700 pt-8 sm:flex-row">
          <p className="text-xs text-neutral-400">
            © {new Date().getFullYear()} AREX. Tous droits réservés.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs text-neutral-400 transition-colors hover:text-arex-green-light">Mentions légales</a>
            <a href="#" className="text-xs text-neutral-400 transition-colors hover:text-arex-green-light">Politique de confidentialité</a>
            <a href="#" className="text-xs text-neutral-400 transition-colors hover:text-arex-green-light">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
