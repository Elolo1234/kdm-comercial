import { Lightbulb, Wrench, Droplets, TreePine, Shield, Clock } from "lucide-react";

const features = [
  { icon: Lightbulb, label: "Luminárias LED", desc: "Iluminação profissional para áreas públicas e industriais" },
  { icon: Droplets, label: "Materiais Hidráulicos", desc: "Tubulações PEAD e conexões de alta qualidade" },
  { icon: Wrench, label: "Ferragens", desc: "Ferramentas e materiais para construção e manutenção" },
  { icon: TreePine, label: "Produtos Ecológicos", desc: "Mobiliário e soluções em materiais reciclados" },
  { icon: Shield, label: "Confiança", desc: "Fornecedor homologado por órgãos públicos e prefeituras" },
  { icon: Clock, label: "Agilidade", desc: "Entrega rápida e atendimento personalizado" },
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
            Confiança, Agilidade, Qualidade, Parceria e Respeito 
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A empresa kdm comercial representações e serviços, empresa com mais de 20 anos de experiência,ofereço confiança, agilidade,  parceria, respeito e qualidade dos produtos, buscando sempre inovações, atendendo a diversos clientes como: órgãos públicos, prefeituras, construções, condomínio, indústrias e clientes privados. KDM é especializada no fornecimento de materiais elétricos, hidráulicos, luminárias LED, 
            playgrounds e mobiliários ecológicos.
          </p>
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
