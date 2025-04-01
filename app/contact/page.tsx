"use client";

import { Mail, Phone, MapPin, Clock, Send } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Ici nous pourrions ajouter la logique d'envoi du formulaire
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-primary/10 py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <Mail className="h-16 w-16 text-primary mx-auto mb-6" />
          <h1 className="text-4xl font-bold mb-4">Contactez-moi</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un besoin spécifique ? N'hésitez pas à me contacter.
            je suis à votre disposition pour vous répondre dans les plus brefs délais.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulaire de contact */}
            <div>
              <Card className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstname">Prénom</Label>
                      <Input id="firstname" placeholder="Votre prénom" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastname">Nom</Label>
                      <Input id="lastname" placeholder="Votre nom" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="votre@email.com" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Téléphone</Label>
                    <Input id="phone" type="tel" placeholder="Votre numéro" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Votre message..." 
                      className="min-h-[150px]"
                      required 
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="btn-primary w-full"
                  >
                    <Send className="mr-2 h-5 w-5" />
                    Envoyer le message
                  </button>
                </form>
              </Card>
            </div>

            {/* Informations de contact */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold mb-6">Informations pratiques</h2>
                <div className="space-y-6">
                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Téléphone</h3>
                        <a href="tel:0123456789" className="text-primary hover:underline">
                        +32493938982
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <a href="mailto:contact@podologue.fr" className="text-primary hover:underline">
                        leonardi.podo@gmail.com
                        </a>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Adresse</h3>
                        <p className="text-muted-foreground">
                        Rue Docteur Colson 23, 1430 Quenast
                        </p>
                        <p className="text-muted-foreground">
                        Chaussée de Bruxelles 475, 7850 Enghien
                        </p>
                      </div>
                    </div>
                  </Card>

                  <Card className="p-4 hover:shadow-lg transition-shadow">
                    <div className="flex items-center space-x-4">
                      <div className="bg-primary/10 p-3 rounded-full">
                        <Clock className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Horaires</h3>
                        <p className="text-muted-foreground">
                          Lun-Ven: 9h-19h<br />
                          Sam: 9h-12h
                        </p>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Carte Google Maps */}
              <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.4762001024465!2d2.3413!3d48.8534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDUxJzEyLjIiTiAywrAyMCczMi43IkU!5e0!3m2!1sfr!2sfr!4v1635959123456!5m2!1sfr!2sfr"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}