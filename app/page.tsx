"use client";

import { ArrowRight, Clock, MapPin, Phone, Star, Users, Footprints, Award, Calendar } from "lucide-react";
import Link from "next/link";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative h-[600px] flex items-center justify-center">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://images.unsplash.com/photo-1595459650960-2dd4faec7d62?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
        </div>
        
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl font-bold mb-6">Justine Leonardi Podologue</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Des soins personnalisés pour vos pieds par une professionnelle expérimentée
          </p>
          <div className="space-x-4">
            <Link 
              href="/prestations"
              className="btn-primary"
            >
              Découvrir mes prestations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="https://rosa.be/fr/hp/justine-leonardi/"
              target="_blank"
              className="btn-secondary bg-transparent border-white text-white hover:bg-white hover:text-primary"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Prendre RDV
            </Link>
          </div>
        </div>
      </section>

      {/* Points forts */}
      <section className="py-16 bg-gradient-to-b from-primary/10 to-transparent">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Pourquoi me choisir ?</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Star,
                title: "Expertise",
                description: "Une expérience et une rigueur dans l'accomplissement de mon travail"
              },
              {
                icon: Users,
                title: "Personnalisé",
                description: "Approche adaptée à chaque patient"
              },
              {
                icon: Footprints,
                title: "Équipement",
                description: "Matériel de pointe"
              },
              {
                icon: Award,
                title: "Qualité",
                description: "Soins certifiés"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <item.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Informations pratiques */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Votre Cabinet</h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group hover:text-primary transition-colors duration-300">
                  <Clock className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold">Horaires</h3>
                    <p className="text-muted-foreground">Lun-Ven: 9h-19h<br />Sam: 9h-12h</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:text-primary transition-colors duration-300">
                  <Phone className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold">Contact</h3>
                    <p className="text-muted-foreground">+32493938982<br />leonardi.podo@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4 group hover:text-primary transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                  <div>
                    <h3 className="font-semibold">Adresse</h3>
                    <p className="text-muted-foreground">Rue Docteur Colson 23, 1430 Quenast</p>
                    <p className="text-muted-foreground">Chaussée de Bruxelles 475, 7850 Enghien</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative h-[400px] rounded-2xl overflow-hidden transform transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Cabinet de podologie"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* À propos */}
      <section className="py-16 bg-gradient-to-b from-transparent to-primary/10">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">Justine Leonardi</h2>
            <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden transform transition-transform duration-500 hover:scale-105">
              <img 
                src="\img\leonardi.png"
                alt="Dr. Marie Martin"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-lg text-muted-foreground mb-8">
            Diplômée d'un bachelier en podologie-podothérapie en juin 2021 à la Haute Ecole Léonard de Vinci - Parnasse ISESI à Bruxelles. Je suis disponible pour vous afin d'évaluer vos besoins et de vous apporter des soins spécifiques selon votre demande.
            </p>
            <Link 
              href="https://rosa.be/fr/hp/justine-leonardi/"
              target="_blank"
              className="btn-primary"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Prendre rendez-vous
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}