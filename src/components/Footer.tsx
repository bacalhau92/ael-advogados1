import { motion } from 'framer-motion';
import { Scale } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 border-t border-border">
      <div className="section-container py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Logo */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <Scale className="w-8 h-8 text-primary" />
            <span className="text-xl font-serif font-semibold text-foreground">
              A&L <span className="text-primary">Advogados</span>
            </span>
          </div>

          {/* Description */}
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
            Este portfólio ilustra uma visão geral do trabalho desenvolvido pela A&L Advogados, reforçando nosso compromisso com a excelência e a defesa dos interesses legítimos dos nossos clientes.
          </p>

          {/* Divider */}
          <div className="w-24 h-px bg-primary/30 mx-auto mb-6" />

          {/* Copyright */}
          <p className="text-sm text-muted-foreground">
            © 2026 A&L - sjkp.ao. Todos os direitos reservados.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;