import { useState } from "react";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
  consentData: boolean;
  consentMarketing: boolean;
};

const initialData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  message: "",
  consentData: false,
  consentMarketing: false,
};

const inputClass =
  "h-12 w-full rounded-xl border border-input bg-background px-4 font-body text-foreground outline-none ring-offset-background transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary/30";

const FeedbackSection = () => {
  const [formData, setFormData] = useState<FormData>(initialData);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { lang, t } = useLanguage();

  const feedbackSchema = z.object({
    firstName: z.string().trim().min(2, t.feedback.errors.firstName[lang]).max(80),
    lastName: z.string().trim().min(2, t.feedback.errors.lastName[lang]).max(80),
    email: z.string().trim().email(t.feedback.errors.email[lang]).max(255),
    phone: z.string().trim().min(9, t.feedback.errors.phone[lang]).max(20).regex(/^[+0-9 ]+$/),
    message: z.string().trim().min(10, t.feedback.errors.message[lang]).max(1000),
    consentData: z.literal(true, { errorMap: () => ({ message: t.feedback.errors.consentData[lang] }) }),
    consentMarketing: z.boolean(),
  });

  const handleChange = (field: keyof FormData, value: string | boolean) => {
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
        consentData: fieldErrors.consentData?.[0],
      });
      return;
    }
    setErrors({});
    setIsSubmitted(true);
    setFormData(initialData);
  };

  return (
    <section id="feedback" className="relative py-24 md:py-32 overflow-hidden" style={{ background: "var(--gradient-section)" }}>
      <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-secondary/[0.04] blur-3xl translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl -translate-x-1/3 translate-y-1/3" />

      <div className="container relative mx-auto max-w-4xl px-4">
        <div className="rounded-3xl border border-border/60 bg-card/80 backdrop-blur-sm p-8 shadow-elegant md:p-12">
          <div className="text-center mb-10">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold font-body mb-4">
              {t.feedback.badge[lang]}
            </span>
            <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
              {t.feedback.title1[lang]} <span className="gradient-text">{t.feedback.title2[lang]}</span>
            </h2>
            <p className="mt-4 font-body text-base text-muted-foreground md:text-lg max-w-xl mx-auto">
              {t.feedback.subtitle[lang]}
            </p>
          </div>

          {isSubmitted && (
            <div className="mb-8 flex items-center gap-3 rounded-xl border border-secondary/30 bg-secondary/10 px-5 py-4 font-body text-sm text-foreground">
              <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0" />
              {t.feedback.submitted[lang]}
            </div>
          )}

          <form onSubmit={handleSubmit} noValidate className="grid grid-cols-1 gap-5 md:grid-cols-2">
            <div>
              <label htmlFor="firstName" className="mb-2 block font-body text-sm font-medium text-foreground">
                {t.feedback.firstName[lang]}
              </label>
              <input id="firstName" name="firstName" autoComplete="given-name" value={formData.firstName} onChange={(e) => handleChange("firstName", e.target.value)} className={inputClass} />
              {errors.firstName && <p className="mt-1.5 font-body text-sm text-destructive">{errors.firstName}</p>}
            </div>

            <div>
              <label htmlFor="lastName" className="mb-2 block font-body text-sm font-medium text-foreground">
                {t.feedback.lastName[lang]}
              </label>
              <input id="lastName" name="lastName" autoComplete="family-name" value={formData.lastName} onChange={(e) => handleChange("lastName", e.target.value)} className={inputClass} />
              {errors.lastName && <p className="mt-1.5 font-body text-sm text-destructive">{errors.lastName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block font-body text-sm font-medium text-foreground">
                {t.feedback.email[lang]}
              </label>
              <input id="email" name="email" type="email" autoComplete="email" value={formData.email} onChange={(e) => handleChange("email", e.target.value)} className={inputClass} />
              {errors.email && <p className="mt-1.5 font-body text-sm text-destructive">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block font-body text-sm font-medium text-foreground">
                {t.feedback.phone[lang]}
              </label>
              <input id="phone" name="phone" type="tel" autoComplete="tel" value={formData.phone} onChange={(e) => handleChange("phone", e.target.value)} className={inputClass} />
              {errors.phone && <p className="mt-1.5 font-body text-sm text-destructive">{errors.phone}</p>}
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="mb-2 block font-body text-sm font-medium text-foreground">
                {t.feedback.message[lang]}
              </label>
              <textarea id="message" name="message" rows={5} value={formData.message} onChange={(e) => handleChange("message", e.target.value)} className="w-full rounded-xl border border-input bg-background px-4 py-3 font-body text-foreground outline-none ring-offset-background transition-all duration-300 focus-visible:ring-2 focus-visible:ring-ring focus-visible:border-primary/30" />
              {errors.message && <p className="mt-1.5 font-body text-sm text-destructive">{errors.message}</p>}
            </div>

            <div className="md:col-span-2 space-y-3">
              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" checked={formData.consentData} onChange={(e) => handleChange("consentData", e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-input accent-primary" />
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {t.feedback.consentData[lang]} <span className="text-destructive">*</span>
                </span>
              </label>
              {errors.consentData && <p className="ml-7 font-body text-sm text-destructive">{errors.consentData}</p>}

              <label className="flex items-start gap-3 cursor-pointer group">
                <input type="checkbox" checked={formData.consentMarketing} onChange={(e) => handleChange("consentMarketing", e.target.checked)} className="mt-0.5 h-4 w-4 rounded border-input accent-primary" />
                <span className="font-body text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                  {t.feedback.consentMarketing[lang]}
                </span>
              </label>
            </div>

            <div className="md:col-span-2 flex justify-center">
              <button type="submit" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl gradient-primary px-8 font-body text-sm font-semibold text-primary-foreground transition-all duration-300 hover:opacity-90 hover:shadow-elegant">
                <Send className="h-4 w-4" />
                {t.feedback.submit[lang]}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FeedbackSection;
