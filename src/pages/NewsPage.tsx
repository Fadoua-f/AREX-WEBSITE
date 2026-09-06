import { Calendar, Clock, ArrowRight, ArrowLeft } from 'lucide-react';
import { useState } from 'react';
import { useNav } from '@/context/NavContext';
import Reveal from '@/components/Reveal';
import { newsArticles } from '@/data/content';

export default function NewsPage() {
  const { navigate } = useNav();
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  const article = newsArticles.find((a) => a.id === selectedArticle);

  if (article) {
    return (
      <div className="pt-20">
        <section className="relative overflow-hidden bg-mesh py-16">
          <div className="absolute inset-0 bg-grid opacity-50" />
          <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedArticle(null)}
              className="group mb-6 inline-flex items-center gap-2 text-sm font-semibold text-arex-blue transition-colors hover:text-arex-green-dark"
            >
              <ArrowLeft className="h-4 w-4 transition-transform duration-300 group-hover:-translate-x-1" />
              Retour aux actualités
            </button>
            <Reveal variant="up">
              <span className="rounded-full bg-arex-green-50 px-3 py-1 text-xs font-semibold text-arex-green-dark">
                {article.category}
              </span>
              <h1 className="mt-4 font-display text-3xl font-extrabold leading-tight text-arex-blue sm:text-4xl">
                {article.title}
              </h1>
              <div className="mt-4 flex items-center gap-4 text-sm text-neutral-400">
                <span className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {article.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {article.readTime}
                </span>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="bg-white py-16">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
            <Reveal variant="up">
              <div className="overflow-hidden rounded-2xl shadow-card-hover">
                <img
                  src={article.image}
                  alt={article.title}
                  className="h-[400px] w-full object-cover"
                />
              </div>
              <div className="mt-8 space-y-6 text-base leading-relaxed text-neutral-600">
                <p className="text-lg font-medium text-neutral-700">{article.excerpt}</p>
                <p>
                  Dans le cadre de son développement continu, AREX poursuit ses investissements dans l'innovation et l'excellence opérationnelle. Cette initiative s'inscrit dans notre stratégie de long terme : proposer à nos clients des solutions toujours plus performantes, durables et intelligentes.
                </p>
                <p>
                  Notre équipe d'experts a travaillé en étroite collaboration avec l'ensemble des parties prenantes pour garantir un déploiement fluide et conforme aux attentes. Les résultats obtenus témoignent de la pertinence de notre approche, qui combine expertise technique, rigueur méthodologique et engagement durable.
                </p>
                <p>
                  Nous remercions l'ensemble de nos partenaires et clients pour leur confiance, et restons plus que jamais mobilisés pour accompagner la transformation industrielle et technologique de demain.
                </p>
              </div>
            </Reveal>

            <div className="mt-12 border-t border-neutral-100 pt-8">
              <h3 className="text-lg font-bold text-arex-blue">Articles similaires</h3>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {newsArticles.filter((a) => a.id !== article.id).slice(0, 2).map((a) => (
                  <button
                    key={a.id}
                    onClick={() => {
                      setSelectedArticle(a.id);
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="group flex items-start gap-4 rounded-xl bg-neutral-50 p-4 text-left transition-all duration-300 hover:shadow-card"
                  >
                    <img src={a.image} alt={a.title} className="h-16 w-16 flex-shrink-0 rounded-lg object-cover" />
                    <div>
                      <p className="text-xs text-neutral-400">{a.date}</p>
                      <h4 className="mt-1 text-sm font-bold text-arex-blue transition-colors group-hover:text-arex-green-dark">
                        {a.title}
                      </h4>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

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
              <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">Actualités</span>
              <span className="h-px w-8 bg-arex-green" />
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-arex-blue sm:text-5xl lg:text-6xl">
              Les dernières nouvelles<br />d'AREX
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Projets, événements, innovations et coulisses de l'entreprise : restez connecté à l'actualité d'AREX.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured Article */}
      <section className="bg-white py-16">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <Reveal variant="up">
            <button
              onClick={() => setSelectedArticle(newsArticles[0].id)}
              className="group grid w-full overflow-hidden rounded-2xl shadow-card transition-all duration-500 hover:shadow-card-hover lg:grid-cols-2"
            >
              <div className="relative h-64 overflow-hidden lg:h-full">
                <img
                  src={newsArticles[0].image}
                  alt={newsArticles[0].title}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute top-4 left-4">
                  <span className="rounded-full bg-arex-green px-3 py-1 text-xs font-semibold text-white">
                    À la une
                  </span>
                </div>
              </div>
              <div className="flex flex-col justify-center bg-arex-blue p-8 text-left lg:p-12">
                <div className="flex items-center gap-3 text-sm text-arex-blue-100">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
                    {newsArticles[0].category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" />
                    {newsArticles[0].date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {newsArticles[0].readTime}
                  </span>
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold text-white lg:text-3xl">
                  {newsArticles[0].title}
                </h2>
                <p className="mt-4 text-base leading-relaxed text-arex-blue-100">
                  {newsArticles[0].excerpt}
                </p>
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-arex-green-light">
                  Lire l'article
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </button>
          </Reveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {newsArticles.slice(1).map((article, i) => (
              <Reveal key={article.id} delay={(i % 3) * 100}>
                <button
                  onClick={() => setSelectedArticle(article.id)}
                  className="group block h-full overflow-hidden rounded-2xl bg-white text-left shadow-card transition-all duration-500 hover:-translate-y-2 hover:shadow-card-hover"
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
                  <div className="p-5">
                    <div className="flex items-center gap-3 text-xs text-neutral-400">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {article.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {article.readTime}
                      </span>
                    </div>
                    <h3 className="mt-3 text-base font-bold text-arex-blue transition-colors group-hover:text-arex-green-dark">
                      {article.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-neutral-500">{article.excerpt}</p>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-arex-green-dark">
                      Lire la suite
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <h2 className="text-3xl font-bold text-arex-blue sm:text-4xl">
              Restez informé
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-neutral-500">
              Recevez les dernières actualités d'AREX directement dans votre boîte mail.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 rounded-full border-2 border-neutral-200 px-5 py-3 text-sm text-neutral-700 outline-none transition-colors focus:border-arex-blue"
              />
              <button
                type="submit"
                className="group flex items-center justify-center gap-2 rounded-full bg-arex-green px-6 py-3 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark"
              >
                S'abonner
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
