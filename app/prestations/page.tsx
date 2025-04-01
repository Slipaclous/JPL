"use client";

import { Card } from "@/components/ui/card";
import { Check, Footprints } from "lucide-react";

const prestations = [
  {
    title: "Bilan Podologique",
    price: "60€",
    description: "Examen complet des pieds et analyse de la marche",
    image: "https://images.unsplash.com/photo-1576201836106-db1758fd1c97?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    details: [
      "Analyse morphologique",
      "Étude de la marche",
      "Bilan postural",
      "Recommandations personnalisées"
    ]
  },
  {
    title: "Semelles Orthopédiques",
    price: "À partir de 120€",
    description: "Semelles sur mesure adaptées à vos besoins",
    image: "https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    details: [
      "Prise d'empreintes",
      "Fabrication sur mesure",
      "Suivi et ajustements",
      "Garantie adaptation"
    ]
  },
  {
    title: "Soin des Pieds",
    price: "45€",
    description: "Soin complet des pieds",
    image: "https://images.unsplash.com/photo-1519415943484-9fa1873496d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80",
    details: [
      "Coupe des ongles",
      "Traitement des callosités",
      "Massage relaxant",
      "Conseils d'hygiène"
    ]
  }
];

export default function Prestations() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Footprints className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Nos Prestations</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Découvrez nos services professionnels adaptés à vos besoins. Chaque prestation
            est réalisée avec le plus grand soin pour votre confort et votre santé.
          </p>
        </div>
      </section>
      
      {/* Services */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {prestations.map((prestation, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="h-48 relative">
                  <img 
                    src={prestation.image}
                    alt={prestation.title}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{prestation.title}</h2>
                  <p className="text-xl font-bold text-primary mb-4">{prestation.price}</p>
                  <p className="text-muted-foreground mb-6">{prestation.description}</p>
                  <ul className="space-y-3">
                    {prestation.details.map((detail, i) => (
                      <li key={i} className="flex items-center">
                        <Check className="h-5 w-5 text-primary mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}