import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white mt-20">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-wrap items-center justify-between gap-4">
        <div className="text-base font-medium text-gray-900">
          Zaro<span className="text-[#1D9E75]">Tech</span>
        </div>
        <p className="text-sm text-gray-400">
          © 2025 Zaro Tech — Bruxelles · Yaoundé
        </p>
        <div className="flex gap-6 text-sm text-gray-400">
          <Link href="/legal" className="hover:text-gray-700">Mentions légales</Link>
          <Link href="/privacy" className="hover:text-gray-700">Confidentialité</Link>
          <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">WhatsApp</a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-700">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}