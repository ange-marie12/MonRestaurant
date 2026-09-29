'use client';
import { motion } from 'framer-motion';

export default function MenuPreview() {
  const sections = [
    {
      title: 'Les Entrées',
      items: [
        {
          name: 'Carpaccio de Langoustines',
          price: '55€',
          img: 'https://images.unsplash.com/photo-1550920405-b0163351d382?auto=format&fit=crop&q=80&w=400',
        },
        {
          name: 'Caviar Oscietra Royal',
          price: '150€',
          img: 'https://images.unsplash.com/photo-1628178877583-04e4c3d4a034?auto=format&fit=crop&q=80&w=400',
        },
      ],
    },
    {
      title: 'Les Plats Principaux',
      items: [
        {
          name: 'Homard Bleu de Bretagne',
          price: '85€',
          img: 'https://images.unsplash.com/photo-1603333388196-83fa4c577adc?auto=format&fit=crop&q=80&w=400',
        },
        {
          name: 'Filet de Veau Rossini',
          price: '78€',
          img: 'https://images.unsplash.com/photo-1546069901-ba959f9c6d48?auto=format&fit=crop&q=80&w=400',
        },
        {
          name: 'Volaille de Bresse Truffée',
          price: '80€',
          img: 'https://images.unsplash.com/photo-1519708227418-c8fd9a32e156?auto=format&fit=crop&q=80&w=400',
        },
      ],
    },
    {
      title: 'Les Desserts',
      items: [
        {
          name: 'Sphère Chocolat Grand Cru',
          price: '30€',
          img: 'https://images.unsplash.com/photo-1616212133469-58b438210350?auto=format&fit=crop&q=80&w=400',
        },
        {
          name: 'Tarte Tatin Destructurée',
          price: '28€',
          img: 'https://images.unsplash.com/photo-1606132912423-145455850e04?auto=format&fit=crop&q=80&w=400',
        },
      ],
    },
  ];

  return (
    <section id="menu" className="py-24 bg-luxe-black">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-luxe-gold text-center font-serif text-5xl mb-16">
          Notre Art Culinaire
        </h2>

        {sections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <h3 className="text-white font-serif text-3xl mb-10 border-b border-luxe-gold/30 pb-4 text-center md:text-left">
              {section.title}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.items.map((item, itemIndex) => (
                <motion.div
                  key={itemIndex}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: itemIndex * 0.1 }}
                  className="group relative overflow-hidden bg-neutral-900 border border-luxe-gold/10 hover:shadow-xl hover:shadow-luxe-gold/10 transition-all duration-500"
                >
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="p-5">
                    <div className="flex justify-between items-center text-white mb-2">
                      <h4 className="font-serif text-xl">{item.name}</h4>
                      <span className="text-luxe-gold text-lg">
                        {item.price}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-20">
          <motion.button
            whileHover={{
              scale: 1.05,
              boxShadow: '0px 0px 15px rgba(212, 175, 55, 0.3)',
            }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-4 border border-luxe-gold text-luxe-gold hover:bg-luxe-gold hover:text-black transition-all duration-500 uppercase text-xs tracking-widest"
          >
            Découvrir la carte complète
          </motion.button>
        </div>
      </div>
    </section>
  );
}
