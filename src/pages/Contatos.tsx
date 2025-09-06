import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Instagram, Clock, Send } from "lucide-react";

const Contatos = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would normally handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Entre em <span className="text-accent">Contato</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Estamos aqui para ajudar. Entre em contato conosco e descubra como 
            podemos impulsionar sua prática jurídica.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-primary mb-8">
                Informações de Contato
              </h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Email</h3>
                    <a 
                      href="mailto:geral@lbconexao.com"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      geral@lbconexao.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Telefone</h3>
                    <a 
                      href="tel:+244922600019"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      +(244) 922 600 019
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Localização</h3>
                    <p className="text-muted-foreground">Luanda, Angola</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-primary">Instagram</h3>
                    <a 
                      href="https://instagram.com/lbconexao_juridica"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-accent transition-colors"
                    >
                      @lbconexao_juridica
                    </a>
                  </div>
                </div>
              </div>

              {/* Business Hours */}
              <Card className="border-border/50">
                <CardHeader>
                  <CardTitle className="flex items-center text-primary">
                    <Clock className="w-5 h-5 mr-2 text-accent" />
                    Horário de Funcionamento
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Segunda - Sexta</span>
                      <span className="font-medium">08:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sábado</span>
                      <span className="font-medium">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Domingo</span>
                      <span className="font-medium">Fechado</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-border/50 shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">
                    Envie uma Mensagem
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">Primeiro Nome</Label>
                        <Input id="firstName" placeholder="Seu primeiro nome" required />
                      </div>
                      <div>
                        <Label htmlFor="lastName">Último Nome</Label>
                        <Input id="lastName" placeholder="Seu último nome" required />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="seu.email@exemplo.com" required />
                    </div>

                    <div>
                      <Label htmlFor="phone">Telefone</Label>
                      <Input id="phone" type="tel" placeholder="+(244) 999 999 999" />
                    </div>

                    <div>
                      <Label htmlFor="subject">Assunto</Label>
                      <Input id="subject" placeholder="Como podemos ajudar?" required />
                    </div>

                    <div>
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea 
                        id="message" 
                        placeholder="Conte-nos mais sobre sua necessidade jurídica..."
                        rows={6}
                        required 
                      />
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full bg-gradient-primary hover:bg-primary-hover text-primary-foreground"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-primary text-center mb-8">
              Nossa Localização
            </h2>
            <div className="bg-muted rounded-2xl h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-accent mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-primary mb-2">Luanda, Angola</h3>
                <p className="text-muted-foreground">
                  Mapa interativo disponível em breve
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Contatos;