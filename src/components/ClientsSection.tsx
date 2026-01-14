import { motion } from 'framer-motion';
import { ShieldCheck, Building2, Globe, Users } from 'lucide-react';

const ClientsSection = () => {
  return (
    <section className="section-padding bg-navy-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Quem atendemos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
            Nossos Clientes
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-8 md:p-10">
            <div className="flex items-start gap-6 mb-8">
              <div className="flex-shrink-0 p-4 bg-primary/10 rounded-xl">
                <ShieldCheck className="w-8 h-8 text-primary" />
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Atendemos clientes nacionais e internacionais, incluindo pequenas, médias e grandes empresas, instituições públicas e investidores privados. A identidade e os casos dos clientes são sempre mantidos em <span className="text-primary font-semibold">total sigilo profissional</span>.
              </p>
            </div>

            <div className="grid sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <Building2 className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground font-medium">Empresas</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <Globe className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground font-medium">Investidores</span>
              </div>
              <div className="flex items-center gap-3 p-4 bg-secondary/50 rounded-xl">
                <Users className="w-5 h-5 text-primary" />
                <span className="text-sm text-foreground font-medium">Particulares</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;