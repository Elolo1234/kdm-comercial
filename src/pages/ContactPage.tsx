import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send, CheckCircle, Mail, Phone, MapPin } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import emailjs from "@emailjs/browser";

  const contactSchema = z.object({
  nome: z.string().trim().min(1, "Nome é obrigatório").max(100),
  email: z.string().trim().email("E-mail inválido").max(255),
  telefone: z.string().trim().min(1, "Telefone é obrigatório").max(20),
  
  interesse: z.string().min(1, "Selecione um segmento"),
  mensagem: z.string().trim().max(1000).optional(),
});

type ContactFormData = z.infer<typeof contactSchema>;

const interesses = [
  "Luminárias LED",
  "Materiais Hidráulicos",
  "Materiais Elétricos",
  "Playgrounds",
  "Mobiliário Ecológico",
  "Ferragens e Ferramentas",
  "Outro",
];

const ContactPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
  try {
    await emailjs.send(
      "service_7ghdwlp",
      "template_99ir8iz",
      {
        nome: data.nome,
        email: data.email,
        telefone: data.telefone,
        interesse: data.interesse,
        mensagem: data.mensagem,
      },
      "pvzUuWyEMOoLt2rdB"
    );

    setSubmitted(true);

  } catch (error) {
    console.error("Erro ao enviar:", error);
  }
};

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 pt-24 section-padding">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
              Contato
            </p>
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              Fale Conosco
            </h1>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Preencha seus dados e retornaremos o contato rapidamente.
            </p>
          </div>

          {submitted ? (
            <div className="max-w-md mx-auto text-center py-16 animate-fade-in-up">
              <CheckCircle className="w-16 h-16 text-secondary mx-auto mb-6" />
              <h2 className="text-2xl font-heading font-bold text-foreground mb-3">
                Obrigado!
              </h2>
              <p className="text-muted-foreground">
                Sua solicitação foi enviada com sucesso. Entraremos em contato em breve.
              </p>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-10">
              {/* Form */}
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="lg:col-span-2 space-y-6"
              >
                {/* Personal */}
                <fieldset>
                  <legend className="font-heading font-semibold text-foreground mb-4">
                    Dados Pessoais
                  </legend>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">
                      Nome *
                    </label>
                    <input
                      {...register("nome")}
                      className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      placeholder="Seu nome"
                    />
                    {errors.nome && <p className="text-destructive text-xs mt-1">{errors.nome.message}</p>}
                  </div>
                </fieldset>

                {/* Contact */}
                <fieldset>
                  <legend className="font-heading font-semibold text-foreground mb-4">
                    Contato
                  </legend>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">E-mail *</label>
                      <input
                        {...register("email")}
                        type="email"
                        className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="seu@email.com"
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Telefone *</label>
                      <input
                        {...register("telefone")}
                        className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                        placeholder="(11) 00000-0000"
                      />
                      {errors.telefone && <p className="text-destructive text-xs mt-1">{errors.telefone.message}</p>}
                    </div>
                  </div>
                </fieldset>

                {/* Interest */}
                <fieldset>
                  <legend className="font-heading font-semibold text-foreground mb-4">
                    Interesse
                  </legend>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Segmento *</label>
                      <select
                        {...register("interesse")}
                        className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                      >
                        <option value="">Selecione um segmento</option>
                        {interesses.map((item) => (
                          <option key={item} value={item}>{item}</option>
                        ))}
                      </select>
                      {errors.interesse && <p className="text-destructive text-xs mt-1">{errors.interesse.message}</p>}
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Mensagem</label>
                      <textarea
                        {...register("mensagem")}
                        rows={4}
                        className="w-full rounded-md border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                        placeholder="Descreva sua necessidade..."
                      />
                    </div>
                  </div>
                </fieldset>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center gap-2 rounded-md bg-primary px-10 py-3 text-base font-semibold text-primary-foreground transition-transform hover:scale-105 disabled:opacity-50"
                >
                  <Send size={18} />
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                </button>
              </form>

              {/* Sidebar */}
              <aside className="space-y-6">
                <div className="glass-card rounded-lg p-6 space-y-4">
                  <h3 className="font-heading font-semibold text-foreground">Informações</h3>
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <MapPin size={18} className="shrink-0 text-primary mt-0.5" />
                      <span>Bragança Paulista, SP</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone size={18} className="shrink-0 text-primary mt-0.5" />
                      <span>(11) 99674-1222</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail size={18} className="shrink-0 text-primary mt-0.5" />
                      <span>arcmcomercial@gmail.com</span>
                    </div>
                  </div>
                </div>
                <div className="glass-card rounded-lg p-6">
                  <h3 className="font-heading font-semibold text-foreground mb-2">Horário</h3>
                  <p className="text-sm text-muted-foreground">
                    Segunda a Sexta: 8h às 18h<br />
                    Sábado: 8h às 12h
                  </p>
                </div>
              </aside>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;
