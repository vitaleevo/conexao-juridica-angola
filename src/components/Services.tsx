import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Scale, Users, Calendar, BookOpen, Award, ArrowRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Scale,
      title: "Consultoria Jurídica",
      description: "Assessoria especializada adaptada à legislação angolana, com foco em soluções práticas para empresas nacionais e internacionais.",
      features: ["Direito Comercial Angolano", "Contratos e Parcerias", "Licenciamento Empresarial", "Direito Fiscal e Tributário"],
    },
    {
      icon: Users,
      title: "Assessoria Empresarial",
      description: "Acompanhamento jurídico completo para empreendedores e empresários que querem crescer no mercado angolano.",
      features: ["Constituição no RUPE", "Licenças e Alvarás", "Direito do Trabalho", "Resolução de Conflitos"],
    },
    {
      icon: Calendar,
      title: "Eventos Jurídicos",
      description: "Encontros profissionais que promovem networking e atualização sobre as mudanças no direito angolano.",
      features: ["Conferências Jurídicas", "Workshops Práticos", "Mesa Redonda", "Debates sobre Legislação"],
    },
    {
      icon: BookOpen,
      title: "Programa de Mentoria",
      description: "Acompanhamento personalizado para jovens advogados e estudantes de direito em Angola.",
      features: ["Casos Práticos", "Orientação Profissional", "Simulação de Tribunais", "Networking Orientado"],
    },
    {
      icon: Award,
      title: "Formações Especializadas",
      description: "Cursos e capacitações focados nas particularidades do sistema jurídico e empresarial angolano.",
      features: ["Direito Angolano Atual", "Práticas Forenses", "Novos Diplomas Legais", "Certificação Profissional"],
    },
  ];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground">
            Oferecemos soluções jurídicas completas para profissionais, empresas e estudantes 
            em Angola, conectando conhecimento e experiência prática.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card key={index} className="group hover:shadow-elegant transition-all duration-300 border-border/50 hover:border-accent/50">
                <CardHeader className="pb-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <IconComponent className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <CardTitle className="text-xl text-primary group-hover:text-accent transition-colors">
                    {service.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                        <ArrowRight className="w-4 h-4 text-accent mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="w-full group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    Saiba Mais
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground shadow-elegant">
            Ver Todos os Serviços
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;