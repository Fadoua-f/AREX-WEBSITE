import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useNav } from '@/context/NavContext';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { expertises } from '@/data/content';

export default function ExpertisePage() {
  const { navigate } = useNav();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full bg-arex-green/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-arex-green" />
              <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">Expertises</span>
              <span className="h-px w-8 bg-arex-green" />
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-arex-blue sm:text-5xl lg:text-6xl">
              Six domaines d'expertise<br />pour transformer votre industrie
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
              De l'automatisation à la cybersécurité, AREX maîtrise les technologies clés qui font la différence dans un monde en pleine transformation.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Expertise Cards */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {expertises.map((exp, i) => (
              <Reveal key={exp.id} variant={i % 2 === 0 ? 'left' : 'right'} delay={(i % 2) * 100}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:-translate-y-1 hover:shadow-card-hover">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arex-blue-dark/70 to-transparent" />
                    <div className="absolute left-6 top-6 flex h-14 w-14 items-center justify-center rounded-xl bg-white/90 backdrop-blur-md">
                      <exp.icon className="h-7 w-7 text-arex-blue" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-arex-blue">{exp.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{exp.description}</p>
                    <div className="mt-5 grid grid-cols-2 gap-2">
                      {exp.points.map((point) => (
                        <div key={point} className="flex items-center gap-2">
                          <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-arex-green" />
                          <span className="text-xs text-neutral-600">{point}</span>
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

      {/* Process */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notre approche"
            title="Une méthode éprouvée en 4 étapes"
            subtitle="De la première rencontre à l'exploitation, nous structurons chaque projet pour garantir le succès."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { num: '01', title: 'Analyse', desc: 'Audit complet de vos besoins et contraintes techniques.' },
              { num: '02', title: 'Conception', desc: 'Architecture sur mesure et plan de déploiement détaillé.' },
              { num: '03', title: 'Déploiement', desc: 'Intégration, tests et mise en service avec support continu.' },
              { num: '04', title: 'Optimisation', desc: 'Supervision, maintenance et amélioration continue.' },
            ].map((step, i) => (
              <Reveal key={step.num} delay={i * 100}>
                <div className="group relative h-full rounded-2xl bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                  <div className="mb-4 font-display text-5xl font-extrabold text-arex-blue-100 transition-colors duration-300 group-hover:text-arex-green-100">
                    {step.num}
                  </div>
                  <h3 className="text-lg font-bold text-arex-blue">{step.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{step.desc}</p>
                  {i < 3 && (
                    <div className="absolute right-6 top-8 hidden lg:block">
                      <ArrowRight className="h-5 w-5 text-neutral-300" />
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-arex-blue py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Quel est votre défi technologique ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-arex-blue-100">
              Nos experts sont prêts à vous accompagner. Décrivez-nous votre projet, nous vous répondons sous 48h.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-arex-green px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark hover:shadow-green-glow"
            >
              Parlons de votre projet
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
