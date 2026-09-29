// src/app/layout.tsx
import './globals.css';
import Navbar from '../components/Navbar'; // Assure-toi que le chemin est bon

export const metadata = {
  title: "L'Éclat | Gastronomie & Sérénité",
  description: 'Restaurant de luxe sécurisé au cœur de la ville',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
