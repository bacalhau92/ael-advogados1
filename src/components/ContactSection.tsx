import { motion } from 'framer-motion';
import { MapPin, Phone, Mail } from 'lucide-react';
import ContactForm from './ContactForm';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Endereço',
    content: 'Município do Rangel, Rua João de Deus, Bairro Nelito Soares, Vila Alice, n.º 31-A, Luanda, Angola',
  },
  {
    icon: Phone,
    title: 'Telefones',
    content: '+244 923 572 221 | +244 943 186 351',
  },
  {
    icon: Mail,
    title: 'E-mails',
    content: 'dominethdomingos@hotmail.com | albertina6.santos@gmail.com',
  },
];

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Entre em contato</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
            Fale Conosco
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info Cards */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                whileHover={{ x: 8 }}
                className="group flex items-start gap-6 bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex-shrink-0 inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                    {info.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {info.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;