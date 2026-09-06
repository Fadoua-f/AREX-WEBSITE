import { ArrowRight, CheckCircle2, Play, Quote } from 'lucide-react';
import { useNav } from '@/context/NavContext';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { expertises, services, projects, stats, newsArticles, heroImage, ctaImage } from '@/data/content';

export default function HomePage() {
  const { navigate } = useNav();
  const featuredProjects = projects.slice(0, 3);
  const featuredExpertises = expertises.slice(0, 3);
  const latestNews = newsArticles.slice(0, 3);

  return (
    <div>
      {/* Hero */}
      <section className="relative min-h-screen overflow-hidden bg-mesh pt-20">
        <div className="absolute inset-0 bg-grid opacity-60" />
        <div className="absolute right-0 top-1/4 h-96 w-96 rounded-full bg-arex-blue/5 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-80 w-80 rounded-full bg-arex-green/5 blur-3xl" />

        <div className="relative mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 py-16 lg:grid-cols-2 lg:py-24">
            <div className="animate-fade-in-up">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-arex-green-50 px-4 py-2 ring-1 ring-arex-green-100">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-arex-green" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-arex-green" />
                </span>
                <span className="text-sm font-semibold text-arex-green-dark">Nouveau : Solutions IA industrielles 2025</span>
              </div>

              <h1 className="font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-arex-blue sm:text-6xl lg:text-7xl">
                Think Smart.<br />
                <span className="text-gradient-blue">Build the Future.</span>
              </h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-neutral-500">
                AREX conçoit des solutions technologiques et industrielles intelligentes pour accélérer la transition énergétique et la transformation digitale des entreprises.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <button
                  onClick={() => navigate('projects')}
                  className="group flex items-center gap-2 rounded-full bg-arex-green px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark hover:shadow-green-glow"
                >
                  Découvrir nos projets
                  <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => navigate('expertise')}
                  className="group flex items-center gap-2 rounded-full border-2 border-arex-blue-100 px-7 py-3.5 text-base font-semibold text-arex-blue transition-all duration-300 hover:border-arex-blue hover:bg-arex-blue-50"
                >
                  <Play className="h-4 w-4 fill-arex-blue" />
                  Nos expertises
                </button>
              </div>

              <div className="mt-10 flex items-center gap-8">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="h-10 w-10 rounded-full border-2 border-white bg-gradient-to-br from-arex-blue to-arex-blue-dark shadow-soft"
                    />
                  ))}
                </div>
                <div>
                  <p className="text-sm font-semibold text-neutral-700">1200+ projets livrés</p>
                  <p className="text-xs text-neutral-400">dans 40 pays</p>
                </div>
              </div>
            </div>

            <div className="relative animate-fade-in-up" style={{ animationDelay: '200ms' }}>
              <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
                <img
                  src={heroImage}
                  alt="Installation industrielle AREX"
                  className="h-[400px] w-full object-cover lg:h-[520px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-arex-blue-dark/60 via-transparent to-transparent" />

                <div className="absolute bottom-6 left-6 right-6">
                  <div className="rounded-xl bg-white/95 p-4 shadow-card backdrop-blur-md">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-arex-green-50">
                        <CheckCircle2 className="h-6 w-6 text-arex-green" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-arex-blue">Certifié ISO 27001 & 9001</p>
                        <p className="text-xs text-neutral-400">Excellence et sécurité garantis</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -right-4 -top-4 animate-float rounded-xl bg-arex-blue p-4 shadow-card-hover">
                <div className="text-2xl font-bold text-white">98%</div>
                <div className="text-xs text-arex-blue-100">Satisfaction client</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative -mt-px bg-arex-blue py-16">
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

      {/* Expertises Preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Nos expertises"
            title="Des solutions pour chaque défi industriel"
            subtitle="Six domaines d'expertise pour accompagner votre transformation vers des opérations plus intelligentes, durables et performantes."
          />

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredExpertises.map((exp, i) => (
              <Reveal key={exp.id} delay={i * 100}>
                <button
                  onClick={() => navigate('expertise')}
                  className="group relative h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img
                      src={exp.image}
                      alt={exp.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arex-blue-dark/80 via-arex-blue/20 to-transparent" />
                    <div className="absolute left-5 top-5 flex h-12 w-12 items-center justify-center rounded-xl bg-white/90 backdrop-blur-md">
                      <exp.icon className="h-6 w-6 text-arex-blue" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-arex-blue transition-colors group-hover:text-arex-green-dark">
                      {exp.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{exp.short}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-arex-green-dark">
                      En savoir plus
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 text-center">
            <button
              onClick={() => navigate('expertise')}
              className="group inline-flex items-center gap-2 rounded-full border-2 border-arex-blue-100 px-6 py-3 text-sm font-semibold text-arex-blue transition-all duration-300 hover:border-arex-blue hover:bg-arex-blue-50"
            >
              Voir toutes les expertises
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>

      {/* Services Band */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal variant="left">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-px w-8 bg-arex-green" />
                <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">Nos services</span>
              </div>
              <h2 className="text-3xl font-bold text-arex-blue sm:text-4xl lg:text-5xl">
                Un accompagnement de bout en bout
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-neutral-500">
                Du conseil stratégique à l'exploitation, nous couvrons l'ensemble du cycle de vie de vos projets technologiques.
              </p>
              <div className="mt-8 space-y-3">
                {services.slice(0, 4).map((service) => (
                  <div
                    key={service.id}
                    className="flex items-start gap-3 rounded-xl bg-white p-4 shadow-soft transition-all duration-300 hover:shadow-card"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-arex-blue-50">
                      <service.icon className="h-5 w-5 text-arex-blue" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-arex-blue">{service.title}</h3>
                      <p className="mt-1 text-xs text-neutral-500">{service.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <button
                onClick={() => navigate('services')}
                className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-arex-green-dark transition-colors hover:text-arex-green"
              >
                Tous nos services
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Reveal>

            <Reveal variant="right">
              <div className="relative overflow-hidden rounded-2xl shadow-card-hover">
                <img
                  src={ctaImage}
                  alt="Équipe AREX sur le terrain"
                  className="h-[500px] w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-arex-blue-dark/70 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8">
                  <Quote className="mb-3 h-8 w-8 text-arex-green-light" />
                  <p className="text-lg font-medium text-white">
                    "AREX nous a accompagnés dans notre transformation digitale avec une rigueur et une expertise remarquables."
                  </p>
                  <p className="mt-3 text-sm text-arex-blue-100">— Directeur Industriel, Groupe Energie+</p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Nos projets"
              title="Réalisations marquantes"
              subtitle="Découvrez quelques-uns de nos projets les plus emblématiques."
            />
            <Reveal variant="right">
              <button
                onClick={() => navigate('projects')}
                className="group inline-flex items-center gap-2 rounded-full bg-arex-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-blue-dark"
              >
                Voir tous les projets
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <Reveal key={project.id} delay={i * 100}>
                <button
                  onClick={() => navigate('projects')}
                  className="group relative block h-80 w-full overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-arex-blue-dark/90 via-arex-blue/30 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-arex-green px-3 py-1 text-xs font-semibold text-white">
                      {project.category}
                    </span>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
                    <p className="text-xs text-arex-blue-100">{project.location} — {project.year}</p>
                    <h3 className="mt-1 text-lg font-bold text-white">{project.title}</h3>
                    <p className="mt-1 text-sm text-neutral-200 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                      {project.description}
                    </p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* News Preview */}
      <section className="bg-neutral-50 py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
            <SectionHeading
              align="left"
              eyebrow="Actualités"
              title="Les dernières nouveautés"
              subtitle="Restez informé des derniers projets, événements et innovations d'AREX."
            />
            <Reveal variant="right">
              <button
                onClick={() => navigate('news')}
                className="group inline-flex items-center gap-2 rounded-full border-2 border-arex-blue-100 px-6 py-3 text-sm font-semibold text-arex-blue transition-all duration-300 hover:border-arex-blue hover:bg-white"
              >
                Toutes les actualités
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </Reveal>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-3">
            {latestNews.map((article, i) => (
              <Reveal key={article.id} delay={i * 100}>
                <button
                  onClick={() => navigate('news')}
                  className="group block h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-arex-blue backdrop-blur-md">
                        {article.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-5 text-left">
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span>{article.date}</span>
                      <span>•</span>
                      <span>{article.readTime}</span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-arex-blue transition-colors group-hover:text-arex-green-dark">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm text-neutral-500">{article.excerpt}</p>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-arex-blue py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-20" />
        <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-arex-green/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-white/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <h2 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Prêt à transformer vos opérations ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-arex-blue-100">
              Parlons de votre projet. Nos experts vous répondent sous 48 heures avec une proposition sur mesure.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <button
                onClick={() => navigate('contact')}
                className="group flex items-center gap-2 rounded-full bg-arex-green px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark hover:shadow-green-glow"
              >
                Demander un devis
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
              <button
                onClick={() => navigate('about')}
                className="flex items-center gap-2 rounded-full border-2 border-white/30 px-7 py-3.5 text-base font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white/10"
              >
                En savoir plus sur AREX
              </button>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
