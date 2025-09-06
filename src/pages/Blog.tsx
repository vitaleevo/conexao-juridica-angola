import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, ArrowRight, Search, BookOpen } from "lucide-react";
import { Input } from "@/components/ui/input";

const Blog = () => {
  const featuredPost = {
    title: "Novas Regulamentações de Compliance em Angola: O Que as Empresas Precisam Saber",
    excerpt: "Análise completa das recentes mudanças na legislação angolana sobre compliance corporativo e seus impactos no mundo empresarial.",
    author: "Luis Bastos",
    date: "15 de Setembro, 2024",
    readTime: "8 min",
    category: "Direito Empresarial",
    image: "📋"
  };

  const recentPosts = [
    {
      title: "Direito Digital em Angola: Desafios e Oportunidades",
      excerpt: "Como a transformação digital está impactando o sistema jurídico angolano e as novas oportunidades para advogados.",
      author: "Equipe Conexão Jurídica",
      date: "10 de Setembro, 2024",
      readTime: "6 min",
      category: "Direito Digital",
      tags: ["Tecnologia", "LGPD", "Digital"]
    },
    {
      title: "Mediação e Arbitragem: Alternativas ao Litígio Tradicional",
      excerpt: "Entenda como os métodos alternativos de resolução de conflitos podem beneficiar empresas e indivíduos.",
      author: "Luis Bastos",
      date: "05 de Setembro, 2024",
      readTime: "5 min",
      category: "Mediação",
      tags: ["ADR", "Mediação", "Arbitragem"]
    },
    {
      title: "Constituição de Empresas em Angola: Guia Completo 2024",
      excerpt: "Passo a passo atualizado para constituir sua empresa em Angola, incluindo todas as mudanças legislativas recentes.",
      author: "Equipe Conexão Jurídica",
      date: "28 de Agosto, 2024",
      readTime: "10 min",
      category: "Direito Empresarial",
      tags: ["Empresa", "Licenciamento", "Constituição"]
    },
    {
      title: "Direito Laboral Angolano: Atualizações e Tendências",
      excerpt: "As principais mudanças no código do trabalho e como elas afetam empregadores e trabalhadores.",
      author: "Luis Bastos",
      date: "20 de Agosto, 2024",
      readTime: "7 min",
      category: "Direito Laboral",
      tags: ["Trabalho", "Emprego", "Legislação"]
    },
    {
      title: "Proteção de Dados Pessoais: Lei Angolana vs GDPR",
      excerpt: "Comparação entre a legislação angolana de proteção de dados e as melhores práticas internacionais.",
      author: "Equipe Conexão Jurídica",
      date: "15 de Agosto, 2024",
      readTime: "9 min",
      category: "Proteção de Dados",
      tags: ["GDPR", "Privacidade", "Dados"]
    },
    {
      title: "Investimento Estrangeiro em Angola: Marco Legal Atualizado",
      excerpt: "Análise do novo quadro regulatório para investimentos estrangeiros e suas implicações práticas.",
      author: "Luis Bastos",
      date: "08 de Agosto, 2024",
      readTime: "12 min",
      category: "Investimentos",
      tags: ["Investimento", "Estrangeiro", "Regulação"]
    }
  ];

  const categories = [
    "Direito Empresarial",
    "Direito Laboral", 
    "Direito Digital",
    "Mediação",
    "Proteção de Dados",
    "Investimentos",
    "Compliance",
    "Tributário"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="bg-gradient-primary text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Blog <span className="text-accent">Jurídico</span>
          </h1>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Mantenha-se atualizado com as últimas novidades, análises e insights 
            do mundo jurídico em Angola.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input 
                placeholder="Pesquisar artigos..." 
                className="pl-10 py-3 text-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-primary mb-4">Artigo em Destaque</h2>
          </div>

          <Card className="border-border/50 hover:shadow-elegant transition-all mb-16">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-12 flex items-center justify-center lg:rounded-l-lg">
                <div className="text-center">
                  <div className="text-6xl mb-4">{featuredPost.image}</div>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {featuredPost.category}
                  </Badge>
                </div>
              </div>
              <div className="p-8">
                <CardHeader className="px-0 pt-0">
                  <CardTitle className="text-2xl text-primary line-clamp-3">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-base text-muted-foreground line-clamp-3">
                    {featuredPost.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent className="px-0 pb-0">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center">
                      <User className="w-4 h-4 mr-1" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {featuredPost.date}
                    </div>
                    <span>{featuredPost.readTime} leitura</span>
                  </div>
                  <Button className="bg-gradient-primary hover:bg-primary-hover text-primary-foreground">
                    Ler Artigo Completo
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </CardContent>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Recent Posts */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-6">
                <Card className="border-border/50 mb-6">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Categorias</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      {categories.map((category, index) => (
                        <Button 
                          key={index}
                          variant="ghost" 
                          className="w-full justify-start text-left text-muted-foreground hover:text-accent"
                          size="sm"
                        >
                          <BookOpen className="w-4 h-4 mr-2" />
                          {category}
                        </Button>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border/50">
                  <CardHeader>
                    <CardTitle className="text-lg text-primary">Newsletter</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">
                      Receba as últimas atualizações jurídicas diretamente no seu email.
                    </p>
                    <div className="space-y-3">
                      <Input placeholder="Seu email" type="email" />
                      <Button className="w-full bg-gradient-accent hover:bg-accent-hover text-accent-foreground" size="sm">
                        Subscrever
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Posts Grid */}
            <div className="lg:col-span-3">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-primary mb-4">Artigos Recentes</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {recentPosts.map((post, index) => (
                  <Card key={index} className="border-border/50 hover:shadow-elegant transition-all h-full">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="secondary" className="bg-accent/20 text-accent">
                          {post.category}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg text-primary line-clamp-2">
                        {post.title}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground line-clamp-3">
                        {post.excerpt}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      
                      <div className="border-t border-border/50 pt-4">
                        <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                          <div className="flex items-center">
                            <User className="w-3 h-3 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-3 h-3 mr-1" />
                            {post.date}
                          </div>
                          <span>{post.readTime} leitura</span>
                        </div>
                        <Button variant="outline" className="w-full text-sm">
                          Ler Mais
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" size="lg">
                  Carregar Mais Artigos
                </Button>
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

export default Blog;