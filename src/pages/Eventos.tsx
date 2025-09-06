import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Users, Clock, ArrowRight } from "lucide-react";

const Eventos = () => {
  const upcomingEvents = [
    {
      title: "Conferência Anual de Direito Empresarial",
      date: "15 de Dezembro, 2024",
      time: "09:00 - 17:00",
      location: "Hotel Presidente, Luanda",
      attendees: "200+",
      description: "O maior evento jurídico do ano em Angola, reunindo especialistas nacionais e internacionais.",
      status: "Inscrições Abertas",
      price: "$150"
    },
    {
      title: "Workshop: Compliance e Governança Corporativa",
      date: "22 de Novembro, 2024",
      time: "14:00 - 18:00", 
      location: "Centro de Convenções Epic Sana",
      attendees: "50",
      description: "Workshop prático sobre implementação de programas de compliance em empresas angolanas.",
      status: "Últimas Vagas",
      price: "$80"
    },
    {
      title: "Mesa Redonda: Direito Tributário Angolano",
      date: "05 de Outubro, 2024",
      time: "16:00 - 19:00",
      location: "Auditório da Universidade Católica",
      attendees: "100",
      description: "Discussão sobre as recentes alterações na legislação tributária em Angola.",
      status: "Confirmado",
      price: "Gratuito"
    }
  ];

  const pastEvents = [
    {
      title: "Fórum de Direito Laboral 2024",
      date: "Maio 2024",
      description: "Sucesso total com mais de 300 participantes discutindo as novas tendências do direito laboral.",
      image: "💼"
    },
    {
      title: "Imersão Prática em Tribunais",
      date: "Março 2024",
      description: "Experiência única de acompanhamento de casos reais nos tribunais de Luanda.",
      image: "⚖️"
    },
    {
      title: "Certificação em Mediação e Arbitragem",
      date: "Janeiro 2024",
      description: "Primeira turma de mediadores certificados pela Conexão Jurídica em Angola.",
      image: "🏆"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Eventos <span className="text-accent">Jurídicos</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Conecte-se com os melhores profissionais do direito em Angola através 
            dos nossos eventos exclusivos e formações especializadas.
          </p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary mb-4">
              Próximos Eventos
            </h2>
            <p className="text-xl text-muted-foreground">
              Não perca as oportunidades de networking e aprendizado que estão por vir
            </p>
          </div>

          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-20">
            {upcomingEvents.map((event, index) => (
              <Card key={index} className="border-border/50 hover:shadow-elegant transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      event.status === 'Inscrições Abertas' 
                        ? 'bg-green-100 text-green-800'
                        : event.status === 'Últimas Vagas'
                        ? 'bg-orange-100 text-orange-800'
                        : 'bg-blue-100 text-blue-800'
                    }`}>
                      {event.status}
                    </span>
                    <span className="text-lg font-bold text-accent">{event.price}</span>
                  </div>
                  <CardTitle className="text-xl text-primary line-clamp-2">
                    {event.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {event.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4 mr-2 text-accent" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2 text-accent" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4 mr-2 text-accent" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Users className="w-4 h-4 mr-2 text-accent" />
                      {event.attendees} participantes
                    </div>
                  </div>
                  <Button className="w-full bg-gradient-primary hover:bg-primary-hover text-primary-foreground">
                    Inscrever-se Agora
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Past Events */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-primary mb-4">Eventos Realizados</h2>
            <p className="text-xl text-muted-foreground">
              Relembre alguns dos nossos eventos de sucesso
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {pastEvents.map((event, index) => (
              <Card key={index} className="border-border/50 hover:shadow-elegant transition-all">
                <CardContent className="p-6">
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-3">{event.image}</div>
                    <h3 className="font-semibold text-primary mb-2">{event.title}</h3>
                    <p className="text-sm text-accent font-medium mb-3">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Event Types */}
          <div className="bg-secondary/30 rounded-2xl p-8 lg:p-12">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-primary mb-4">Tipos de Eventos</h2>
              <p className="text-xl text-muted-foreground">
                Diversas modalidades para atender todas as necessidades profissionais
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Conferências</h3>
                <p className="text-sm text-muted-foreground">
                  Eventos anuais com especialistas nacionais e internacionais
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Workshops</h3>
                <p className="text-sm text-muted-foreground">
                  Sessões práticas e interativas para desenvolvimento de habilidades
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-accent rounded-xl flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-accent-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Networking</h3>
                <p className="text-sm text-muted-foreground">
                  Encontros para conexões profissionais e troca de experiências
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-primary mb-2">Webinars</h3>
                <p className="text-sm text-muted-foreground">
                  Palestras online sobre temas jurídicos atuais e relevantes
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

export default Eventos;