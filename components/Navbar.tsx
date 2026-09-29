// src/components/Navbar.tsx
'use client';

import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 flex justify-between items-center px-8 py-6 bg-black/80 backdrop-blur-md border-b border-[#D4AF37]/20">
      <div className="text-[#D4AF37] font-serif text-2xl tracking-widest uppercase cursor-pointer">
        L'Éclat
      </div>

      <div className="hidden md:flex space-x-8 text-[#F5F5F0] font-light tracking-wide uppercase text-[10px]">
        <a href="#menu" className="hover:text-[#D4AF37] transition">
          La Carte
        </a>
        <a href="#securite" className="hover:text-[#D4AF37] transition">
          Sécurité
        </a>
        <a href="#" className="hover:text-[#D4AF37] transition">
          Accès
        </a>
      </div>

      <button className="bg-[#D4AF37] text-black px-5 py-2 font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-white transition-all">
        Réserver
      </button>
    </nav>
  );
}
