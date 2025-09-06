import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Heart, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Conectar profissionais do direito em Angola, oferecendo serviços jurídicos especializados e eventos que promovam o desenvolvimento profissional e o networking.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a principal plataforma de conexão jurídica em Angola, reconhecida pela excelência em serviços e pela contribuição ao desenvolvimento do setor jurídico nacional.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Integridade, Excelência, Inovação, Colaboração e Compromisso com o desenvolvimento profissional dos nossos parceiros e clientes.",
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="mb-6">
              <span className="text-accent font-semibold">Sobre Nós</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-primary mt-2 mb-4">
                Luis Bastos - Conexão Jurídica
              </h2>
              <p className="text-xl text-muted-foreground">
                Liderando a transformação do mercado jurídico em Angola
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-muted-foreground">
                A <strong className="text-primary">Conexão Jurídica</strong> é um projeto inovador liderado por 
                <strong className="text-primary"> Luis Bastos</strong>, focado em revolucionar a forma como 
                profissionais do direito se conectam e desenvolvem suas carreiras em Angola.
              </p>
              
              <p className="text-muted-foreground">
                Com sede em <strong className="text-primary">Luanda</strong>, oferecemos uma gama completa de 
                serviços que incluem consultoria jurídica especializada, assessoria empresarial estratégica, 
                organização de eventos jurídicos de alta qualidade e programas de formação que preparam 
                profissionais para os desafios do mercado angolano.
              </p>
              
              <p className="text-muted-foreground">
                Nossa abordagem combina <strong className="text-primary">experiência prática</strong> com 
                <strong className="text-primary"> inovação</strong>, criando oportunidades únicas de networking 
                e desenvolvimento profissional que elevam o padrão da prática jurídica em Angola.
              </p>
            </div>

            <Button size="lg" className="bg-gradient-accent hover:bg-accent-hover text-accent-foreground">
              Conheça Nossa História
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>

          {/* Values Cards */}
          <div className="space-y-6">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="border-border/50 hover:border-accent/50 transition-colors hover:shadow-elegant">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-primary mb-2">
                          {value.title}
                        </h3>
                        <p className="text-muted-foreground text-sm">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-gradient-primary rounded-2xl p-8 lg:p-12 text-primary-foreground">
          <div className="text-center mb-12">
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Nossos Números Falam por Si
            </h3>
            <p className="text-primary-foreground/80">
              Resultados que demonstram nosso compromisso com a excelência
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">500+</div>
              <div className="text-sm text-primary-foreground/80">Profissionais Conectados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">100+</div>
              <div className="text-sm text-primary-foreground/80">Projetos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">50+</div>
              <div className="text-sm text-primary-foreground/80">Eventos Organizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">15+</div>
              <div className="text-sm text-primary-foreground/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;