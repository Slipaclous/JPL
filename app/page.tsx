"use client";

import { ArrowRight, Clock, MapPin, Phone, Star, Users, Footprints, Award, Calendar } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <main className="bg-[#EBE6E4]/5">
      {/* Hero Section */}
      <section className="min-h-[90vh] flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1591343395082-e120087004b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1934&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#403737]/95 to-[#403737]/80" />
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full grid md:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-[#EBE6E4] text-center md:text-left"
          >
            <h1 className="text-3xl sm:text-4xl md:text-6xl mb-4 md:mb-6 tracking-wide font-light">
              Podologue<br/>
              <span className="text-white">Justine Leonardi</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl mb-6 md:mb-8 font-light text-[#EBE6E4]/80 leading-relaxed max-w-xl mx-auto md:mx-0">
              Des soins personnalisés pour vos pieds par une professionnelle expérimentée
            </p>
            <Link 
              href="https://rosa.be/fr/hp/justine-leonardi/"
              target="_blank"
              className="inline-flex items-center px-6 sm:px-8 py-3 bg-[#EBE6E4] text-[#403737] text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 hover:shadow-lg"
            >
              Prendre RDV
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-6 text-[#403737]">
              Découvrez mes prestations
            </h2>
            <p className="text-base md:text-lg text-[#403737]/70 mb-8 max-w-2xl mx-auto">
              Des soins personnalisés adaptés à vos besoins, de la pédicurie à l'orthoplastie
            </p>
            <Link 
              href="/prestations"
              className="inline-flex items-center px-8 py-4 bg-[#403737] text-[#EBE6E4] text-base uppercase tracking-widest hover:bg-[#403737]/90 transition-all duration-300"
            >
              Voir toutes les prestations
            </Link>
          </motion.div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 md:py-24 bg-[#EBE6E4]/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-sm mx-auto"
            >
              <div className="aspect-[3/4] relative z-10 overflow-hidden">
                <img 
                  src="/img/justine.JPG"
                  alt="Justine Leonardi"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 border border-[#403737]/20 transform translate-x-4 translate-y-4 z-0" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center md:text-left"
            >
              <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase mb-6 md:mb-8 text-[#403737]">À Propos</h2>
              <p className="text-base md:text-lg font-light leading-relaxed text-[#403737]/80 mb-6 md:mb-8">
                Diplômée d'un bachelier en podologie-podothérapie en juin 2021 à la Haute Ecole Léonard de Vinci - Parnasse ISESI à Bruxelles. Je suis disponible pour vous afin d'évaluer vos besoins et de vous apporter des soins spécifiques selon votre demande.
              </p>
              <Link 
                href="/prestations"
                className="inline-flex items-center px-6 sm:px-8 py-3 bg-[#403737] text-[#EBE6E4] text-sm uppercase tracking-widest hover:bg-[#403737]/90 transition-all duration-300"
              >
                Découvrir mes prestations
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 md:py-24 bg-[#403737] text-[#EBE6E4]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-2 gap-8 md:gap-16 items-start"
          >
            <div className="space-y-8 md:space-y-12">
              <motion.div variants={fadeIn}>
                <h3 className="text-sm uppercase tracking-wider mb-3 md:mb-4 text-white/70">Horaires</h3>
                <p className="font-light text-base md:text-lg">
                  Lun-Ven: 9h-19h<br />
                  Sam: 9h-12h
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-sm uppercase tracking-wider mb-3 md:mb-4 text-white/70">Contact</h3>
                <p className="font-light text-base md:text-lg">
                  +32493938982<br />
                  leonardi.podo@gmail.com
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-sm uppercase tracking-wider mb-3 md:mb-4 text-white/70">Adresse</h3>
                <p className="font-light text-base md:text-lg">
                  Rue Docteur Colson 23, 1430 Quenast<br />
                  Chaussée de Bruxelles 475, 7850 Enghien
                </p>
              </motion.div>
            </div>
            
            <motion.div 
              variants={fadeIn}
              className="aspect-[4/3] overflow-hidden"
            >
              <img 
                src="https://images.unsplash.com/photo-1523867574998-1a336b6ded04?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                alt="Cabinet de podologie"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#403737] text-[#EBE6E4] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-sm uppercase tracking-wider mb-4 text-white/70">Cabinet de Podologie</h3>
              <p className="font-light text-sm md:text-base">
                Justine Leonardi<br />
                Podologue diplômée
              </p>
            </div>
            <div className="text-center">
              <h3 className="text-sm uppercase tracking-wider mb-4 text-white/70">Liens rapides</h3>
              <div className="space-y-2">
                <Link href="/" className="block text-sm md:text-base hover:text-white/80 transition-colors">Accueil</Link>
                <Link href="/prestations" className="block text-sm md:text-base hover:text-white/80 transition-colors">Prestations</Link>
                <Link href="https://rosa.be/fr/hp/justine-leonardi/" target="_blank" className="block text-sm md:text-base hover:text-white/80 transition-colors">Prendre RDV</Link>
              </div>
            </div>
            <div className="text-center md:text-right">
              <h3 className="text-sm uppercase tracking-wider mb-4 text-white/70">Suivez-moi</h3>
              <div className="flex justify-center md:justify-end space-x-4">
                <a href="https://www.instagram.com/justineleonardi.podo/" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base hover:text-white/80 transition-colors">
                  Instagram
                </a>
                <a href="https://www.facebook.com/profile.php?id=100063517123456" target="_blank" rel="noopener noreferrer" className="text-sm md:text-base hover:text-white/80 transition-colors">
                  Facebook
                </a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center">
            <p className="text-sm text-white/60">
              © {new Date().getFullYear()} Justine Leonardi - Tous droits réservés
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}