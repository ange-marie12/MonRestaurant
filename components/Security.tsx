"use client"
import React from 'react';
import { ShieldCheck, MapPin, Key } from 'lucide-react';

// Exemple d'utilisation :
<ShieldCheck className="text-luxe-gold w-6 h-6" />;
export default function Security() {
  return (
    <section id="securite" className="py-24 bg-luxe-black text-luxe-cream">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Texte Explicite */}
          <div className="space-y-8">
            <h2 className="font-serif text-4xl md:text-5xl text-luxe-gold">
              Une Localisation <br /> Preservée & Sécurisée
            </h2>
            <p className="text-gray-400 font-light leading-relaxed text-lg">
              Situé au cœur du prestigieux quartier des ambassades, notre
              établissement offre un sanctuaire de discrétion totale. Nous avons
              conçu chaque détail pour garantir la tranquillité de nos hôtes les
              plus exigeants.
            </p>

            <ul className="space-y-6">
              {[
                {
                  title: 'Service Voiturier Privé',
                  desc: 'Prise en charge sécurisée dès votre arrivée.',
                },
                {
                  title: 'Accès Confidentiel',
                  desc: 'Entrée discrète pour une intimité absolue.',
                },
                {
                  title: 'Surveillance 24/7',
                  desc: 'Technologie de pointe et présence humaine constante.',
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-luxe-gold" />
                  <div>
                    <h4 className="font-semibold text-luxe-gold uppercase tracking-widest text-sm">
                      {item.title}
                    </h4>
                    <p className="text-gray-500 text-sm">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Carte Stylisée (Placeholder élégant) */}
          <div className="relative h-[500px] bg-neutral-900 border border-luxe-gold/20 overflow-hidden group">
            <div className="absolute inset-0 opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700">
              {/* Remplace par une vraie Google Maps stylisée plus tard */}
              <img
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1000"
                alt="Map Location"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-luxe-black/80 p-6 border border-luxe-gold text-center backdrop-blur-sm">
                <p className="text-luxe-gold font-serif text-xl italic">
                  L'Éclat Culinaire
                </p>
                <p className="text-xs uppercase tracking-widest mt-2">
                  12 Avenue du Prestige, Paris
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
