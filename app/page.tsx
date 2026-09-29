// src/app/page.tsx
'use client';
import Hero from '../components/Hero';
import MenuPreview from '../components/MenuPreview';
import Gallery from '../components/Gallery'; // Nouveau !
import Security from '../components/Security';

/**
 * PAGE D'ACCUEIL PRINCIPALE
 * Cette page assemble les composants stratégiques pour un restaurant de luxe.
 * L'ordre respecte la psychologie du client : Admirer -> Désirer -> Être rassuré.
 */
export default function Home() {
  return (
    <main className="relative bg-luxe-black min-h-screen">
      {/* 1. L'IMPACT VISUEL : Première impression et identité */}
      <Hero />

      {/* 2. L'EXCELLENCE CULINAIRE : Aperçu des mets d'exception */}
      <MenuPreview />

      {/* 3. CONFIANCE & LOCALISATION : Sécurité et accès exclusif */}
      <Gallery />

      {/* On l'insère ici pour couper le rythme entre le menu et la sécurité */}
      <Security />

      {/* 4. BANDEAU DE RÉASSURANCE : Informations pratiques rapides */}
      <section className="py-16 bg-black flex flex-col items-center justify-center border-t border-luxe-gold/10">
        <div className="mb-8">
          <div className="h-px w-20 bg-luxe-gold/30 mx-auto mb-6"></div>
          <p className="text-luxe-gold/80 text-[10px] md:text-xs uppercase tracking-[0.5em] text-center px-4">
            Expérience Gastronomique • Discrétion Absolue • Service de Classe
            Mondiale
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 text-center text-sm font-light text-gray-400">
          <div>
            <span className="block text-luxe-gold uppercase tracking-widest text-[10px] mb-1">
              Horaires
            </span>
            Mardi — Samedi : 19h00 - 23h30
          </div>
          <div className="hidden md:block w-px h-10 bg-white/10"></div>
          <div>
            <span className="block text-luxe-gold uppercase tracking-widest text-[10px] mb-1">
              Contact
            </span>
            +33 1 23 45 67 89 • contact@leclat-restaurant.com
          </div>
        </div>
      </section>

      {/* BOUTON FLOTTANT MOBILE : Pour réserver à tout moment (Responsive) */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:hidden w-[90%]">
        <button className="w-full bg-luxe-gold text-black py-4 uppercase font-bold tracking-widest text-xs shadow-2xl active:scale-95 transition-transform">
          Réserver une Table
        </button>
      </div>
    </main>
  );
}
