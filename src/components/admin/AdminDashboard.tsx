import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Calendar, Users, Eye, TrendingUp } from 'lucide-react';

interface DashboardStats {
  totalPosts: number;
  publishedPosts: number;
  totalEvents: number;
  publishedEvents: number;
  totalUsers: number;
  recentPosts: number;
  recentEvents: number;
}

export default function AdminDashboard() {
  const [stats, setStats] = useState<DashboardStats>({
    totalPosts: 0,
    publishedPosts: 0,
    totalEvents: 0,
    publishedEvents: 0,
    totalUsers: 0,
    recentPosts: 0,
    recentEvents: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    try {
      // Get posts statistics
      const { data: posts } = await supabase
        .from('posts')
        .select('id, published, created_at');
      
      // Get events statistics
      const { data: events } = await supabase
        .from('events')
        .select('id, published, created_at');
        
      // Get users statistics
      const { data: users } = await supabase
        .from('profiles')
        .select('id, created_at');

      const now = new Date();
      const weekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60 * 1000);

      const recentPosts = posts?.filter(post => 
        new Date(post.created_at) > weekAgo
      ).length || 0;

      const recentEvents = events?.filter(event => 
        new Date(event.created_at) > weekAgo
      ).length || 0;

      setStats({
        totalPosts: posts?.length || 0,
        publishedPosts: posts?.filter(post => post.published).length || 0,
        totalEvents: events?.length || 0,
        publishedEvents: events?.filter(event => event.published).length || 0,
        totalUsers: users?.length || 0,
        recentPosts,
        recentEvents,
      });
    } catch (error) {
      console.error('Error fetching dashboard stats:', error);
    } finally {
      setLoading(false);
    }
  };

  const statsCards = [
    {
      title: "Total de Notícias",
      value: stats.totalPosts,
      icon: FileText,
      description: `${stats.publishedPosts} publicadas`,
      color: "text-blue-600"
    },
    {
      title: "Total de Eventos",
      value: stats.totalEvents,
      icon: Calendar,
      description: `${stats.publishedEvents} publicados`,
      color: "text-green-600"
    },
    {
      title: "Usuários",
      value: stats.totalUsers,
      icon: Users,
      description: "Total registrados",
      color: "text-purple-600"
    },
    {
      title: "Atividade Recente",
      value: stats.recentPosts + stats.recentEvents,
      icon: TrendingUp,
      description: "Últimos 7 dias",
      color: "text-orange-600"
    }
  ];

  if (loading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Card key={i} className="animate-pulse">
            <CardContent className="p-6">
              <div className="h-16 bg-muted rounded"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-bold tracking-tight">Dashboard</h2>
        <p className="text-muted-foreground">
          Visão geral das atividades da Conexão Jurídica
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {statsCards.map((card, index) => {
          const Icon = card.icon;
          return (
            <Card key={index} className="hover:shadow-md transition-shadow">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  {card.title}
                </CardTitle>
                <Icon className={`h-4 w-4 ${card.color}`} />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{card.value}</div>
                <p className="text-xs text-muted-foreground">
                  {card.description}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="w-5 h-5 mr-2" />
              Status das Notícias
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Publicadas</span>
                <span className="font-semibold">{stats.publishedPosts}</span>
              </div>
              <div className="flex justify-between">
                <span>Rascunhos</span>
                <span className="font-semibold">{stats.totalPosts - stats.publishedPosts}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{stats.totalPosts}</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2" />
              Status dos Eventos
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span>Publicados</span>
                <span className="font-semibold">{stats.publishedEvents}</span>
              </div>
              <div className="flex justify-between">
                <span>Rascunhos</span>
                <span className="font-semibold">{stats.totalEvents - stats.publishedEvents}</span>
              </div>
              <div className="flex justify-between border-t pt-2">
                <span className="font-semibold">Total</span>
                <span className="font-semibold">{stats.totalEvents}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}