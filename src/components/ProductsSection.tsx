import { Link } from "react-router-dom";
import productLed from "@/assets/product-led.jpg";
import productHydraulic from "@/assets/product-hydraulic-new.jpeg";
import productPlayground from "@/assets/product-playground-new.jpeg";
import productEco from "@/assets/product-eco.jpg";
import productElectrical from "@/assets/product-electrical-new.jpeg";
import productHardware from "@/assets/product-hardware.jpg";

const products = [
  {
    image: productLed,
    title: "Luminárias LED Profissionais",
    desc: "Iluminação profissional em LED para áreas públicas, privadas e industriais.",
  },
  {
    image: productElectrical,
    title: "Materiais Elétricos",
    desc: "Materiais elétricos para baixa e alta tensão.",
  },
  {
    image: productPlayground,
    title: "Playgrounds",
    desc: "Playgrounds para praças, escolas e condomínios.",
  },
  {
    image: productEco,
    title: "Móveis em Madeira Plástica Ecológica",
    desc: "Lixeiras, bancos para jardins e praças, pergolados, decks e ripados.",
  },
  {
    image: productHydraulic,
    title: "Materiais Hidráulicos",
    desc: "Tubos PEAD, conexões e outros materiais hidráulicos.",
  },
  {
    image: productHardware,
    title: "EPIs e Uniformes",
    desc: "Equipamentos de proteção individual e uniformes profissionais.",
  },
  {
    image: productHardware,
    title: "Tintas e Acessórios",
    desc: "Tintas e todos os seus segmentos para obras e acabamentos.",
  },
  {
    image: productHardware,
    title: "Ferragens, Ferramentas, Máquinas e Equipamentos",
    desc: "Ferragens, ferramentas, máquinas e equipamentos para construção e indústria.",
  },
];

const ProductsSection = () => {
  return (
    <section id="produtos" className="section-padding">
      <div className="container mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-secondary text-sm font-semibold tracking-widest uppercase mb-3">
            Nossos Produtos
          </p>
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            Soluções Completas para Sua Necessidade
          </h2>
          <p className="text-muted-foreground text-lg">
            Conheça nossa linha completa de produtos para obras públicas, indústrias e condomínios.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.title} className="product-card group">
              <div className="aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
              <div className="product-card-overlay group-hover:opacity-100">
                <Link
                  to="/contato"
                  className="rounded-md bg-secondary px-6 py-2.5 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
                >
                  Solicitar Orçamento
                </Link>
              </div>
              <div className="p-5">
                <h3 className="font-heading font-semibold text-foreground mb-2">{product.title}</h3>
                <p className="text-sm text-muted-foreground">{product.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contato"
            className="inline-block rounded-md bg-primary px-10 py-3.5 text-base font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            Solicite um Orçamento
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
