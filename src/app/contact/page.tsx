"use client";
import { useState } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "",
    service: "", domain: "", budget: "",
    deadline: "", message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) setStatus("success");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  };

  // Classes réutilisables pour les inputs
  const inputBase = "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-white/40 outline-none transition-all backdrop-blur-sm focus:border-[#00ff9f] focus:bg-[#00ff9f]/5 focus:ring-4 focus:ring-[#00ff9f]/10";
  const inputWithIcon = `${inputBase} pl-11`;
  const labelClass = "block text-sm font-medium text-gray-300 mb-2";

  return (
    <>
      <Navbar />
      <main className="relative min-h-screen overflow-hidden py-20 px-6 bg-[#050709]">
        {/* Image de fond */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/contact-bg.jpg')" }}
        />

        {/* Overlay sombre pour garder la lisibilité */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(10,15,20,0.80) 0%, rgba(10,15,20,0.90) 100%)",
          }}
        />

        {/* Halos néon */}
        <div className="absolute top-0 -left-40 w-96 h-96 bg-[#00ff9f] opacity-15 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 -right-40 w-96 h-96 bg-[#1D9E75] opacity-25 blur-[120px] rounded-full pointer-events-none" />

        <div className="relative max-w-3xl mx-auto">
          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full border border-[#00ff9f]/30 bg-[#00ff9f]/10 backdrop-blur-sm">
              <span
                className="w-2 h-2 rounded-full bg-[#00ff9f] animate-pulse"
                style={{ boxShadow: "0 0 10px #00ff9f" }}
              />
              <p className="text-xs font-medium tracking-widest text-[#00ff9f] uppercase">
                Travaillons ensemble
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold text-white mb-4">
              Demander un{" "}
              <span className="bg-gradient-to-r from-[#00ff9f] to-[#1D9E75] bg-clip-text text-transparent">
                devis
              </span>
            </h1>
            <p className="text-gray-300 text-base md:text-lg max-w-xl mx-auto">
              Remplissez le formulaire ci-dessous et nous vous recontactons sous 24h.
            </p>
          </div>

          {/* MESSAGE DE SUCCÈS */}
          {status === "success" ? (
            <div
              className="relative p-8 md:p-10 rounded-2xl backdrop-blur-xl text-center"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,255,159,0.15) 0%, rgba(20,30,40,0.8) 50%, rgba(29,158,117,0.1) 100%)",
                border: "1px solid rgba(0,255,159,0.3)",
                boxShadow: "0 25px 50px -12px rgba(0,255,159,0.2)",
              }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#00ff9f]/20 border border-[#00ff9f] flex items-center justify-center">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00ff9f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3">
                Demande envoyée !
              </h2>
              <p className="text-gray-300 text-base mb-2">
                Merci pour votre confiance.
              </p>
              <p className="text-gray-400 text-sm">
                Nous vous recontactons sous <span className="text-[#00ff9f] font-semibold">24h</span>.
              </p>
            </div>
          ) : (
            /* FORMULAIRE GLASSMORPHISM */
            <div
              className="relative p-8 md:p-10 rounded-2xl backdrop-blur-xl"
              style={{
                background: "rgba(20, 30, 40, 0.6)",
                border: "1px solid rgba(255, 255, 255, 0.1)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
              }}
            >
              {/* Glow décoratif */}
              <div
                className="absolute inset-0 rounded-2xl pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,255,159,0.05) 0%, transparent 50%, rgba(29,158,117,0.05) 100%)",
                }}
              />

              <form onSubmit={handleSubmit} className="relative flex flex-col gap-5">
                {/* Nom + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      Nom complet <span className="text-[#00ff9f]">*</span>
                    </label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9f]/60 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                      <input
                        name="name"
                        required
                        onChange={handleChange}
                        className={inputWithIcon}
                        placeholder="Jean Dupont"
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Email <span className="text-[#00ff9f]">*</span>
                    </label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9f]/60 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <polyline points="22,6 12,13 2,6" />
                      </svg>
                      <input
                        name="email"
                        type="email"
                        required
                        onChange={handleChange}
                        className={inputWithIcon}
                        placeholder="jean@exemple.com"
                      />
                    </div>
                  </div>
                </div>

                {/* Téléphone */}
                <div>
                  <label className={labelClass}>Téléphone</label>
                  <div className="relative">
                    <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9f]/60 pointer-events-none" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                    </svg>
                    <input
                      name="phone"
                      onChange={handleChange}
                      className={inputWithIcon}
                      placeholder="+32 / +237..."
                    />
                  </div>
                </div>

                {/* Service + Domaine */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>
                      Service souhaité <span className="text-[#00ff9f]">*</span>
                    </label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9f]/60 pointer-events-none z-10" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                      <select
                        name="service"
                        required
                        onChange={handleChange}
                        className={`${inputWithIcon} appearance-none cursor-pointer pr-10`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2300ff9f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                      >
                        <option value="" className="bg-[#0a0f14]">Choisir...</option>
                        <option className="bg-[#0a0f14]">Développement web</option>
                        <option className="bg-[#0a0f14]">Chatbot agriculture</option>
                        <option className="bg-[#0a0f14]">Chatbot football</option>
                        <option className="bg-[#0a0f14]">Chatbot multi-domaine</option>
                        <option className="bg-[#0a0f14]">Flyers & print</option>
                        <option className="bg-[#0a0f14]">Analyse de données</option>
                        <option className="bg-[#0a0f14]">Maintenance & SEO</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>
                      Domaine <span className="text-[#00ff9f]">*</span>
                    </label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9f]/60 pointer-events-none z-10" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="2" y1="12" x2="22" y2="12" />
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                      </svg>
                      <select
                        name="domain"
                        required
                        onChange={handleChange}
                        className={`${inputWithIcon} appearance-none cursor-pointer pr-10`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2300ff9f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                      >
                        <option value="" className="bg-[#0a0f14]">Choisir...</option>
                        <option className="bg-[#0a0f14]">Agriculture</option>
                        <option className="bg-[#0a0f14]">Football</option>
                        <option className="bg-[#0a0f14]">E-commerce</option>
                        <option className="bg-[#0a0f14]">Communication</option>
                        <option className="bg-[#0a0f14]">Autre</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Budget + Délai */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className={labelClass}>Budget estimé</label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9f]/60 pointer-events-none z-10" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="12" y1="1" x2="12" y2="23" />
                        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                      <select
                        name="budget"
                        onChange={handleChange}
                        className={`${inputWithIcon} appearance-none cursor-pointer pr-10`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2300ff9f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                      >
                        <option value="" className="bg-[#0a0f14]">Choisir...</option>
                        <option className="bg-[#0a0f14]">Moins de 500€</option>
                        <option className="bg-[#0a0f14]">500€ - 1000€</option>
                        <option className="bg-[#0a0f14]">1000€ - 3000€</option>
                        <option className="bg-[#0a0f14]">Plus de 3000€</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Délai souhaité</label>
                    <div className="relative">
                      <svg className="absolute left-4 top-1/2 -translate-y-1/2 text-[#00ff9f]/60 pointer-events-none z-10" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <polyline points="12 6 12 12 16 14" />
                      </svg>
                      <select
                        name="deadline"
                        onChange={handleChange}
                        className={`${inputWithIcon} appearance-none cursor-pointer pr-10`}
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='14' height='14' viewBox='0 0 24 24' fill='none' stroke='%2300ff9f' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                          backgroundRepeat: "no-repeat",
                          backgroundPosition: "right 16px center",
                        }}
                      >
                        <option value="" className="bg-[#0a0f14]">Choisir...</option>
                        <option className="bg-[#0a0f14]">Urgent (1 mois)</option>
                        <option className="bg-[#0a0f14]">2-3 mois</option>
                        <option className="bg-[#0a0f14]">5-6 mois</option>
                        <option className="bg-[#0a0f14]">Flexible</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className={labelClass}>Message</label>
                  <textarea
                    name="message"
                    onChange={handleChange}
                    rows={4}
                    className={`${inputBase} resize-none`}
                    placeholder="Décrivez votre projet..."
                  />
                </div>

                {/* Erreur */}
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/30 text-red-300 px-4 py-3 rounded-xl text-sm flex items-center gap-2">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <line x1="12" y1="8" x2="12" y2="12" />
                      <line x1="12" y1="16" x2="12.01" y2="16" />
                    </svg>
                    Une erreur est survenue. Réessayez.
                  </div>
                )}

                {/* Bouton submit */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="group relative bg-gradient-to-r from-[#00ff9f] to-[#1D9E75] text-black px-6 py-4 rounded-xl text-sm font-semibold hover:from-[#00e68f] hover:to-[#0F6E56] transition-all disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
                  style={{ boxShadow: "0 0 30px rgba(0,255,159,0.4)" }}
                >
                  <span className="relative z-10">
                    {status === "loading" ? (
                      <span className="flex items-center justify-center gap-2">
                        <svg className="animate-spin" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <line x1="12" y1="2" x2="12" y2="6" />
                          <line x1="12" y1="18" x2="12" y2="22" />
                          <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
                          <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
                          <line x1="2" y1="12" x2="6" y2="12" />
                          <line x1="18" y1="12" x2="22" y2="12" />
                          <line x1="4.93" y1="19.07" x2="7.76" y2="16.24" />
                          <line x1="16.24" y1="7.76" x2="19.07" y2="4.93" />
                        </svg>
                        Envoi en cours...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        🚀 Envoyer la demande
                        <span className="transition-transform group-hover:translate-x-1">→</span>
                      </span>
                    )}
                  </span>
                </button>

                <p className="text-center text-xs text-gray-400 mt-2">
                  🔒 Vos informations sont sécurisées et ne seront jamais partagées.
                </p>
              </form>
            </div>
          )}

          {/* Cartes rassurantes en bas */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
            <div className="text-center p-5 rounded-xl backdrop-blur-md border border-white/10 bg-white/5">
              <div className="text-2xl mb-2">⚡</div>
              <p className="text-sm text-white font-medium">Réponse en 24h</p>
              <p className="text-xs text-gray-400 mt-1">Garantie</p>
            </div>
            <div className="text-center p-5 rounded-xl backdrop-blur-md border border-white/10 bg-white/5">
              <div className="text-2xl mb-2">💬</div>
              <p className="text-sm text-white font-medium">Devis gratuit</p>
              <p className="text-xs text-gray-400 mt-1">Sans engagement</p>
            </div>
            <div className="text-center p-5 rounded-xl backdrop-blur-md border border-white/10 bg-white/5">
              <div className="text-2xl mb-2">🌍</div>
              <p className="text-sm text-white font-medium">BE & CM</p>
              <p className="text-xs text-gray-400 mt-1">Bruxelles ↔ Yaoundé</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}