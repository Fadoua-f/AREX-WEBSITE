import { useState } from 'react';
import { MapPin, Calendar, ArrowRight, Filter } from 'lucide-react';
import { useNav } from '@/context/NavContext';
import Reveal from '@/components/Reveal';
import SectionHeading from '@/components/SectionHeading';
import { projects, projectCategories } from '@/data/content';

export default function ProjectsPage() {
  const { navigate } = useNav();
  const [activeCategory, setActiveCategory] = useState('Tous');

  const filteredProjects =
    activeCategory === 'Tous'
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative overflow-hidden bg-mesh py-20 lg:py-28">
        <div className="absolute inset-0 bg-grid opacity-50" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-arex-blue/5 blur-3xl" />

        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="up">
            <div className="mb-4 flex items-center justify-center gap-2">
              <span className="h-px w-8 bg-arex-green" />
              <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">Nos projets</span>
              <span className="h-px w-8 bg-arex-green" />
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-arex-blue sm:text-5xl lg:text-6xl">
              Des réalisations qui<br />font la différence
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Plus de 1200 projets livrés dans 40 pays. Découvrez comment nous transformons les défis industriels en succès concrets.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filters + Gallery */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          {/* Filters */}
          <Reveal variant="up" className="mb-12">
            <div className="flex flex-wrap items-center justify-center gap-3">
              <div className="flex items-center gap-2 text-sm font-semibold text-neutral-400">
                <Filter className="h-4 w-4" />
                Filtrer :
              </div>
              {projectCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-semibold transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-arex-blue text-white shadow-soft'
                      : 'bg-neutral-50 text-neutral-600 hover:bg-arex-blue-50 hover:text-arex-blue'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </Reveal>

          {/* Gallery */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, i) => (
              <Reveal key={project.id} delay={(i % 3) * 100}>
                <div className="group h-full overflow-hidden rounded-2xl bg-white shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-arex-blue-dark/60 to-transparent" />
                    <div className="absolute top-4 left-4">
                      <span className="rounded-full bg-arex-green px-3 py-1 text-xs font-semibold text-white">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {project.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {project.year}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-arex-blue transition-colors group-hover:text-arex-green-dark">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{project.description}</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-md bg-arex-blue-50 px-2.5 py-1 text-xs font-medium text-arex-blue"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="py-20 text-center text-neutral-400">
              <p className="text-lg">Aucun projet dans cette catégorie pour le moment.</p>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-arex-blue py-16">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: '1200+', label: 'Projets livrés' },
              { value: '40', label: 'Pays desservis' },
              { value: '98%', label: 'Satisfaction client' },
              { value: '15+', label: 'Secteurs couverts' },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={i * 100} className="text-center">
                <div className="text-4xl font-bold text-white lg:text-5xl">{stat.value}</div>
                <div className="mt-1 text-sm text-arex-blue-100">{stat.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <h2 className="text-3xl font-bold text-arex-blue sm:text-4xl">
              Votre projet sera le prochain ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500">
              Confiez-nous votre défi technologique. Nos experts vous proposent une solution sur mesure.
            </p>
            <button
              onClick={() => navigate('contact')}
              className="group mt-8 inline-flex items-center gap-2 rounded-full bg-arex-green px-7 py-3.5 text-base font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark hover:shadow-green-glow"
            >
              Démarrer un projet
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
