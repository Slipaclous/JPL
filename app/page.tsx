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
              backgroundImage: "url('/img/Haut 1er page.jpg')",
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
            Sportifs, enfants, adultes ou seniors : des soins adaptés et personnalisés à chaque pas avec un accompagnement bienveillant.
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
      <section className="py-16 md:py-24 bg-white section-divider">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h2 className="text-2xl md:text-3xl font-light tracking-wider mb-6 text-[#403737] flex items-center justify-center heading-accent">
              <Footprints className="h-8 w-8 mr-3" />
              Découvrez mes prestations
            </h2>
            <p className="text-base md:text-lg text-[#403737]/70 mb-8 max-w-2xl mx-auto">
              Des soins personnalisés adaptés à vos besoins,des soins au semelles
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
      <section className="py-16 md:py-24 bg-[#EBE6E4]/10 section-divider">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-sm mx-auto"
            >
              <div className="aspect-[3/4] relative z-10 overflow-hidden image-hover">
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
              <h2 className="text-xl md:text-2xl font-light tracking-widest uppercase mb-6 md:mb-8 text-[#403737] flex items-center justify-center md:justify-start heading-accent">
                <Star className="h-6 w-6 mr-2" />
                À Propos
              </h2>
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

      {/* Section Rendez-vous */}
      <section className="py-16 md:py-24 bg-[#EBE6E4] text-[#403737]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="relative"
          >
            <div className="bg-white rounded-lg shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                {/* Côté gauche - Carte */}
                <div className="relative h-full min-h-[400px] md:min-h-0">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2524.827933344744!2d4.159999!3d50.672222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c38c275324d7%3A0x0!2sRue%20Docteur%20Colson%2023%2C%201430%20Quenast!5e0!3m2!1sfr!2sbe!4v1647887654321!5m2!1sfr!2sbe&zoom=12"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>

                {/* Côté droit - Formulaire de prise de RDV */}
                <div className="p-8 md:p-12 bg-white">
                  <motion.div variants={fadeIn} className="space-y-6">
                    <h3 className="text-xl font-light tracking-wider text-[#403737]">
                      Réservez votre consultation
                    </h3>
                    <p className="text-[#403737]/70">
                      Choisissez votre créneau et je vous confirmerai votre rendez-vous dans les plus brefs délais.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center space-x-3 text-[#403737]/80">
                        <Calendar className="h-5 w-5" />
                        <span>Consultations du lundi au samedi</span>
                      </div>
                      <div className="flex items-center space-x-3 text-[#403737]/80">
                        <Clock className="h-5 w-5" />
                        <span>Durée moyenne : 30-45 minutes</span>
                      </div>
                    </div>
                    <Link 
                      href="https://rosa.be/fr/hp/justine-leonardi/"
                      target="_blank"
                      className="inline-flex items-center w-full justify-center px-6 py-4 bg-[#403737] text-white text-sm uppercase tracking-widest hover:bg-[#403737]/90 transition-all duration-300 hover:shadow-lg group"
                    >
                      Prendre rendez-vous en ligne
                      <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                    </Link>
                    <p className="text-sm text-[#403737]/60 text-center">
                      Ou contactez-moi directement au +32493938982
                    </p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}