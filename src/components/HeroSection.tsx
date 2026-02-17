import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroImage from "@/assets/hero-1.jpg";
import productLed from "@/assets/product-led.jpg";
import productPlayground from "@/assets/product-playground.jpg";

const slides = [
  {
    image: heroImage,
    title: "Inovações em Iluminação LED",
    subtitle: "Soluções profissionais para praças, vias públicas e indústrias",
  },
  {
    image: productLed,
    title: "Materiais Elétricos e Hidráulicos",
    subtitle: "Qualidade e confiança para seus projetos de infraestrutura",
  },
  {
    image: productPlayground,
    title: "Playgrounds e Mobiliário Ecológico",
    subtitle: "Sustentabilidade e diversão para espaços públicos",
  },
];

const HeroSection = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (dir: number) => {
    setCurrent((prev) => (prev + dir + slides.length) % slides.length);
  };

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="absolute inset-0 w-full h-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
          />
        </div>
      ))}

      <div className="hero-overlay absolute inset-0" />

      <div className="relative z-10 container mx-auto h-full flex flex-col justify-center px-4">
        <div className="max-w-2xl">
          <p
            className="text-secondary text-sm font-semibold tracking-widest uppercase mb-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Mais de 20 anos de experiência
          </p>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground leading-tight mb-6 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            {slides[current].title}
          </h1>
          <p
            className="text-lg md:text-xl text-primary-foreground/85 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            {slides[current].subtitle}
          </p>
          <div
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <Link
              to="/contato"
              className="rounded-md bg-secondary px-8 py-3 text-base font-semibold text-secondary-foreground transition-transform hover:scale-105"
            >
              Solicite um Orçamento
            </Link>
            <a
              href="#produtos"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById("produtos")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="rounded-md border border-primary-foreground/30 px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Ver Produtos
            </a>
          </div>
        </div>
      </div>

      {/* Slide controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button onClick={() => goTo(-1)} className="p-2 text-primary-foreground/70 hover:text-primary-foreground" aria-label="Anterior">
          <ChevronLeft size={20} />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2.5 h-2.5 rounded-full transition-all ${
                i === current ? "bg-secondary w-8" : "bg-primary-foreground/40"
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
        <button onClick={() => goTo(1)} className="p-2 text-primary-foreground/70 hover:text-primary-foreground" aria-label="Próximo">
          <ChevronRight size={20} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
