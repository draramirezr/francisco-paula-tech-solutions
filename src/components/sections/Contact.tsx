"use client";

import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { contactServices } from "@/data/content";
import { getWhatsAppUrl, siteConfig } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/WhatsAppButton";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { FormEvent, useState } from "react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    window.open(
      getWhatsAppUrl(
        `*Nueva solicitud de cotización*\n\n` +
          `Nombre: ${data.name}\n` +
          `Correo: ${data.email}\n` +
          `Teléfono: ${data.phone}\n` +
          `Empresa: ${data.company}\n` +
          `Servicio: ${data.service}\n` +
          `Mensaje: ${data.message}`
      ),
      "_blank"
    );

    setIsSubmitting(false);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contacto" className="section-padding bg-gray-50/50 dark:bg-primary/30">
      <div className="container-custom">
        <SectionHeading title="Agenda tu consulta gratuita" />

        <div className="grid gap-12 lg:grid-cols-5">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <p className="text-lg text-text-secondary dark:text-text-dark-secondary">
              Cuéntame sobre tu proyecto y recibe una propuesta personalizada.
              Respuesta garantizada en menos de 24 horas.
            </p>

            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 dark:bg-accent/10">
                  <Mail className="h-5 w-5 text-secondary dark:text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                    Correo
                  </p>
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="font-medium text-primary hover:text-secondary dark:text-white dark:hover:text-accent"
                  >
                    {siteConfig.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 dark:bg-accent/10">
                  <Phone className="h-5 w-5 text-secondary dark:text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                    Teléfono
                  </p>
                  <a
                    href={`tel:${siteConfig.phoneTel}`}
                    className="font-medium text-primary hover:text-secondary dark:text-white dark:hover:text-accent"
                  >
                    {siteConfig.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-secondary/10 dark:bg-accent/10">
                  <MapPin className="h-5 w-5 text-secondary dark:text-accent" />
                </div>
                <div>
                  <p className="text-sm text-text-secondary dark:text-text-dark-secondary">
                    Ubicación
                  </p>
                  <p className="font-medium text-primary dark:text-white">
                    {siteConfig.location}
                  </p>
                </div>
              </div>
            </div>

            <WhatsAppButton
              className="mt-8 w-full sm:w-auto"
              fullWidth
              message="Hola, me interesa agendar una consulta"
              label="Escríbeme por WhatsApp"
            />
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="glass-card lg:col-span-3 p-6 lg:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label
                  htmlFor="name"
                  className="mb-1.5 block text-sm font-medium text-primary dark:text-white"
                >
                  Nombre *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 dark:border-gray-700 dark:bg-primary/60 dark:text-white dark:focus:border-accent dark:focus:ring-accent/20"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-1.5 block text-sm font-medium text-primary dark:text-white"
                >
                  Correo *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 dark:border-gray-700 dark:bg-primary/60 dark:text-white dark:focus:border-accent dark:focus:ring-accent/20"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="mb-1.5 block text-sm font-medium text-primary dark:text-white"
                >
                  Teléfono
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 dark:border-gray-700 dark:bg-primary/60 dark:text-white dark:focus:border-accent dark:focus:ring-accent/20"
                  placeholder="+1 (809) 555-1234"
                />
              </div>

              <div>
                <label
                  htmlFor="company"
                  className="mb-1.5 block text-sm font-medium text-primary dark:text-white"
                >
                  Empresa
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 dark:border-gray-700 dark:bg-primary/60 dark:text-white dark:focus:border-accent dark:focus:ring-accent/20"
                  placeholder="Nombre de tu empresa"
                />
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="service"
                  className="mb-1.5 block text-sm font-medium text-primary dark:text-white"
                >
                  Servicio de interés *
                </label>
                <select
                  id="service"
                  name="service"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 dark:border-gray-700 dark:bg-primary/60 dark:text-white dark:focus:border-accent dark:focus:ring-accent/20"
                >
                  <option value="">Selecciona un servicio</option>
                  {contactServices.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              <div className="sm:col-span-2">
                <label
                  htmlFor="message"
                  className="mb-1.5 block text-sm font-medium text-primary dark:text-white"
                >
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm transition-colors focus:border-secondary focus:outline-none focus:ring-2 focus:ring-secondary/20 dark:border-gray-700 dark:bg-primary/60 dark:text-white dark:focus:border-accent dark:focus:ring-accent/20"
                  placeholder="Cuéntame sobre tu proyecto..."
                />
              </div>
            </div>

            <div className="mt-6">
              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={isSubmitting}
              >
                {submitted ? (
                  "¡Mensaje enviado!"
                ) : (
                  <>
                    Agendar consulta gratuita
                    <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
