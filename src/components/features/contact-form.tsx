import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { InputField, TextareaField } from "@/components/ui/field";

interface FormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  message: string;
}

interface FormResponse {
  success: boolean;
  error?: string;
  details?: string[];
  messageId?: string;
  resetAt?: string;
}

const WORKER_URL = "https://contact-clouflare.angeloz-ludovic.workers.dev";

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    prenom: "",
    nom: "",
    email: "",
    telephone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
    details?: string[];
  }>({ type: null, message: "" });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      const response = await fetch(WORKER_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data: FormResponse = await response.json();

      if (response.ok && data.success) {
        setSubmitStatus({
          type: "success",
          message:
            "Message envoyé avec succès ! Nous vous répondrons rapidement.",
        });
        setFormData({
          prenom: "",
          nom: "",
          email: "",
          telephone: "",
          message: "",
        });
      } else if (response.status === 429) {
        const resetDate = data.resetAt
          ? new Date(data.resetAt).toLocaleString("fr-FR")
          : "";
        setSubmitStatus({
          type: "error",
          message: `${data.error || "Trop de requêtes"}${resetDate ? ` Réessayez après ${resetDate}` : ""}`,
        });
      } else if (response.status === 400 && data.details) {
        setSubmitStatus({
          type: "error",
          message: "Erreur de validation",
          details: data.details,
        });
      } else {
        setSubmitStatus({
          type: "error",
          message: data.error || "Une erreur est survenue lors de l'envoi",
        });
      }
    } catch (error) {
      setSubmitStatus({
        type: "error",
        message: "Impossible de contacter le serveur. Veuillez réessayer.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2 }}
      onSubmit={handleSubmit}
      className="max-w-2xl mx-auto mt-12 bg-background/20 backdrop-blur-sm rounded-2xl p-8 shadow-lg"
    >
      {submitStatus.type && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg border-2 ${
            submitStatus.type === "success"
              ? "bg-success/10 text-foreground border-background/40"
              : "bg-destructive/10 text-foreground border-destructive/40"
          }`}
        >
          <p className="font-semibold">{submitStatus.message}</p>
          {submitStatus.details && (
            <ul className="mt-2 list-disc list-inside text-sm opacity-90">
              {submitStatus.details.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          )}
        </motion.div>
      )}

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <InputField
          id="prenom"
          name="prenom"
          label="Prénom"
          type="text"
          value={formData.prenom}
          onChange={handleChange}
          required
          maxLength={50}
          placeholder="Votre prénom"
        />
        <InputField
          id="nom"
          name="nom"
          label="Nom"
          type="text"
          value={formData.nom}
          onChange={handleChange}
          required
          maxLength={50}
          placeholder="Votre nom"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mb-6">
        <InputField
          id="email"
          name="email"
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          required
          placeholder="votre@email.com"
        />
        <InputField
          id="telephone"
          name="telephone"
          label="Téléphone"
          type="tel"
          value={formData.telephone}
          onChange={handleChange}
          required
          maxLength={20}
          placeholder="+41 79 123 45 67"
        />
      </div>

      <div className="mb-6">
        <TextareaField
          id="message"
          name="message"
          label="Message"
          value={formData.message}
          onChange={handleChange}
          required
          maxLength={5000}
          rows={6}
          placeholder="Décrivez votre projet ou demande..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-background text-primary hover:bg-background/90 hover:scale-[1.02] font-semibold py-6 text-lg transition-all disabled:opacity-60 disabled:cursor-not-allowed shadow-lg"
      >
        {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
      </Button>
    </motion.form>
  );
}
