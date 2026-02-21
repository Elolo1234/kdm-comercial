import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
import logoKdm from "@/assets/logo-kdm.jpeg";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto section-padding !py-12">
        <div className="grid md:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <img src={logoKdm} alt="KDM Representações" className="h-10 w-auto" />
            <p className="mt-3 text-sm text-background/70 leading-relaxed">
              Mais de 20 anos de experiência em fornecimento de materiais elétricos, hidráulicos, 
              luminárias LED e soluções ecológicas.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li><Link to="/" className="hover:text-background transition-colors">Início</Link></li>
              <li><Link to="/#sobre" className="hover:text-background transition-colors">Sobre Nós</Link></li>
              <li><Link to="/#produtos" className="hover:text-background transition-colors">Produtos</Link></li>
              <li><Link to="/contato" className="hover:text-background transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold mb-4">Contato</h4>
            <ul className="space-y-3 text-sm text-background/70">
              <li className="flex items-center gap-2">
                <MapPin size={16} className="shrink-0" />
                Bragança Paulista, SP
              </li>
              <li className="flex items-center gap-2">
              <Phone size={16} className="shrink-0" />
                (11) 99674-1222
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="shrink-0" />
                arcmcomercial@gmail.com
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-background/15 text-center text-xs text-background/50">
          © {new Date().getFullYear()} KDM Materiais &amp; Soluções. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
