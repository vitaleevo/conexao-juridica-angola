import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Scale, Phone, User } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { user, isAdmin } = useAuth();

  const navigation = [
    { name: "Início", href: "/" },
    { name: "Sobre", href: "/sobre" },
    { name: "Serviços", href: "/servicos" },
    { name: "Eventos", href: "/eventos" },
    { name: "Blog", href: "/blog" },
    { name: "Contatos", href: "/contatos" },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border/50 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img 
              src="/lovable-uploads/8bdeb1e2-de16-444e-87d2-0940a4d7106d.png" 
              alt="LB Conexão Jurídica" 
              className="w-12 h-12 rounded-full"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg text-primary">CONEXÃO</span>
              <span className="text-sm text-muted-foreground -mt-1">Jurídica</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive(item.href) 
                    ? "text-accent" 
                    : "text-muted-foreground"
                }`}
              >
                {item.name}
              </Link>
            ))}
            {isAdmin && (
              <Link
                to="/admin"
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  isActive("/admin") 
                    ? "text-accent" 
                    : "text-muted-foreground"
                }`}
              >
                Admin
              </Link>
            )}
          </div>

          {/* Contact Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+244922600019" className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span>+(244) 922 600 019</span>
              </a>
            </Button>
            {!user ? (
              <>
                <Link to="/login">
                  <Button variant="outline" size="sm">
                    <User className="w-4 h-4 mr-2" />
                    Login
                  </Button>
                </Link>
                <Button className="bg-gradient-accent hover:bg-accent-hover text-accent-foreground">
                  Consulta Gratuita
                </Button>
              </>
            ) : (
              <Button className="bg-gradient-accent hover:bg-accent-hover text-accent-foreground">
                Consulta Gratuita
              </Button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border/50 py-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-accent px-2 py-1 ${
                    isActive(item.href) 
                      ? "text-accent" 
                      : "text-muted-foreground"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              {isAdmin && (
                <Link
                  to="/admin"
                  onClick={() => setIsOpen(false)}
                  className={`text-base font-medium transition-colors hover:text-accent px-2 py-1 ${
                    isActive("/admin") 
                      ? "text-accent" 
                      : "text-muted-foreground"
                  }`}
                >
                  Admin
                </Link>
              )}
              <div className="flex flex-col space-y-2 pt-4 border-t border-border/50">
                <Button variant="outline" size="sm" asChild>
                  <a href="tel:+244922600019" className="flex items-center justify-center space-x-2">
                    <Phone className="w-4 h-4" />
                    <span>+(244) 922 600 019</span>
                  </a>
                </Button>
                {!user ? (
                  <>
                    <Link to="/login" onClick={() => setIsOpen(false)}>
                      <Button variant="outline" size="sm" className="w-full">
                        <User className="w-4 h-4 mr-2" />
                        Login
                      </Button>
                    </Link>
                    <Button className="bg-gradient-accent hover:bg-accent-hover text-accent-foreground">
                      Consulta Gratuita
                    </Button>
                  </>
                ) : (
                  <Button className="bg-gradient-accent hover:bg-accent-hover text-accent-foreground">
                    Consulta Gratuita
                  </Button>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;