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

  return (
    <>
      <Navbar />
      <main className="max-w-2xl mx-auto px-6 py-20">
        <p className="text-xs font-medium tracking-widest text-[#1D9E75] uppercase mb-2">
          Travaillons ensemble
        </p>
        <h1 className="text-3xl font-medium text-gray-900 mb-2">
          Demander un devis
        </h1>
        <p className="text-sm text-gray-500 mb-10 leading-relaxed">
          Remplissez le formulaire ci-dessous et nous vous recontactons sous 24h.
        </p>

        {status === "success" ? (
          <div className="bg-[#E1F5EE] text-[#0F6E56] px-6 py-4 rounded-xl text-sm">
            ✅ Demande envoyée ! Nous vous recontactons sous 24h.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Nom complet *</label>
                <input name="name" required onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors"
                  placeholder="Jean Dupont" />
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Email *</label>
                <input name="email" type="email" required onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors"
                  placeholder="jean@exemple.com" />
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Téléphone</label>
              <input name="phone" onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors"
                placeholder="+32 / +237..." />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Service souhaité *</label>
                <select name="service" required onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors bg-white">
                  <option value="">Choisir...</option>
                  <option>Développement web</option>
                  <option>Chatbot agriculture</option>
                  <option>Chatbot football</option>
                  <option>Chatbot multi-domaine</option>
                  <option>Flyers & print</option>
                  <option>Maintenance & SEO</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Domaine *</label>
                <select name="domain" required onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors bg-white">
                  <option value="">Choisir...</option>
                  <option>Agriculture</option>
                  <option>Football</option>
                  <option>E-commerce</option>
                  <option>Communication</option>
                  <option>Autre</option>
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Budget estimé</label>
                <select name="budget" onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors bg-white">
                  <option value="">Choisir...</option>
                  <option>Moins de 500€</option>
                  <option>500€ - 1000€</option>
                  <option>1000€ - 3000€</option>
                  <option>Plus de 3000€</option>
                </select>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Délai souhaité</label>
                <select name="deadline" onChange={handleChange}
                  className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors bg-white">
                  <option value="">Choisir...</option>
                  <option>Urgent (1 mois)</option>
                  <option>2-3 mois</option>
                  <option>5-6 mois</option>
                  <option>Flexible</option>
                </select>
              </div>
            </div>

            <div>
              <label className="text-xs text-gray-500 mb-1 block">Message</label>
              <textarea name="message" onChange={handleChange} rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm outline-none focus:border-[#1D9E75] transition-colors resize-none"
                placeholder="Décrivez votre projet..." />
            </div>

            {status === "error" && (
              <p className="text-sm text-red-500">Une erreur est survenue. Réessayez.</p>
            )}

            <button type="submit" disabled={status === "loading"}
              className="bg-[#1D9E75] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#0F6E56] transition-colors disabled:opacity-50">
              {status === "loading" ? "Envoi en cours..." : "Envoyer la demande"}
            </button>
          </form>
        )}
      </main>
      <Footer />
    </>
  );
}