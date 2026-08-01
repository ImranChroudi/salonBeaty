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
import { PRESTATIONS, ARTISTS } from "@/lib/data";
import { cn } from "@/lib/utils";

const bookingSchema = z.object({
  prestation: z.string().min(1, "Choisissez une prestation"),
  date: z.string().min(1, "Choisissez une date"),
  heure: z.string().min(1, "Choisissez un horaire"),
  artiste: z.string().optional(),
  nom: z.string().min(2, "Votre nom est requis"),
  email: z.string().email("Adresse email invalide"),
  telephone: z.string().min(6, "Numéro de téléphone invalide"),
  message: z.string().optional(),
});

type BookingValues = z.infer<typeof bookingSchema>;

const TIMES = ["10h00", "11h30", "13h00", "14h30", "16h00", "17h30"];

const STEPS = [
  { no: "01", label: "Prestation" },
  { no: "02", label: "Date & heure" },
  { no: "03", label: "Coordonnées" },
];

const EASE = [0.22, 1, 0.36, 1] as const;

export function BookingForm() {
  const [step, setStep] = React.useState(0);
  const [confirmed, setConfirmed] = React.useState(false);

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<BookingValues>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      prestation: "",
      date: "",
      heure: "",
      artiste: "",
      nom: "",
      email: "",
      telephone: "",
      message: "",
    },
  });

  const prestation = watch("prestation");
  const date = watch("date");
  const heure = watch("heure");
  const artiste = watch("artiste");

  const selected = PRESTATIONS.find((p) => p.title === prestation);

  const today = React.useMemo(() => new Date().toISOString().split("T")[0], []);

  async function next() {
    if (step === 0 && !(await trigger("prestation"))) return;
    if (step === 1 && !(await trigger(["date", "heure"]))) return;
    setStep((s) => Math.min(2, s + 1));
  }

  function back() {
    setStep((s) => Math.max(0, s - 1));
  }

  function onSubmit() {
    setConfirmed(true);
  }

  const formatDate = (iso: string) => {
    if (!iso) return "";
    const d = new Date(`${iso}T00:00:00`);
    return new Intl.DateTimeFormat("fr-FR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(d);
  };

  if (confirmed) {
    return (
      <motion.div
        className="flex min-h-[560px] flex-col items-center justify-center gap-7 rounded-[2rem] border border-gold/40 bg-[radial-gradient(120%_120%_at_50%_0%,#F8D7DA_0%,#FAFAFA_60%)] p-10 text-center"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: EASE }}
        role="status"
      >
        <motion.span
          aria-hidden
          className="grid h-20 w-16 place-items-center overflow-hidden rounded-t-[50%] border border-gold bg-cream/70 shadow-[0_20px_50px_-20px_rgba(212,175,55,0.8)]"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: EASE }}
        >
          <span className="font-display text-2xl font-semibold italic text-gold-deep">M</span>
        </motion.span>
        <h2 className="font-display text-4xl font-medium text-noir">
          Votre rendez-vous est confirmé
        </h2>
        <p className="max-w-md font-serif text-lg italic leading-relaxed text-mist">
          Un email de confirmation vous attend. Nous préparons l’atelier — et le café.
        </p>
        <dl className="grid w-full max-w-md gap-3 rounded-3xl border border-border bg-white p-6 text-left sm:grid-cols-2">
          <div>
            <dt className="font-sans text-[9px] uppercase tracking-[0.25em] text-mist">Prestation</dt>
            <dd className="mt-1 font-display text-[15px] font-semibold text-noir">{prestation}</dd>
          </div>
          <div>
            <dt className="font-sans text-[9px] uppercase tracking-[0.25em] text-mist">Tarif</dt>
            <dd className="mt-1 font-display text-[15px] font-semibold text-deeprose">
              {selected?.price ?? "Sur devis"}
            </dd>
          </div>
          <div>
            <dt className="font-sans text-[9px] uppercase tracking-[0.25em] text-mist">Date</dt>
            <dd className="mt-1 font-serif text-[15px] italic text-noir">{formatDate(date)}</dd>
          </div>
          <div>
            <dt className="font-sans text-[9px] uppercase tracking-[0.25em] text-mist">Heure</dt>
            <dd className="mt-1 font-display text-[15px] font-semibold text-noir">{heure}</dd>
          </div>
        </dl>
        <Button variant="outline" onClick={() => window.location.reload()}>
          Nouvelle réservation
        </Button>
      </motion.div>
    );
  }

  return (
    <div className="grid gap-10 lg:grid-cols-[1.25fr_0.75fr] lg:gap-14">
      <div>
        <ol className="mb-10 flex items-center gap-2" aria-label="Étapes de réservation">
          {STEPS.map((s, i) => (
            <React.Fragment key={s.no}>
              <li className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => i < step && setStep(i)}
                  aria-current={step === i ? "step" : undefined}
                  className={cn(
                    "flex items-center gap-2 rounded-full border px-4 py-2 font-sans text-[10px] font-semibold uppercase tracking-[0.2em] transition-all duration-300",
                    step === i
                      ? "border-noir bg-noir text-cream"
                      : i < step
                        ? "border-gold text-gold-deep"
                        : "border-border text-mist"
                  )}
                >
                  <span aria-hidden>{s.no}</span>
                  <span className="hidden sm:inline">{s.label}</span>
                </button>
              </li>
              {i < STEPS.length - 1 && (
                <span
                  aria-hidden
                  className={cn(
                    "h-px flex-1 min-w-4 transition-colors duration-500",
                    step > i ? "bg-gold" : "bg-border"
                  )}
                />
              )}
            </React.Fragment>
          ))}
        </ol>

        <AnimatePresence mode="wait">
          <motion.div
            key={step}
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -24 }}
            transition={{ duration: 0.45, ease: EASE }}
          >
            {step === 0 && (
              <fieldset className="space-y-3">
                <legend className="mb-6 font-display text-2xl font-medium text-noir">
                  Choisissez votre prestation
                </legend>
                {PRESTATIONS.map((p) => {
                  const active = prestation === p.title;
                  return (
                    <button
                      key={p.no}
                      type="button"
                      onClick={() => setValue("prestation", p.title, { shouldValidate: true })}
                      aria-pressed={active}
                      className={cn(
                        "group flex w-full items-center gap-5 rounded-2xl border p-5 text-left transition-all duration-400",
                        active
                          ? "border-gold bg-gradient-to-r from-gold/10 to-transparent shadow-[0_20px_50px_-30px_rgba(212,175,55,0.6)]"
                          : "border-border bg-white hover:border-gold/50"
                      )}
                    >
                      <span
                        aria-hidden
                        className={cn(
                          "grid h-12 w-12 shrink-0 place-items-center rounded-full border transition-all duration-400",
                          active ? "border-gold bg-gold text-noir" : "border-border text-gold-deep"
                        )}
                      >
                        <span className="font-sans text-[10px] font-semibold tabular-nums tracking-[0.15em]">
                          {p.no}
                        </span>
                      </span>
                      <span className="flex-1">
                        <span className="block font-display text-lg font-semibold text-noir">
                          {p.title}
                        </span>
                        <span className="mt-0.5 block font-serif text-[15px] italic text-mist">
                          {p.tagline} · {p.duration}
                        </span>
                      </span>
                      <span className="hidden font-display text-base font-semibold text-deeprose sm:block">
                        {p.price}
                      </span>
                    </button>
                  );
                })}
                {errors.prestation && (
                  <p className="font-sans text-xs text-destructive">{errors.prestation.message}</p>
                )}
              </fieldset>
            )}

            {step === 1 && (
              <div className="space-y-8">
                <div>
                  <Label htmlFor="booking-date" className="mb-3 block font-display text-2xl font-medium">
                    Quand préférez-vous venir ?
                  </Label>
                  <Input
                    id="booking-date"
                    type="date"
                    min={today}
                    className="max-w-sm"
                    aria-invalid={!!errors.date}
                    {...register("date")}
                  />
                  {errors.date && (
                    <p className="mt-2 font-sans text-xs text-destructive">{errors.date.message}</p>
                  )}
                </div>

                <fieldset>
                  <legend className="mb-4 font-display text-xl font-medium text-noir">
                    Un horaire
                  </legend>
                  <div className="flex flex-wrap gap-3">
                    {TIMES.map((t) => {
                      const active = heure === t;
                      return (
                        <button
                          key={t}
                          type="button"
                          onClick={() => setValue("heure", t, { shouldValidate: true })}
                          aria-pressed={active}
                          className={cn(
                            "rounded-full border px-6 py-3 font-sans text-sm transition-all duration-300",
                            active
                              ? "border-noir bg-noir text-cream"
                              : "border-border bg-white text-noir/75 hover:border-gold hover:text-gold-deep"
                          )}
                        >
                          {t}
                        </button>
                      );
                    })}
                  </div>
                  {errors.heure && (
                    <p className="mt-3 font-sans text-xs text-destructive">{errors.heure.message}</p>
                  )}
                </fieldset>

                <div>
                  <Label htmlFor="booking-artiste" className="mb-3 block font-display text-xl font-medium">
                    Une artiste préférée ? <span className="font-serif text-base italic text-mist">(optionnel)</span>
                  </Label>
                  <Select value={artiste} onValueChange={(v) => setValue("artiste", v)}>
                    <SelectTrigger id="booking-artiste" className="max-w-sm">
                      <SelectValue placeholder="Laissez-nous choisir pour vous" />
                    </SelectTrigger>
                    <SelectContent>
                      {ARTISTS.map((a) => (
                        <SelectItem key={a.name} value={a.name}>
                          {a.name} — {a.specialty}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="space-y-6">
                <p className="font-display text-2xl font-medium text-noir">
                  Dernières coordonnées
                </p>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="bk-nom">Nom complet</Label>
                    <Input id="bk-nom" placeholder="Votre nom" aria-invalid={!!errors.nom} {...register("nom")} />
                    {errors.nom && <p className="font-sans text-xs text-destructive">{errors.nom.message}</p>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="bk-tel">Téléphone</Label>
                    <Input id="bk-tel" type="tel" placeholder="+33 6 00 00 00 00" aria-invalid={!!errors.telephone} {...register("telephone")} />
                    {errors.telephone && <p className="font-sans text-xs text-destructive">{errors.telephone.message}</p>}
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="bk-email">Email</Label>
                  <Input id="bk-email" type="email" placeholder="vous@exemple.fr" aria-invalid={!!errors.email} {...register("email")} />
                  {errors.email && <p className="font-sans text-xs text-destructive">{errors.email.message}</p>}
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="bk-message">
                    Un mot pour votre artiste <span className="font-serif italic text-mist">(optionnel)</span>
                  </Label>
                  <Textarea id="bk-message" rows={4} placeholder="Couleurs, envies, peurs, tout est bon à dire…" {...register("message")} />
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        <div className="mt-10 flex items-center justify-between">
          <Button type="button" variant="ghost" onClick={back} disabled={step === 0} className={cn(step === 0 && "invisible")}>
            Retour
          </Button>
          {step < 2 ? (
            <Button type="button" size="lg" onClick={next}>
              Continuer
            </Button>
          ) : (
            <Button type="button" size="lg" onClick={() => handleSubmit(onSubmit)()}>
              Confirmer ma réservation
            </Button>
          )}
        </div>
      </div>

      <aside className="lg:sticky lg:top-28 lg:self-start">
        <div className="overflow-hidden rounded-3xl border border-border bg-white shadow-[0_40px_100px_-50px_rgba(192,132,151,0.55)]">
          <div className="border-b border-border bg-[radial-gradient(120%_120%_at_50%_0%,#F8D7DA_0%,#FAFAFA_70%)] px-7 py-6">
            <p className="font-sans text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-deep">
              Votre séance
            </p>
          </div>
          <dl className="space-y-5 px-7 py-7">
            <div className="flex items-start justify-between gap-4">
              <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-mist">Prestation</dt>
              <dd className="text-right font-display text-[15px] font-semibold text-noir">
                {prestation || "—"}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-mist">Date</dt>
              <dd className="text-right font-serif text-[15px] italic text-noir">
                {date ? formatDate(date) : "—"}
              </dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-mist">Heure</dt>
              <dd className="text-right font-display text-[15px] font-semibold text-noir">{heure || "—"}</dd>
            </div>
            <div className="flex items-start justify-between gap-4">
              <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-mist">Artiste</dt>
              <dd className="text-right font-serif text-[15px] italic text-noir">{artiste || "Sur recommandation"}</dd>
            </div>
            <div className="flex items-center justify-between border-t border-border pt-5">
              <dt className="font-sans text-[10px] uppercase tracking-[0.22em] text-mist">Tarif indicatif</dt>
              <dd className="font-display text-xl font-semibold text-deeprose">
                {selected?.price ?? "Sur devis"}
              </dd>
            </div>
          </dl>
          <div className="border-t border-border bg-powder/30 px-7 py-5">
            <p className="font-serif text-sm italic leading-relaxed text-noir/70">
              L’essai est déduit du jour J. Annulation sans frais jusqu’à 48 h.
            </p>
          </div>
        </div>
      </aside>
    </div>
  );
}
