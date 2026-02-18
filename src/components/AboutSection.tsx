import { Lightbulb, Wrench, Droplets, TreePine, Shield, Clock } from "lucide-react";

const features = [
  { icon: Lightbulb, label: "Luminárias LED", desc: "Iluminação profissional para áreas públicas e industriais" },
  { icon: Droplets, label: "Materiais Hidráulicos", desc: "Tubulações PEAD e conexões de alta qualidade" },
  { icon: Wrench, label: "Ferragens", desc: "Ferramentas e materiais para construção e manutenção" },
  { icon: TreePine, label: "Produtos Ecológicos", desc: "Mobiliário e soluções em materiais reciclados" },
  { icon: Shield, label: "Confiança", desc: "Fornecedor homologado por órgãos públicos e prefeituras" },
  { icon: Clock, label: "Agilidade", desc: "Entrega rápida e atendimento personalizado" },
];

const stats = [
  { number: "🚀", label: "Entrega Rápida" },
  { number: "💰", label: "Preço Competitivo" },
  { number: "🤝", label: "Atendimento Personalizado" },
  { number: "✅", label: "Qualidade Garantida" },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding section-alt">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
            Sobre Nós
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6">
            Confiança, Agilidade e Qualidade
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A KDM é especializada no fornecimento de materiais elétricos, hidráulicos, luminárias LED, 
            playgrounds e mobiliários ecológicos. Atendemos órgãos públicos, prefeituras, indústrias e 
            empresas em todo o Brasil, com sede em Bragança Paulista, SP.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center p-6 glass-card rounded-lg">
              <div className="stat-number mb-2">{stat.number}</div>
              <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Features grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat) => (
            <div
              key={feat.label}
              className="flex items-start gap-4 p-6 rounded-lg bg-card border border-border transition-shadow hover:shadow-md"
            >
              <div className="shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                <feat.icon className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">{feat.label}</h3>
                <p className="text-sm text-muted-foreground">{feat.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
