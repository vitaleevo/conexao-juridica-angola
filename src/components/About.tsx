import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Eye, Heart, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      description: "Fortalecer a comunidade jurídica angolana através de conexões profissionais, consultoria especializada no direito angolano e eventos que promovam a excelência e o desenvolvimento contínuo dos profissionais.",
    },
    {
      icon: Eye,
      title: "Visão",
      description: "Ser a referência em Angola para profissionais do direito que buscam crescimento, networking qualificado e soluções jurídicas inovadoras adaptadas à realidade socioeconómica angolana.",
    },
    {
      icon: Heart,
      title: "Valores",
      description: "Comprometemo-nos com a ética, transparência e excelência. Valorizamos a cultura angolana, promovemos a colaboração entre pares e investimos no desenvolvimento sustentável da nossa comunidade jurídica.",
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
                Fundada pelo <strong className="text-primary">Dr. Luis Bastos</strong>, a 
                <strong className="text-primary"> Conexão Jurídica</strong> nasceu da necessidade de criar 
                uma verdadeira rede de apoio entre profissionais do direito em Angola, onde conhecimento, 
                experiência e oportunidades são compartilhados de forma colaborativa.
              </p>
              
              <p className="text-muted-foreground">
                Sediados em <strong className="text-primary">Luanda</strong>, atuamos em todo território nacional, 
                oferecendo consultoria jurídica especializada nas áreas do direito empresarial, civil, laboral 
                e tributário angolano. Organizamos eventos, workshops e formações que abordam os desafios 
                reais do exercício da advocacia no contexto socioeconómico angolano.
              </p>
              
              <p className="text-muted-foreground">
                Acreditamos que o <strong className="text-primary">crescimento coletivo</strong> da nossa classe 
                profissional fortalece o sistema judiciário angolano. Por isso, criamos pontes entre 
                <strong className="text-primary"> profissionais experientes</strong> e jovens juristas, 
                promovendo mentorias e oportunidades de desenvolvimento que respeitam nossa cultura e tradições jurídicas.
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
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">150+</div>
              <div className="text-sm text-primary-foreground/80">Profissionais na Rede</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">80+</div>
              <div className="text-sm text-primary-foreground/80">Consultorias Concluídas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-sm text-primary-foreground/80">Eventos Realizados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-accent mb-2">8+</div>
              <div className="text-sm text-primary-foreground/80">Anos de Experiência</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;