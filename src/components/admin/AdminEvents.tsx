import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2, Calendar } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Event {
  id: string;
  title: string;
  description: string;
  event_date: string;
  location: string;
  published: boolean;
  created_at: string;
}

export default function AdminEvents() {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingEvent, setEditingEvent] = useState<Event | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    event_date: '',
    location: '',
    published: false
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      toast({
        title: "Erro ao carregar eventos",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (editingEvent) {
        const { error } = await supabase
          .from('events')
          .update(formData)
          .eq('id', editingEvent.id);

        if (error) throw error;
        
        toast({
          title: "Evento atualizado!",
          description: "O evento foi atualizado com sucesso.",
        });
      } else {
        const { error } = await supabase
          .from('events')
          .insert([{
            ...formData,
            author_id: (await supabase.auth.getUser()).data.user?.id
          }]);

        if (error) throw error;
        
        toast({
          title: "Evento criado!",
          description: "O evento foi criado com sucesso.",
        });
      }

      setDialogOpen(false);
      setEditingEvent(null);
      setFormData({ title: '', description: '', event_date: '', location: '', published: false });
      fetchEvents();
    } catch (error: any) {
      toast({
        title: "Erro ao salvar evento",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (event: Event) => {
    setEditingEvent(event);
    setFormData({
      title: event.title,
      description: event.description,
      event_date: event.event_date.split('T')[0], // Format for date input
      location: event.location,
      published: event.published
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este evento?')) return;

    try {
      const { error } = await supabase
        .from('events')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Evento excluído!",
        description: "O evento foi excluído com sucesso.",
      });
      
      fetchEvents();
    } catch (error: any) {
      toast({
        title: "Erro ao excluir evento",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="text-center py-4">Carregando eventos...</div>;
  }

  return (
    <div className="space-y-4">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => {
            setEditingEvent(null);
            setFormData({ title: '', description: '', event_date: '', location: '', published: false });
          }}>
            <Plus className="w-4 h-4 mr-2" />
            Novo Evento
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingEvent ? 'Editar Evento' : 'Novo Evento'}
            </DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para {editingEvent ? 'editar' : 'criar'} o evento.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">Título</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="event_date">Data do Evento</Label>
                <Input
                  id="event_date"
                  type="date"
                  value={formData.event_date}
                  onChange={(e) => setFormData({ ...formData, event_date: e.target.value })}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="location">Local</Label>
                <Input
                  id="location"
                  value={formData.location}
                  onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                  placeholder="Ex: Luanda, Angola"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="description">Descrição</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                rows={6}
                required
              />
            </div>
            <div className="flex items-center space-x-2">
              <Switch
                id="published"
                checked={formData.published}
                onCheckedChange={(checked) => setFormData({ ...formData, published: checked })}
              />
              <Label htmlFor="published">Publicar</Label>
            </div>
            <div className="flex justify-end space-x-2">
              <Button type="button" variant="outline" onClick={() => setDialogOpen(false)}>
                Cancelar
              </Button>
              <Button type="submit">
                {editingEvent ? 'Atualizar' : 'Criar'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="space-y-4">
        {events.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            Nenhum evento encontrado. Crie o primeiro!
          </p>
        ) : (
          events.map((event) => (
            <div key={event.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <h3 className="font-semibold">{event.title}</h3>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {new Date(event.event_date).toLocaleDateString('pt-BR')}
                    </div>
                    {event.location && <span>📍 {event.location}</span>}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {event.description.substring(0, 100)}...
                  </p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span className={`px-2 py-1 rounded-full ${
                      event.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {event.published ? 'Publicado' : 'Rascunho'}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(event)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(event.id)}>
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}