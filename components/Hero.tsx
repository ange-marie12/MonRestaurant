"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero() {
  const sentence = "L'excellence culinaire dans un écrin de sérénité".split("");
  const images = [
    "https://images.unsplash.com/photo-1517248135467-4c7edcb3bb2c?auto=format&fit=crop&q=80&w=2000", // Intérieur restaurant
    "https://images.unsplash.com/photo-1579782523267-b5b6028a6f3b?auto=format&fit=crop&q=80&w=2000", // Chef en action
    "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2000", // Plat signature
  ];
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 7000); // Change d'image toutes les 7 secondes
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      <AnimatePresence>
        <motion.img 
          key={currentImage}
          src={images[currentImage]} 
          alt="Ambiance de cuisine" 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 0.6, scale: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
      </AnimatePresence>
      <div className="absolute inset-0 bg-black/40 z-10" /> {/* Overlay légèrement plus clair */}
      
      <div className="relative z-20 text-center px-4">
        <motion.h1 className="text-white font-serif text-5xl md:text-7xl mb-6">
          {sentence.map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.05, delay: index * 0.04 }}
            >
              {char}
            </motion.span>
          ))}
        </motion.h1>

        <motion.button 
          whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(212, 175, 55, 0.4)" }}
          whileTap={{ scale: 0.95 }}
          className="bg-luxe-gold text-black px-10 py-4 font-bold uppercase text-xs tracking-widest transition-all"
        >
          Réserver votre table
        </motion.button>
      </div>
    </section>
  );
}