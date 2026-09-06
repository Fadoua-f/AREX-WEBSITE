import { ArrowRight, CheckCircle2, Target } from 'lucide-react';
import { useNav } from '@/context/NavContext';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { values, team, stats, aboutImage, aboutImage2 } from '@/data/content';

export default function AboutPage() {
  const { navigate } = useNav();

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-arex-blue/5 blur-3xl" />

        <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-arex-green" />
                <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">À propos d'AREX</span>
              </div>
              <h1 className="font-display text-4xl font-extrabold leading-tight text-arex-blue sm:text-5xl lg:text-6xl">
                25 ans d'innovation<br />au service de l'industrie
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-neutral-500">
                Depuis 2000, AREX accompagne les entreprises dans leur transformation technologique. Nous combinons expertise technique, innovation et engagement durable pour bâtir des solutions qui font la différence.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <button
                  onClick={() => navigate('contact')}
                  className="group flex items-center gap-2 rounded-full bg-arex-green px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark"
                >
                  Travailler avec nous
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('projects')}
                  className="group flex items-center gap-2 rounded-full border-2 border-arex-blue-100 px-6 py-3 text-sm font-semibold text-arex-blue transition-all duration-300 hover:border-arex-blue hover:bg-arex-blue-50"
                >
                  Voir nos réalisations
                </button>
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
                <img
                  src={aboutImage}
                  alt="Équipe AREX"
                  className="h-[450px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-arex-blue-dark/40 to-transparent" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="relative overflow-hidden rounded-2xl shadow-card">
                <img
                  src={aboutImage2}
                  alt="Bâtiment AREX"
                  className="h-[400px] w-full object-cover"
                />
              </div>
            </Reveal>

            <Reveal variant="right">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-arex-green" />
                <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">Notre mission</span>
              </div>
              <h2 className="text-3xl font-bold text-arex-blue sm:text-4xl">
                Accélérer la transition vers une industrie intelligente et durable
              </h2>
              <p className="mt-4 text-base leading-relaxed text-neutral-500">
                Nous croyons que la technologie est un levier puissant pour relever les défis environnementaux et économiques de notre époque. Notre mission est de rendre cette technologie accessible, fiable et performante pour chaque entreprise.
              </p>
              <div className="mt-8 space-y-4">
                {[
                  'Déployer des solutions à impact positif mesurable',
                  'Garantir la sécurité et la résilience des infrastructures critiques',
                  "Favoriser l'autonomie technologique de nos clients",
                  'Contribuer à la neutralité carbone des territoires',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-arex-green" />
                    <span className="text-sm text-neutral-600">{item}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos valeurs"
            title="Ce qui nous anime au quotidien"
            subtitle="Quatre principes fondamentaux qui guident chacune de nos décisions et de nos actions."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((value, i) => (
              <Reveal key={value.title} delay={i * 100}>
                <div className="group h-full rounded-2xl bg-white p-8 shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                  <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-arex-blue-50 transition-colors duration-300 group-hover:bg-arex-green-50">
                    <value.icon className="h-7 w-7 text-arex-blue transition-colors duration-300 group-hover:text-arex-green" />
                  </div>
                  <h3 className="text-lg font-bold text-arex-blue">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-neutral-500">{value.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-arex-blue py-16">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} className="text-center">
                <div className="mb-3 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-white/10">
                  <stat.icon className="h-7 w-7 text-arex-green-light" />
                </div>
                <div className="text-4xl font-bold text-white lg:text-5xl">{stat.value}</div>
                <div className="mt-1 text-sm text-arex-blue-100">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Notre équipe"
            title="Des leaders passionnés"
            subtitle="Une équipe de direction expérimentée qui guide AREX vers de nouveaux horizons."
          />

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member, i) => (
              <Reveal key={member.name} delay={i * 100}>
                <div className="group overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                  <div className="relative h-72 overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arex-blue-dark/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>
                  <div className="p-5">
                    <h3 className="text-base font-bold text-arex-blue">{member.name}</h3>
                    <p className="text-sm font-semibold text-arex-green-dark">{member.role}</p>
                    <p className="mt-2 text-xs leading-relaxed text-neutral-500">{member.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-neutral-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-arex-green-50">
              <Target className="h-8 w-8 text-arex-green" />
            </div>
            <h2 className="mt-6 text-3xl font-bold text-arex-blue sm:text-4xl">
              Rejoignez l'aventure AREX
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500">
              Que vous soyez client, partenaire ou futur collaborateur, nous serions ravis d'échanger avec vous.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-arex-green px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark hover:shadow-green-glow"
            >
              Contactez-nous
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
