import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Scale, Users, Calendar, BookOpen, Award, ArrowRight, Check } from "lucide-react";

const Servicos = () => {
  const services = [
    {
      icon: Scale,
      title: "Consultoria Jurídica",
      description: "Assessoria especializada para empresas e instituições com foco em soluções estratégicas e conformidade legal.",
      features: [
        "Direito Empresarial e Societário",
        "Elaboração e Revisão de Contratos",
        "Compliance e Governança Corporativa",
        "Consultoria Tributária e Fiscal",
        "Due Diligence Legal",
        "Propriedade Intelectual"
      ],
      price: "Consulta personalizada",
    },
    {
      icon: Users,
      title: "Assessoria Empresarial",
      description: "Suporte jurídico estratégico para o crescimento sustentável do seu negócio em Angola.",
      features: [
        "Constituição de Empresas",
        "Licenciamento e Alvarás",
        "Direito Laboral e Recursos Humanos",
        "Mediação e Arbitragem",
        "Reestruturação Empresarial",
        "Fusões e Aquisições"
      ],
      price: "Pacotes flexíveis",
    },
    {
      icon: Calendar,
      title: "Eventos Jurídicos",
      description: "Organização de fóruns, palestras e conferências de alto nível para networking profissional.",
      features: [
        "Conferências Jurídicas Nacionais",
        "Workshops Especializados",
        "Eventos de Networking",
        "Palestras com Especialistas",
        "Mesa Redonda Temática",
        "Certificação Profissional"
      ],
      price: "Sob consulta",
    },
    {
      icon: BookOpen,
      title: "Imersões Práticas",
      description: "Experiências únicas de aprendizado prático para profissionais e estudantes de direito.",
      features: [
        "Acompanhamento de Casos Reais",
        "Mentoria Personalizada",
        "Prática em Tribunais",
        "Simulações Jurídicas",
        "Estágios Supervisionados",
        "Projeto Final Prático"
      ],
      price: "Programas mensais",
    },
    {
      icon: Award,
      title: "Formações Especializadas",
      description: "Capacitações avançadas para profissionais que desejam se destacar no mercado jurídico.",
      features: [
        "Cursos Online Certificados",
        "Especializações Temáticas",
        "Atualizações Legais Mensais",
        "Biblioteca Digital Jurídica",
        "Webinars Exclusivos",
        "Certificado de Conclusão"
      ],
      price: "A partir de $150",
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Nossos <span className="text-accent">Serviços</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Oferecemos soluções jurídicas completas e inovadoras para profissionais, 
            empresas e estudantes em Angola.
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          {/* Services Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="border-border/50 hover:shadow-elegant transition-all duration-300 h-full">
                  <CardHeader className="pb-4">
                    <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                      <IconComponent className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <CardTitle className="text-xl text-primary">
                      {service.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start text-sm">
                          <Check className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="border-t border-border/50 pt-4">
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-sm text-muted-foreground">Preço:</span>
                        <span className="font-semibold text-accent">{service.price}</span>
                      </div>
                      <Button className="w-full bg-gradient-primary hover:bg-primary-hover text-primary-foreground">
                        Solicitar Orçamento
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12 mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Como Trabalhamos</h2>
              <p className="text-xl text-muted-foreground">
                Um processo estruturado e transparente para garantir os melhores resultados
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">1</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Consulta Inicial</h3>
                <p className="text-sm text-muted-foreground">
                  Análise detalhada das suas necessidades jurídicas
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">2</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Proposta Personalizada</h3>
                <p className="text-sm text-muted-foreground">
                  Desenvolvimento de soluções sob medida
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-accent-foreground">3</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Execução</h3>
                <p className="text-sm text-muted-foreground">
                  Implementação com acompanhamento constante
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">4</span>
                </div>
                <h3 className="font-semibold text-primary mb-2">Follow-up</h3>
                <p className="text-sm text-muted-foreground">
                  Suporte contínuo e monitoramento de resultados
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Pronto para Começar?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco para uma consulta gratuita e descubra como 
              podemos impulsionar seu sucesso jurídico em Angola.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
                Consulta Gratuita
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
                Ver Portfólio
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Servicos;