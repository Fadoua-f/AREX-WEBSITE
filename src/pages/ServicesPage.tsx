import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNav } from '@/context/NavContext';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { services } from '@/data/content';

export default function ServicesPage() {
  const { navigate } = useNav();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-arex-blue/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-arex-green" />
              <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">Services</span>
              <span className="h-px w-8 bg-arex-green" />
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-arex-blue sm:text-5xl lg:text-6xl">
              Un accompagnement<br />à chaque étape de votre projet
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Nous couvrons l'ensemble du cycle de vie de vos projets technologiques, du conseil stratégique à l'exploitation quotidienne.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.id} delay={(i % 3) * 100}>
                <div className="group relative h-full overflow-hidden rounded-2xl bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                  <div className="absolute right-0 top-0 h-24 w-24 -translate-y-8 translate-x-8 rounded-full bg-arex-blue-50 transition-colors duration-500 group-hover:bg-arex-green-50" />

                  <div className="relative">
                    <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-arex-blue-50 transition-colors duration-300 group-hover:bg-arex-green-50">
                      <service.icon className="h-7 w-7 text-arex-blue transition-colors duration-300 group-hover:text-arex-green" />
                    </div>
                    <h3 className="text-lg font-bold text-arex-blue">{service.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{service.description}</p>
                    <div className="mt-5 space-y-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-arex-green" />
                          <span className="text-xs text-neutral-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-arex-green" />
                <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">Pourquoi AREX</span>
              </div>
              <h2 className="text-3xl font-bold text-arex-blue sm:text-4xl">
                L'excellence opérationnelle comme standard
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">
                Nous ne livrons pas seulement des solutions techniques. Nous nous engageons sur des résultats mesurables, avec une organisation pensée pour la performance et la satisfaction client.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  { title: 'SLA garantis', desc: 'Engagements de niveau de service contractuels et transparents.' },
                  { title: 'Support 24/7', desc: 'Une équipe joignable à tout moment pour vos infrastructures critiques.' },
                  { title: 'Certifications', desc: 'ISO 27001, ISO 9001 et équipes certifiées sur les technologies déployées.' },
                  { title: 'Proximité terrain', desc: "Un réseau d'agences régionales pour une intervention rapide." },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-4 rounded-xl bg-white p-4 shadow-soft transition-shadow duration-300 hover:shadow-card">
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-arex-green-50">
                      <CheckCircle2 className="h-5 w-5 text-arex-green" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-arex-blue">{item.title}</h3>
                      <p className="mt-1 text-xs text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '98%', label: 'Satisfaction client', color: 'arex-blue' },
                  { value: '< 4h', label: 'Temps de réponse', color: 'arex-green' },
                  { value: '99.9%', label: 'Disponibilité', color: 'arex-blue' },
                  { value: '25+', label: "Ans d'expérience", color: 'arex-green' },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl p-8 text-center shadow-card transition-transform duration-300 hover:-translate-y-1 ${
                      item.color === 'arex-blue' ? 'bg-arex-blue text-white' : 'bg-white text-arex-blue'
                    }`}
                  >
                    <div className={`text-4xl font-bold ${item.color === 'arex-blue' ? 'text-white' : 'text-arex-blue'}`}>
                      {item.value}
                    </div>
                    <div className={`mt-2 text-sm ${item.color === 'arex-blue' ? 'text-arex-blue-100' : 'text-neutral-500'}`}>
                      {item.label}
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <h2 className="text-3xl font-bold text-arex-blue sm:text-4xl">
              Besoin d'un service sur mesure ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500">
              Décrivez-nous votre besoin, nous vous proposerons la solution la plus adaptée.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-arex-green px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark hover:shadow-green-glow"
            >
              Demander un devis
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
