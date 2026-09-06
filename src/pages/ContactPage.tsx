import { useState, type FormEvent } from 'react';
import { Send, CheckCircle2, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Reveal from '@/components/Reveal';
import { contactInfo, socialLinks } from '@/data/content';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactItems = [
    { icon: MapPin, label: 'Adresse', value: '42 Avenue de l\'Innovation, 75008 Paris, France' },
    { icon: Phone, label: 'Téléphone', value: '+33 1 42 00 00 00' },
    { icon: Mail, label: 'Email', value: 'contact@arex.com' },
    { icon: Clock, label: 'Horaires', value: 'Lun – Ven : 8h00 – 18h00' },
  ];

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
              <span className="text-sm font-semibold uppercase tracking-widest text-arex-green">Contact</span>
              <span className="h-px w-8 bg-arex-green" />
            </div>
            <h1 className="font-display text-4xl font-extrabold leading-tight text-arex-blue sm:text-5xl lg:text-6xl">
              Parlons de votre projet
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-neutral-500">
              Une question, un besoin, une idée ? Notre équipe vous répond sous 48 heures avec une proposition sur mesure.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="bg-white py-20 lg:py-28">
        <div className="mx-auto max-w-8xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-5">
            {/* Form */}
            <div className="lg:col-span-3">
              <Reveal variant="left">
                <div className="rounded-2xl bg-white p-8 shadow-card lg:p-10">
                  {submitted ? (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <div className="mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-arex-green-50">
                        <CheckCircle2 className="h-10 w-10 text-arex-green" />
                      </div>
                      <h3 className="text-2xl font-bold text-arex-blue">Message envoyé !</h3>
                      <p className="mt-3 max-w-md text-base text-neutral-500">
                        Merci pour votre message. Notre équipe vous répondra sous 48 heures.
                      </p>
                      <button
                        onClick={() => {
                          setSubmitted(false);
                          setForm({ name: '', email: '', subject: '', message: '' });
                        }}
                        className="mt-8 rounded-full border-2 border-arex-blue-100 px-6 py-3 text-sm font-semibold text-arex-blue transition-all duration-300 hover:border-arex-blue hover:bg-arex-blue-50"
                      >
                        Envoyer un autre message
                      </button>
                    </div>
                  ) : (
                    <>
                      <h2 className="text-2xl font-bold text-arex-blue">Envoyez-nous un message</h2>
                      <p className="mt-2 text-sm text-neutral-500">
                        Remplissez le formulaire ci-dessous, nous reviendrons vers vous rapidement.
                      </p>
                      <form onSubmit={handleSubmit} className="mt-8 space-y-5">
                        <div className="grid gap-5 sm:grid-cols-2">
                          <div>
                            <label className="mb-2 block text-sm font-semibold text-neutral-700">
                              Nom complet *
                            </label>
                            <input
                              type="text"
                              required
                              value={form.name}
                              onChange={(e) => setForm({ ...form, name: e.target.value })}
                              placeholder="Jean Dupont"
                              className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition-colors focus:border-arex-blue"
                            />
                          </div>
                          <div>
                            <label className="mb-2 block text-sm font-semibold text-neutral-700">
                              Email *
                            </label>
                            <input
                              type="email"
                              required
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              placeholder="jean.dupont@entreprise.com"
                              className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition-colors focus:border-arex-blue"
                            />
                          </div>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-neutral-700">
                            Sujet
                          </label>
                          <input
                            type="text"
                            value={form.subject}
                            onChange={(e) => setForm({ ...form, subject: e.target.value })}
                            placeholder="Demande de devis, partenariat..."
                            className="w-full rounded-xl border-2 border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition-colors focus:border-arex-blue"
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-neutral-700">
                            Message *
                          </label>
                          <textarea
                            required
                            rows={5}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            placeholder="Décrivez votre projet ou votre demande..."
                            className="w-full resize-none rounded-xl border-2 border-neutral-200 px-4 py-3 text-sm text-neutral-700 outline-none transition-colors focus:border-arex-blue"
                          />
                        </div>
                        <button
                          type="submit"
                          className="group flex w-full items-center justify-center gap-2 rounded-full bg-arex-green px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-all duration-300 hover:bg-arex-green-dark hover:shadow-green-glow sm:w-auto"
                        >
                          <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                          Envoyer le message
                        </button>
                      </form>
                    </>
                  )}
                </div>
              </Reveal>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <Reveal variant="right">
                <div className="space-y-4">
                  {contactItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex items-start gap-4 rounded-2xl bg-neutral-50 p-6 transition-shadow duration-300 hover:shadow-card"
                    >
                      <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl bg-arex-blue-50">
                        <item.icon className="h-6 w-6 text-arex-blue" />
                      </div>
                      <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-neutral-400">{item.label}</h3>
                        <p className="mt-1 text-base font-medium text-arex-blue">{item.value}</p>
                      </div>
                    </div>
                  ))}

                  {/* Map placeholder */}
                  <div className="overflow-hidden rounded-2xl shadow-card">
                    <div className="relative h-48 bg-gradient-to-br from-arex-blue to-arex-blue-dark">
                      <div className="absolute inset-0 bg-grid opacity-20" />
                      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div className="relative">
                          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
                            <MapPin className="h-8 w-8 text-white" />
                          </div>
                          <div className="absolute -inset-2 animate-pulse-ring rounded-full border-2 border-white/30" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-sm font-semibold text-white">42 Avenue de l'Innovation</p>
                        <p className="text-xs text-arex-blue-100">75008 Paris, France</p>
                      </div>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="rounded-2xl bg-arex-blue p-6">
                    <h3 className="text-sm font-bold uppercase tracking-wider text-arex-blue-100">Suivez-nous</h3>
                    <div className="mt-4 flex gap-3">
                      {socialLinks.map((social) => (
                        <a
                          key={social.label}
                          href={social.href}
                          aria-label={social.label}
                          className="flex h-11 w-11 items-center justify-center rounded-lg bg-white/10 text-white transition-all duration-300 hover:bg-arex-green"
                        >
                          <social.icon className="h-5 w-5" />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Teaser */}
      <section className="bg-neutral-50 py-20">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <Reveal variant="scale">
            <h2 className="text-3xl font-bold text-arex-blue sm:text-4xl">
              Une question fréquente ?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-500">
              Consultez notre FAQ ou contactez-nous directement. Notre équipe est là pour vous aider.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                { q: 'Quels sont vos délais de réponse ?', a: 'Nous répondons à toutes les demandes sous 48 heures ouvrées.' },
                { q: 'Proposez-vous des services à l\'international ?', a: 'Oui, nous opérons dans 40 pays avec un réseau de partenaires locaux.' },
                { q: 'Quels secteurs accompagnez-vous ?', a: 'Énergie, industrie, data center, infrastructures urbaines et plus encore.' },
                { q: 'Comment se déroule le premier contact ?', a: 'Un échange téléphonique ou visio pour comprendre vos besoins, suivi d\'une proposition.' },
              ].map((faq) => (
                <div key={faq.q} className="rounded-xl bg-white p-6 text-left shadow-soft transition-shadow duration-300 hover:shadow-card">
                  <h3 className="text-sm font-bold text-arex-blue">{faq.q}</h3>
                  <p className="mt-2 text-sm text-neutral-500">{faq.a}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
