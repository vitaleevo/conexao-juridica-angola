import { Button } from "@/components/ui/button";
import { ArrowRight, Scale, Users, Award, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative bg-gradient-hero text-primary-foreground overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iNCIvPjwvZz48L2c+PC9zdmc+')] opacity-20"></div>
      
      <div className="container mx-auto px-4 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 flex justify-center lg:justify-start">
              <img 
                src="/lovable-uploads/8bdeb1e2-de16-444e-87d2-0940a4d7106d.png" 
                alt="Conexão Jurídica" 
                className="w-24 h-24 object-contain"
              />
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
              Conectando 
              <span className="text-accent"> Profissionais </span>
              do Direito em Angola
            </h1>
            
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl">
              Somos uma plataforma inovadora que conecta advogados, juristas e estudantes de direito 
              em Angola, oferecendo consultoria especializada, formações práticas e eventos que fortalecem 
              nossa comunidade jurídica angolana.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
              <Button variant="hero" size="lg">
                <Scale className="mr-2 w-5 h-5" />
                Agendar Consulta
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Nossos Serviços
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <Users className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">150+</div>
                <div className="text-sm text-primary-foreground/80">Profissionais da Rede</div>
              </div>
              <div className="text-center">
                <Scale className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">50+</div>
                <div className="text-sm text-primary-foreground/80">Consultorias Realizadas</div>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">8+</div>
                <div className="text-sm text-primary-foreground/80">Anos no Mercado</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">20+</div>
                <div className="text-sm text-primary-foreground/80">Eventos Organizados</div>
              </div>
            </div>
          </div>

          {/* Image/Visual */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="bg-gradient-to-br from-accent/20 to-primary-foreground/20 rounded-2xl p-8 backdrop-blur-sm border border-primary-foreground/20">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                    <Scale className="w-8 h-8 text-accent mb-2" />
                    <h3 className="font-semibold text-sm">Consultoria Jurídica</h3>
                    <p className="text-xs text-primary-foreground/80 mt-1">Assessoria especializada</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                    <Users className="w-8 h-8 text-accent mb-2" />
                    <h3 className="font-semibold text-sm">Eventos Jurídicos</h3>
                    <p className="text-xs text-primary-foreground/80 mt-1">Networking profissional</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                    <Award className="w-8 h-8 text-accent mb-2" />
                    <h3 className="font-semibold text-sm">Formações</h3>
                    <p className="text-xs text-primary-foreground/80 mt-1">Capacitação contínua</p>
                  </div>
                  <div className="bg-primary-foreground/10 rounded-lg p-4 backdrop-blur-sm">
                    <Clock className="w-8 h-8 text-accent mb-2" />
                    <h3 className="font-semibold text-sm">Imersões Práticas</h3>
                    <p className="text-xs text-primary-foreground/80 mt-1">Experiência real</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;