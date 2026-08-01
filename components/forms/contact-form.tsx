"use client";

import * as React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { AnimatePresence, motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  nom: z.string().min(2, "Votre nom est requis"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().refine((v) => v === "" || v.length >= 6, {
    message: "Numéro invalide",
  }),
  sujet: z.string().min(1, "Choisissez un sujet"),
  message: z.string().min(10, "Votre message doit contenir au moins 10 caractères"),
});

type ContactValues = z.infer<typeof contactSchema>;

const SUBJECTS = [
  "Réserver une séance",
  "Maquillage mariée",
  "Maquillage professionnel",
  "Cours de maquillage",
  "Candidature",
  "Autre demande",
];

export function ContactForm() {
  const [sent, setSent] = React.useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setValue,
    watch,
  } = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: { nom: "", email: "", telephone: "", sujet: "", message: "" },
  });

  const sujet = watch("sujet");

  function onSubmit() {
    setSent(true);
  }

  return (
    <div className="relative">
      <AnimatePresence mode="wait">
        {sent ? (
          <motion.div
            key="done"
            className="flex min-h-[420px] flex-col items-center justify-center gap-6 rounded-3xl border border-gold/40 bg-[radial-gradient(120%_120%_at_50%_0%,#F3E9E1_0%,#FAFAFA_60%)] p-10 text-center"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            role="status"
          >
            <span aria-hidden className="grid h-16 w-14 place-items-center overflow-hidden rounded-t-[50%] border border-gold bg-cream/60">
              <span className="font-display text-xl font-semibold italic text-gold-deep">M</span>
            </span>
            <h3 className="font-display text-3xl font-medium text-noir">
              Merci pour votre message
            </h3>
            <p className="max-w-sm font-serif text-lg italic leading-relaxed text-mist">
              Notre équipe vous répond sous 24 heures. À très vite à l’atelier.
            </p>
            <Button variant="outline" onClick={() => setSent(false)}>
              Envoyer un autre message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            noValidate
          >
            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-nom">Nom complet</Label>
                <Input id="contact-nom" placeholder="Votre nom" aria-invalid={!!errors.nom} {...register("nom")} />
                {errors.nom && (
                  <p className="font-sans text-xs text-destructive">{errors.nom.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-email">Email</Label>
                <Input id="contact-email" type="email" placeholder="vous@exemple.fr" aria-invalid={!!errors.email} {...register("email")} />
                {errors.email && (
                  <p className="font-sans text-xs text-destructive">{errors.email.message}</p>
                )}
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-tel">Téléphone (optionnel)</Label>
                <Input id="contact-tel" type="tel" placeholder="+33 6 00 00 00 00" aria-invalid={!!errors.telephone} {...register("telephone")} />
                {errors.telephone && (
                  <p className="font-sans text-xs text-destructive">{errors.telephone.message}</p>
                )}
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="contact-sujet">Sujet</Label>
                <Select
                  value={sujet}
                  onValueChange={(v) => setValue("sujet", v, { shouldValidate: true })}
                >
                  <SelectTrigger id="contact-sujet" aria-invalid={!!errors.sujet}>
                    <SelectValue placeholder="Choisissez un sujet" />
                  </SelectTrigger>
                  <SelectContent>
                    {SUBJECTS.map((s) => (
                      <SelectItem key={s} value={s}>
                        {s}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.sujet && (
                  <p className="font-sans text-xs text-destructive">{errors.sujet.message}</p>
                )}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor="contact-message">Votre message</Label>
              <Textarea id="contact-message" rows={5} placeholder="Racontez-nous votre projet…" aria-invalid={!!errors.message} {...register("message")} />
              {errors.message && (
                <p className="font-sans text-xs text-destructive">{errors.message.message}</p>
              )}
            </div>

            <Button type="submit" size="lg" disabled={isSubmitting} className="self-start">
              {isSubmitting ? "Envoi…" : "Envoyer le message"}
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
