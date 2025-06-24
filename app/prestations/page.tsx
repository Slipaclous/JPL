"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface Service {
  id: string;
  title: string;
  shortDesc: string;
  description: string[];
  image: string;
  price: string;
  detailedDescription: string[];
}

const services: Service[] = [
  {
    id: 'soin-pieds',
    title: "Soin des pieds",
    shortDesc: "Soins classiques et spécifiques",
    description: [
      "Soin classique",
      "Traitement des ongles incarnés",
      "Traitement des verrues",
      "Traitement des mycoses",
      "Traitement des cors",
      "Soins pour diabétique",
      "Soins à domicile"
    ],
    image: "/img/Soin des pieds.jpg",
    price: "",
    detailedDescription: [
      "Soin classique",
      "Traitement des ongles incarnés",
      "Traitement des verrues",
      "Traitement des mycoses",
      "Traitement des cors",
      "Soins pour diabétique",
      "Soins à domicile"
    ]
  },
  {
    id: 'orthoplastie',
    title: "Orthoplastie / Orthonyxie / Onychoplastie",
    shortDesc: "Correction et protection des orteils",
    description: [
      "Orthoplastie est un moulage en silicone visant à protéger ou corriger la position des orteils",
      "Orthonyxie va avoir pour but de corriger la courbure de l'ongle",
      "Onychoplastie est une technique de reconstruction de l'ongle"
    ],
    image: "/img/foot-care.jpg",
    price: "",
    detailedDescription: [
      "Orthoplastie est un moulage en silicone visant à protéger ou corriger la position des orteils",
      "Orthonyxie va avoir pour but de corriger la courbure de l'ongle",
      "Onychoplastie est une technique de reconstruction de l'ongle"
    ]
  },
  {
    id: 'analyse-biomecanique',
    title: "Analyse biomécanique",
    shortDesc: "Étude complète de la marche et de la posture",
    description: [
      "Analyse de la marche et de la course",
      "Analyse de la posture",
      "Conseils personnalisés"
    ],
    image: "/img/analyse_biomecanique.jpg",
    price: "",
    detailedDescription: [
      "Analyse de la marche et de la course",
      "Analyse de la posture",
      "Conseils personnalisés"
    ]
  },
  {
    id: 'semelles',
    title: "Semelles podologiques",
    shortDesc: "Semelles personnalisées 3D",
    description: [
      "Confection des semelles sur base de l'analyse biomécanique réalisée",
      "Conception par ordinateur",
      "Usinage 3D",
      "Adaptées en fonction de vos besoin",
      "Suivi et ajustement"
    ],
    image: "/img/Semelle.jpg",
    price: "",
    detailedDescription: [
      "Confection des semelles sur base de l'analyse biomécanique réalisée",
      "Conception par ordinateur",
      "Usinage 3D",
      "Adaptées en fonction de vos besoins",
      "Suivi et ajustement"
    ]
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
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {selectedService.detailedDescription.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="w-2 h-2 bg-[#403737] rounded-full mt-2 mr-3 flex-shrink-0"></span>
                        <span className="text-sm md:text-base text-[#403737]/80">{item}</span>
                      </li>
                    ))}
                  </ul>
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