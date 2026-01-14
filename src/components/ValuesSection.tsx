import { motion } from 'framer-motion';
import { Shield, Lock, Award, Scale, Heart } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Integridade e Ética',
    description: 'Compromisso inabalável com os mais altos padrões éticos e morais em todas as nossas ações.',
  },
  {
    icon: Lock,
    title: 'Confidencialidade e Transparência',
    description: 'Proteção absoluta das informações dos clientes com comunicação clara e honesta.',
  },
  {
    icon: Award,
    title: 'Profissionalismo e Excelência',
    description: 'Busca constante pela excelência em todos os serviços jurídicos que prestamos.',
  },
  {
    icon: Scale,
    title: 'Rigor Técnico',
    description: 'Análise detalhada e fundamentada de cada caso com precisão jurídica.',
  },
  {
    icon: Heart,
    title: 'Compromisso com o Cliente',
    description: 'Dedicação total aos interesses e necessidades de cada cliente.',
  },
];

const ValuesSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">O que nos guia</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
            Nossos Valores
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-card border border-border rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                <value.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {value.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;