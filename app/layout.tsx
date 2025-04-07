// app/layout.tsx - Fichier layout principal (Server Component)
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Footprints, Calendar, Phone, Mail, MapPin, Clock } from 'lucide-react';
import Link from 'next/link';
import Navigation from '../components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cabinet de Podologie - Dr. Marie Martin',
  description: 'Cabinet de podologie à Paris - Soins et semelles orthopédiques par Dr. Marie Martin',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <header className="border-b sticky top-0 bg-background/95 backdrop-blur-sm z-50">
          <Navigation />
        </header>
        
        {children}
        
        <footer className="bg-primary text-white pt-16 pb-8">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12">
              <div>
                <div className="flex items-center space-x-2 mb-6">
                  <Footprints className="h-8 w-8" />
                  <span className="text-xl font-semibold">Justine Leonardi</span>
                </div>
                <p className="text-white/80">
                  Cabinet de podologie spécialisé dans les soins des pieds et la conception de semelles orthopédiques sur mesure.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  Adresse
                </h3>
                <address className="text-white/80 not-italic">
                <p className="">Rue Docteur Colson 23, 1430 Quenast</p>
                <p className="">Chaussée de Bruxelles 475, 7850 Enghien</p>
                </address>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4 flex items-center">
                  <Clock className="h-5 w-5 mr-2" />
                  Horaires
                </h3>
                <div className="space-y-2 text-white/80">
                  <p>Lundi - Vendredi : 9h-19h</p>
                  <p>Samedi : 9h-12h</p>
                  <p>Dimanche : Fermé</p>
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-4">Contact</h3>
                <div className="space-y-4">
                  <a href="tel:+32493938982" className="footer-link text-white/80 flex items-center hover:text-white">
                    <Phone className="h-5 w-5 mr-2" />
                    +32493938982
                  </a>
                  <a href="mailto:leonardi.podo@gmail.com" className="footer-link text-white/80 flex items-center hover:text-white">
                    <Mail className="h-5 w-5 mr-2" />
                    leonardi.podo@gmail.com
                  </a>
                  <Link 
                    href="https://rosa.be/fr/hp/justine-leonardi/"
                    target="_blank"
                    className="btn-secondary bg-white/10 border-white hover:bg-white/20 text-white"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Prendre RDV en ligne
                  </Link>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/60">
              <p>© {new Date().getFullYear()} Cabinet de Podologie Dr. Marie Martin. Tous droits réservés.</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}