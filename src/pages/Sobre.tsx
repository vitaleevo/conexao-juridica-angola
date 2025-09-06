import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Eye, Heart, Award, Scale, Mail } from "lucide-react";

const Sobre = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Sobre a <span className="text-accent">Conexão Jurídica</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Conheça a história, missão e valores que nos guiam na transformação 
            do mercado jurídico em Angola.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            {/* Story */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-6">
                Nossa História
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  A <strong className="text-primary">Conexão Jurídica</strong> nasceu da visão de 
                  <strong className="text-primary"> Luis Bastos</strong> de criar uma plataforma 
                  que verdadeiramente conectasse profissionais do direito em Angola, oferecendo 
                  não apenas serviços jurídicos de excelência, mas também oportunidades de 
                  crescimento e desenvolvimento profissional.
                </p>
                
                <p>
                  Com mais de <strong className="text-primary">15 anos de experiência</strong> no 
                  mercado jurídico angolano, Luis Bastos identificou a necessidade de criar um 
                  espaço onde profissionais pudessem não apenas receber consultoria especializada, 
                  mas também participar de eventos enriquecedores e formações que os preparassem 
                  para os desafios do mercado moderno.
                </p>
                
                <p>
                  Desde nossa fundação em Luanda, temos sido pioneiros na organização de eventos 
                  jurídicos de alto nível, oferecendo <strong className="text-primary">imersões 
                  práticas</strong> únicas e <strong className="text-primary">assessoria 
                  empresarial</strong> estratégica que tem ajudado centenas de profissionais 
                  e empresas a alcançarem seus objetivos.
                </p>
              </div>
            </div>

            {/* Image Placeholder */}
            <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 text-center">
              <Scale className="w-24 h-24 text-accent mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-primary mb-2">Luis Bastos</h3>
              <p className="text-muted-foreground">Fundador e Líder da Conexão Jurídica</p>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <Card className="text-center border-border/50 hover:shadow-elegant transition-all">
              <CardContent className="p-8">
                <Target className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-4">Missão</h3>
                <p className="text-muted-foreground">
                  Conectar profissionais do direito em Angola, oferecendo serviços jurídicos 
                  especializados e eventos que promovam o desenvolvimento profissional e o networking.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-elegant transition-all">
              <CardContent className="p-8">
                <Eye className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-4">Visão</h3>
                <p className="text-muted-foreground">
                  Ser a principal plataforma de conexão jurídica em Angola, reconhecida pela 
                  excelência em serviços e pela contribuição ao desenvolvimento do setor jurídico nacional.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-elegant transition-all">
              <CardContent className="p-8">
                <Heart className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-bold text-primary mb-4">Valores</h3>
                <p className="text-muted-foreground">
                  Integridade, Excelência, Inovação, Colaboração e Compromisso com o 
                  desenvolvimento profissional dos nossos parceiros e clientes.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Team Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Nossa Equipe</h2>
            <p className="text-xl text-muted-foreground">
              Profissionais experientes dedicados à excelência jurídica
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            <Card className="text-center border-border/50 hover:shadow-elegant transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Luis Bastos</h3>
                <p className="text-accent font-medium mb-2">Fundador & CEO</p>
                <p className="text-sm text-muted-foreground">
                  Mais de 15 anos de experiência em direito empresarial e consultoria jurídica em Angola.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-elegant transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-10 h-10 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Equipe Jurídica</h3>
                <p className="text-accent font-medium mb-2">Advogados Especialistas</p>
                <p className="text-sm text-muted-foreground">
                  Profissionais altamente qualificados em diversas áreas do direito angolano.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border/50 hover:shadow-elegant transition-all">
              <CardContent className="p-8">
                <div className="w-20 h-20 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">Consultores</h3>
                <p className="text-accent font-medium mb-2">Especialistas Setoriais</p>
                <p className="text-sm text-muted-foreground">
                  Consultores especializados em diversos setores da economia angolana.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-primary rounded-2xl p-12 text-center text-primary-foreground">
            <h2 className="text-3xl font-bold mb-4">Pronto para se Conectar?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco e descubra como podemos ajudar a impulsionar 
              sua carreira ou empresa no mercado jurídico angolano.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent-hover text-accent-foreground">
              <Mail className="mr-2 w-5 h-5" />
              Entre em Contato
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Sobre;