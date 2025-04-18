"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string;
  image: string;
  price: string;
  detailedDescription: string;
}

const services: Service[] = [
  {
    id: 'soin-pieds',
    title: "Soin des pieds",
    shortDesc: "Soins classiques et spécifiques",
    description: `Notre gamme complète de soins des pieds comprend :
    • Soin classique
    • Traitement des ongles incarnés
    • Traitement des verrues
    • Traitement des mycoses
    • Soin des cors
    • Soins spécifiques pour diabétiques
    • Service de soins à domicile`,
    image: "/img/Soin des pieds.jpg",
    price: "À partir de 35€",
    detailedDescription: `Notre gamme complète de soins des pieds comprend :
    • Soin classique
    • Traitement des ongles incarnés
    • Traitement des verrues
    • Traitement des mycoses
    • Soin des cors
    • Soins spécifiques pour diabétiques
    • Service de soins à domicile`
  },
  {
    id: 'orthoplastie',
    title: "Orthoplastie",
    shortDesc: "Correction et protection des orteils",
    description: `Nos services d'orthoplastie incluent :
    • Orthoplastie sur mesure
    • Orthonyxie pour les ongles déformés
    • Onychoplastie pour la reconstruction d'ongles
    • Protection des zones de friction
    • Solutions pour les déformations des orteils`,
    image: "https://images.unsplash.com/photo-1508387027939-27cccde53673?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    price: "Sur devis",
    detailedDescription: `Nos services d'orthoplastie incluent :
    • Orthoplastie sur mesure
    • Orthonyxie pour les ongles déformés
    • Onychoplastie pour la reconstruction d'ongles
    • Protection des zones de friction
    • Solutions pour les déformations des orteils`
  },
  {
    id: 'analyse-biomecanique',
    title: "Analyse biomécanique",
    shortDesc: "Étude complète de la marche",
    description: `Notre analyse biomécanique comprend :
    • Analyse complète de la marche
    • Étude de la course
    • Analyse de la statique
    • Évaluation posturale
    • Recommandations personnalisées
    • Suivi et ajustements`,
    image: "/img/analyse_biomecanique.jpg",
    price: "75€",
    detailedDescription: `Notre analyse biomécanique comprend :
    • Analyse complète de la marche
    • Étude de la course
    • Analyse de la statique
    • Évaluation posturale
    • Recommandations personnalisées
    • Suivi et ajustements`
  },
  {
    id: 'semelles',
    title: "Semelles podologiques",
    shortDesc: "Semelles personnalisées 3D",
    description: `Nos semelles orthopédiques sur mesure :
    • Conception assistée par ordinateur
    • Fabrication en usinage 3D
    • Adaptées à vos besoins spécifiques
    • Suivi et ajustements
    • Compatible avec la plupart des chaussures
    • Garantie de confort`,
    image: "https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&q=80",
    price: "À partir de 150€",
    detailedDescription: `Nos semelles orthopédiques sur mesure :
    • Conception assistée par ordinateur
    • Fabrication en usinage 3D
    • Adaptées à vos besoins spécifiques
    • Suivi et ajustements
    • Compatible avec la plupart des chaussures
    • Garantie de confort`
  }
];

export default function Prestations() {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <main className="min-h-screen bg-[#EBE6E4]/10">
      {/* Header */}
      <section className="py-16 md:py-24 bg-[#403737]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-widest uppercase text-center text-[#EBE6E4]">
            Prestations
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 md:gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                layoutId={`card-${service.id}`}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer relative"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img
                    layoutId={`image-${service.id}`}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#403737]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 text-white">
                    <motion.h2
                      layoutId={`title-${service.id}`}
                      className="text-xl md:text-2xl font-light tracking-wider mb-2"
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`shortDesc-${service.id}`}
                      className="text-sm md:text-base text-[#EBE6E4]/80"
                    >
                      {service.shortDesc}
                    </motion.p>
                  </div>
                  {/* Indicateur de cliquabilité */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <ArrowRight className="w-8 h-8 text-white" />
                  </div>
                  {/* Indicateur pour mobile */}
                  <div className="absolute top-4 right-4 md:hidden">
                    <ArrowRight className="w-8 h-8 text-white/80" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal */}
      {selectedService && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
          onClick={() => setSelectedService(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="relative w-full max-w-4xl bg-white rounded-lg overflow-hidden"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedService(null)}
              className="absolute top-4 right-4 z-10 text-[#403737] hover:text-[#403737]/80 transition-colors"
            >
              <X size={24} />
            </button>
            
            <div className="grid md:grid-cols-2">
              <div className="aspect-[4/3] md:aspect-auto md:h-full">
                <img 
                  src={selectedService.image}
                  alt={selectedService.title}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6 md:p-8 space-y-6">
                <h3 className="text-xl md:text-2xl font-light tracking-wider text-[#403737]">
                  {selectedService.title}
                </h3>
                <p className="text-base md:text-lg text-[#403737]/70">
                  {selectedService.shortDesc}
                </p>
                <div className="space-y-4">
                  <p className="text-sm md:text-base text-[#403737]/60 whitespace-pre-line">
                    {selectedService.detailedDescription}
                  </p>
                  <p className="text-base md:text-lg font-light text-[#403737]">
                    À partir de {selectedService.price}
                  </p>
                </div>
                <Link 
                  href="https://rosa.be/fr/hp/justine-leonardi/"
                  target="_blank"
                  className="inline-flex items-center px-6 sm:px-8 py-3 bg-[#403737] text-[#EBE6E4] text-sm uppercase tracking-widest hover:bg-[#403737]/90 transition-all duration-300"
                >
                  Prendre RDV
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </main>
  );
}