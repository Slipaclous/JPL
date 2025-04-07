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
            className="text-[#EBE6E4]"
          >
            <h1 className="text-4xl md:text-6xl mb-6 tracking-wide font-light">
              Podologue<br/>
              <span className="text-white">Leonardi Justine</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 font-light text-[#EBE6E4]/80 leading-relaxed">
              Des soins personnalisés pour vos pieds par une professionnelle expérimentée
            </p>
            <Link 
              href="https://rosa.be/fr/hp/justine-leonardi/"
              target="_blank"
              className="inline-flex items-center px-8 py-3 bg-[#EBE6E4] text-[#403737] text-sm uppercase tracking-widest hover:bg-white transition-all duration-300 hover:shadow-lg"
            >
              Prendre RDV
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              {
                title: "Soin des pieds",
                description: "Soins classiques et spécifiques adaptés à vos besoins",
                image: "https://images.unsplash.com/photo-1519415510236-718bdfcd89c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=870&q=80"
              },
              {
                title: "Orthoplastie",
                description: "Protection et correction des orteils sur mesure",
                image: "https://images.unsplash.com/photo-1508387027939-27cccde53673?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
              },
              {
                title: "Analyse biomécanique",
                description: "Étude complète de votre démarche et posture",
                image: "https://images.unsplash.com/photo-1581595220892-b0739db3ba8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=774&q=80"
              },
              {
                title: "Semelles podologiques",
                description: "Semelles personnalisées réalisées en 3D",
                image: "https://images.unsplash.com/photo-1515191107209-c28698631303?ixlib=rb-4.0.3&auto=format&fit=crop&w=928&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group cursor-pointer"
                onClick={() => window.location.href = '/prestations'}
              >
                <div className="aspect-[4/3] mb-6 overflow-hidden bg-[#EBE6E4]/20">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-light tracking-wider mb-2 text-[#403737] group-hover:text-[#403737]/80 transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-[#403737]/60">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-24 bg-[#EBE6E4]/10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative max-w-sm mx-auto"
            >
              <div className="aspect-[3/4] relative z-10 overflow-hidden">
                <img 
                  src="/img/justine.jpg"
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
            >
              <h2 className="text-2xl font-light tracking-widest uppercase mb-8 text-[#403737]">À Propos</h2>
              <p className="text-lg font-light leading-relaxed text-[#403737]/80 mb-8">
                Diplômée d'un bachelier en podologie-podothérapie en juin 2021 à la Haute Ecole Léonard de Vinci - Parnasse ISESI à Bruxelles. Je suis disponible pour vous afin d'évaluer vos besoins et de vous apporter des soins spécifiques selon votre demande.
              </p>
              <Link 
                href="/prestations"
                className="inline-flex items-center px-8 py-3 bg-[#403737] text-[#EBE6E4] text-sm uppercase tracking-widest hover:bg-[#403737]/90 transition-all duration-300"
              >
                Découvrir mes prestations
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 bg-[#403737] text-[#EBE6E4]">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.2 } }
            }}
            className="grid md:grid-cols-2 gap-16 items-start"
          >
            <div className="space-y-12">
              <motion.div variants={fadeIn}>
                <h3 className="text-sm uppercase tracking-wider mb-4 text-white/70">Horaires</h3>
                <p className="font-light">
                  Lun-Ven: 9h-19h<br />
                  Sam: 9h-12h
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-sm uppercase tracking-wider mb-4 text-white/70">Contact</h3>
                <p className="font-light">
                  +32493938982<br />
                  leonardi.podo@gmail.com
                </p>
              </motion.div>
              
              <motion.div variants={fadeIn}>
                <h3 className="text-sm uppercase tracking-wider mb-4 text-white/70">Adresse</h3>
                <p className="font-light">
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
    </main>
  );
}