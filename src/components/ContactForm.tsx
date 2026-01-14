import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { useToast } from '@/hooks/use-toast';

const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: 'O nome deve ter pelo menos 2 caracteres' })
    .max(100, { message: 'O nome deve ter no máximo 100 caracteres' }),
  email: z
    .string()
    .trim()
    .email({ message: 'Por favor, insira um e-mail válido' })
    .max(255, { message: 'O e-mail deve ter no máximo 255 caracteres' }),
  phone: z
    .string()
    .trim()
    .min(9, { message: 'O telefone deve ter pelo menos 9 dígitos' })
    .max(20, { message: 'O telefone deve ter no máximo 20 caracteres' })
    .optional()
    .or(z.literal('')),
  subject: z
    .string()
    .trim()
    .min(5, { message: 'O assunto deve ter pelo menos 5 caracteres' })
    .max(200, { message: 'O assunto deve ter no máximo 200 caracteres' }),
  message: z
    .string()
    .trim()
    .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres' })
    .max(2000, { message: 'A mensagem deve ter no máximo 2000 caracteres' }),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    
    try {
      // Simulate form submission - in production, this would send to an API
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Create mailto link as fallback
      const mailtoSubject = encodeURIComponent(data.subject);
      const mailtoBody = encodeURIComponent(
        `Nome: ${data.name}\nE-mail: ${data.email}\nTelefone: ${data.phone || 'Não informado'}\n\nMensagem:\n${data.message}`
      );
      
      // Open email client
      window.location.href = `mailto:dominethdomingos@hotmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;
      
      setIsSubmitted(true);
      toast({
        title: 'Mensagem preparada!',
        description: 'Seu cliente de e-mail foi aberto com a mensagem. Por favor, envie o e-mail.',
      });
    } catch (error) {
      toast({
        title: 'Erro',
        description: 'Ocorreu um erro ao processar sua mensagem. Tente novamente.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSubmitted(false);
    form.reset();
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-gradient-to-br from-card to-secondary/30 border border-primary/30 rounded-2xl p-8 text-center"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/20 rounded-full mb-6">
          <CheckCircle className="w-8 h-8 text-primary" />
        </div>
        <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
          Mensagem Preparada!
        </h3>
        <p className="text-muted-foreground mb-6">
          Seu cliente de e-mail foi aberto. Por favor, envie o e-mail para completar o contato.
        </p>
        <Button onClick={handleReset} variant="outline">
          Enviar Nova Mensagem
        </Button>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-8"
    >
      <h3 className="text-2xl font-serif font-semibold text-foreground mb-6 text-center">
        Envie sua Mensagem
      </h3>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nome Completo *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Seu nome" 
                      {...field} 
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>E-mail *</FormLabel>
                  <FormControl>
                    <Input 
                      type="email" 
                      placeholder="seu@email.com" 
                      {...field}
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Telefone</FormLabel>
                  <FormControl>
                    <Input 
                      type="tel" 
                      placeholder="+244 9XX XXX XXX" 
                      {...field}
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="subject"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Assunto *</FormLabel>
                  <FormControl>
                    <Input 
                      placeholder="Assunto da mensagem" 
                      {...field}
                      className="bg-background/50 border-border focus:border-primary"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Mensagem *</FormLabel>
                <FormControl>
                  <Textarea 
                    placeholder="Descreva como podemos ajudá-lo..." 
                    rows={5}
                    {...field}
                    className="bg-background/50 border-border focus:border-primary resize-none"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button 
            type="submit" 
            size="lg" 
            className="w-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Processando...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-2" />
                Enviar Mensagem
              </>
            )}
          </Button>
        </form>
      </Form>
    </motion.div>
  );
};

export default ContactForm;
