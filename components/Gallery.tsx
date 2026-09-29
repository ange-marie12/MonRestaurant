'use client';
import { motion } from 'framer-motion';

export default function Gallery() {
  const images = [
    'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=600', // Verres en cristal
    'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=600', // Dressage de précision
    'https://images.unsplash.com/photo-1550966841-3ee322878744?q=80&w=600', // Ambiance tamisée
    'https://images.unsplash.com/photo-1560624052-449f5ddf0c31?q=80&w=600', // Cave à vin
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=600', // Dessert haute couture
    'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?q=80&w=600', // Champagne
    'https://images.unsplash.com/photo-1534080564607-da301297e68c?q=80&w=600', // Détail d'assiette
    'https://images.unsplash.com/photo-1614271952870-69279093836d?q=80&w=600', // Le Chef
  ];

  return (
    <section className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-luxe-gold font-serif text-4xl mb-4">
            Instants d'Exception
          </h2>
          <p className="text-gray-500 font-light tracking-widest text-xs uppercase">
            Immersion dans notre univers
          </p>
        </div>

        {/* Grille Mosaïque */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative aspect-square overflow-hidden group border border-luxe-gold/5"
            >
              <img
                src={img}
                alt={`Galerie ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale-[30%] group-hover:grayscale-0"
              />
              {/* Overlay au survol */}
              <div className="absolute inset-0 bg-luxe-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
