import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Switch } from '@/components/ui/switch';
import { useToast } from '@/hooks/use-toast';
import { Plus, Edit, Trash2 } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  published: boolean;
  created_at: string;
}

export default function AdminPosts() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    published: false
  });
  const { toast } = useToast();

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      toast({
        title: "Erro ao carregar notícias",
        description: "Tente novamente mais tarde.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const slug = generateSlug(formData.title);
      
      if (editingPost) {
        const { error } = await supabase
          .from('posts')
          .update({
            ...formData,
            slug
          })
          .eq('id', editingPost.id);

        if (error) throw error;
        
        toast({
          title: "Notícia atualizada!",
          description: "A notícia foi atualizada com sucesso.",
        });
      } else {
        const { error } = await supabase
          .from('posts')
          .insert([{
            ...formData,
            slug,
            author_id: (await supabase.auth.getUser()).data.user?.id
          }]);

        if (error) throw error;
        
        toast({
          title: "Notícia criada!",
          description: "A notícia foi criada com sucesso.",
        });
      }

      setDialogOpen(false);
      setEditingPost(null);
      setFormData({ title: '', content: '', excerpt: '', published: false });
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Erro ao salvar notícia",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  const handleEdit = (post: Post) => {
    setEditingPost(post);
    setFormData({
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      published: post.published
    });
    setDialogOpen(true);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta notícia?')) return;

    try {
      const { error } = await supabase
        .from('posts')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      toast({
        title: "Notícia excluída!",
        description: "A notícia foi excluída com sucesso.",
      });
      
      fetchPosts();
    } catch (error: any) {
      toast({
        title: "Erro ao excluir notícia",
        description: error.message,
        variant: "destructive",
      });
    }
  };

  if (loading) {
    return <div className="text-center py-4">Carregando notícias...</div>;
  }

  return (
    <div className="space-y-4">
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogTrigger asChild>
          <Button onClick={() => {
            setEditingPost(null);
            setFormData({ title: '', content: '', excerpt: '', published: false });
          }}>
            <Plus className="w-4 h-4 mr-2" />
            Nova Notícia
          </Button>
        </DialogTrigger>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle>
              {editingPost ? 'Editar Notícia' : 'Nova Notícia'}
            </DialogTitle>
            <DialogDescription>
              Preencha os campos abaixo para {editingPost ? 'editar' : 'criar'} a notícia.
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
            <div className="space-y-2">
              <Label htmlFor="excerpt">Resumo</Label>
              <Textarea
                id="excerpt"
                value={formData.excerpt}
                onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                rows={2}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="content">Conteúdo</Label>
              <Textarea
                id="content"
                value={formData.content}
                onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                rows={8}
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
                {editingPost ? 'Atualizar' : 'Criar'}
              </Button>
            </div>
          </form>
        </DialogContent>
      </Dialog>

      <div className="space-y-4">
        {posts.length === 0 ? (
          <p className="text-center text-muted-foreground py-8">
            Nenhuma notícia encontrada. Crie a primeira!
          </p>
        ) : (
          posts.map((post) => (
            <div key={post.id} className="border rounded-lg p-4">
              <div className="flex justify-between items-start">
                <div className="space-y-2 flex-1">
                  <h3 className="font-semibold">{post.title}</h3>
                  <p className="text-sm text-muted-foreground">{post.excerpt}</p>
                  <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                    <span>{new Date(post.created_at).toLocaleDateString('pt-BR')}</span>
                    <span className={`px-2 py-1 rounded-full ${
                      post.published 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {post.published ? 'Publicado' : 'Rascunho'}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline" onClick={() => handleEdit(post)}>
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="destructive" onClick={() => handleDelete(post.id)}>
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