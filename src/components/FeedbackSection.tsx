import { useState } from "react";
import { z } from "zod";

const feedbackSchema = z.object({
  firstName: z.string().trim().min(2, "Zadejte jméno").max(80, "Jméno je příliš dlouhé"),
  lastName: z.string().trim().min(2, "Zadejte příjmení").max(80, "Příjmení je příliš dlouhé"),
  email: z.string().trim().email("Zadejte platný e-mail").max(255, "E-mail je příliš dlouhý"),
  phone: z
    .string()
    .trim()
    .min(9, "Zadejte platné telefonní číslo")
    .max(20, "Telefon je příliš dlouhý")
    .regex(/^[+0-9 ]+$/, "Telefon může obsahovat pouze čísla, mezery a +"),
  message: z
    .string()
    .trim()
    .min(10, "Napište nám prosím krátkou zpětnou vazbu")
    .max(1000, "Zpráva je příliš dlouhá"),
});

type FormData = z.infer<typeof feedbackSchema>;

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
};

const FeedbackSection = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    setErrors((prev) => ({ ...prev, [field]: undefined }));
    if (isSubmitted) setIsSubmitted(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const result = feedbackSchema.safeParse(formData);

    if (!result.success) {
      const fieldErrors = result.error.flatten().fieldErrors;
      setErrors({
        firstName: fieldErrors.firstName?.[0],
        lastName: fieldErrors.lastName?.[0],
        email: fieldErrors.email?.[0],
        phone: fieldErrors.phone?.[0],
        message: fieldErrors.message?.[0],
      });
      return;
    }

    setErrors({});
    setIsSubmitted(true);
    setFormData(initialData);
  };

  return (
    <section id="feedback" className="bg-background py-20 md:py-28">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-sm md:p-10">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Podělte se o Váš názor
          </h2>
          <p className="mt-4 font-body text-base text-muted-foreground md:text-lg">
            Jak se Vám roadshow líbila? Napište nám zpětnou vazbu a můžete vyhrát pastu pro Váš pěkný úsměv.
          </p>

          {isSubmitted && (
            <div className="mt-6 rounded-xl border border-secondary/30 bg-secondary/10 px-4 py-3 font-body text-sm text-foreground">
              Děkujeme! Vaše odpověď byla odeslána.
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block font-body text-sm font-medium text-foreground">
                Jméno
              </label>
              <input
                id="firstName"
                name="firstName"
                autoComplete="given-name"
                value={formData.firstName}
                onChange={(e) => handleChange("firstName", e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-background px-3 font-body text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
              />
              {errors.firstName && <p className="mt-1 font-body text-sm text-destructive">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block font-body text-sm font-medium text-foreground">
                Příjmení
              </label>
              <input
                id="lastName"
                name="lastName"
                autoComplete="family-name"
                value={formData.lastName}
                onChange={(e) => handleChange("lastName", e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-background px-3 font-body text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
              />
              {errors.lastName && <p className="mt-1 font-body text-sm text-destructive">{errors.lastName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-foreground">
                E-mail
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-background px-3 font-body text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
              />
              {errors.email && <p className="mt-1 font-body text-sm text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-body text-sm font-medium text-foreground">
                Telefon
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                autoComplete="tel"
                value={formData.phone}
                onChange={(e) => handleChange("phone", e.target.value)}
                className="h-11 w-full rounded-lg border border-input bg-background px-3 font-body text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
              />
              {errors.phone && <p className="mt-1 font-body text-sm text-destructive">{errors.phone}</p>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-2 block font-body text-sm font-medium text-foreground">
                Vaše zkušenost z roadshow
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full rounded-lg border border-input bg-background px-3 py-2 font-body text-foreground outline-none ring-offset-background transition focus-visible:ring-2 focus-visible:ring-ring"
              />
              {errors.message && <p className="mt-1 font-body text-sm text-destructive">{errors.message}</p>}
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 font-body text-sm font-semibold text-primary-foreground transition hover:opacity-90"
              >
                Odeslat odpověď
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
