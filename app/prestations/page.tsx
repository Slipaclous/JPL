"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const services = [
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
    image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80",
    price: "À partir de 35€"
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
    price: "Sur devis"
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
    image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80",
    price: "75€"
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
    price: "À partir de 150€"
  }
];

export default function Prestations() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <main className="min-h-screen bg-[#EBE6E4]/10">
      {/* Header */}
      <section className="py-24 bg-[#403737]">
        <div className="max-w-6xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-light tracking-widest uppercase text-center text-[#EBE6E4]">
            Prestations
          </h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service) => (
              <motion.div
                key={service.id}
                layoutId={`card-${service.id}`}
                onClick={() => setSelectedService(service)}
                className="group cursor-pointer"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <motion.img
                    layoutId={`image-${service.id}`}
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#403737]/80 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <motion.h2
                      layoutId={`title-${service.id}`}
                      className="text-2xl font-light tracking-wider mb-2"
                    >
                      {service.title}
                    </motion.h2>
                    <motion.p
                      layoutId={`shortDesc-${service.id}`}
                      className="text-sm text-[#EBE6E4]/80"
                    >
                      {service.shortDesc}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60"
            onClick={() => setSelectedService(null)}
          >
            <motion.div
              layoutId={`card-${selectedService.id}`}
              className="relative w-full max-w-4xl bg-white overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedService(null)}
                className="absolute top-4 right-4 z-10 p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="grid md:grid-cols-2">
                <motion.div
                  layoutId={`image-${selectedService.id}`}
                  className="aspect-square md:aspect-auto relative"
                >
                  <img
                    src={selectedService.image}
                    alt={selectedService.title}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="p-8 md:p-12">
                  <motion.h2
                    layoutId={`title-${selectedService.id}`}
                    className="text-3xl font-light tracking-wider text-[#403737] mb-4"
                  >
                    {selectedService.title}
                  </motion.h2>
                  <motion.p
                    layoutId={`shortDesc-${selectedService.id}`}
                    className="text-lg text-[#403737]/70 mb-6"
                  >
                    {selectedService.shortDesc}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="prose text-[#403737]/80 whitespace-pre-line">
                      {selectedService.description}
                    </div>
                    <div className="pt-6 border-t border-[#403737]/10">
                      <p className="text-lg font-light text-[#403737]">
                        {selectedService.price}
                      </p>
                    </div>
                    <button
                      onClick={() => window.open('https://rosa.be/fr/hp/justine-leonardi/', '_blank')}
                      className="w-full px-8 py-3 bg-[#403737] text-[#EBE6E4] text-sm uppercase tracking-widest hover:bg-[#403737]/90 transition-colors"
                    >
                      Prendre rendez-vous
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}