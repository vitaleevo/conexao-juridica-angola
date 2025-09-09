import { Scale, Mail, Phone, Instagram, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <Scale className="w-6 h-6 text-accent-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl text-accent">CONEXÃO</span>
                <span className="text-sm text-primary-foreground/80 -mt-1">Jurídica</span>
              </div>
            </div>
            <p className="text-primary-foreground/80 mb-6 max-w-md">
              Fortalecemos a comunidade jurídica angolana através de consultoria especializada, 
              eventos de qualidade e formações que respeitam nossa cultura e sistema legal.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com/lbconexao_juridica" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-primary-foreground/10 rounded-lg flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/sobre" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link to="/servicos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Serviços
                </Link>
              </li>
              <li>
                <Link to="/eventos" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Eventos
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-primary-foreground/80 hover:text-accent transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-accent">Contactos</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="mailto:geral@lbconexao.com"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  geral@lbconexao.com
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <a 
                  href="tel:+244922600019"
                  className="text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  +(244) 922 600 019
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  Rua Kwame Nkrumah, Maianga<br />
                  Luanda, Angola
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © {currentYear} Conexão Jurídica - Luis Bastos. Todos os direitos reservados.
          </p>
          <div className="flex space-x-6 text-sm">
            <Link to="/privacidade" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Política de Privacidade
            </Link>
            <Link to="/termos" className="text-primary-foreground/60 hover:text-accent transition-colors">
              Termos de Uso
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;