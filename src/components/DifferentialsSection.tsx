import { motion } from 'framer-motion';
import { UserCheck, Layers, Zap, HandHeart, Laptop } from 'lucide-react';

const differentials = [
  {
    icon: UserCheck,
    title: 'Atendimento personalizado',
    description: 'Cada cliente recebe atenção exclusiva e soluções sob medida.',
  },
  {
    icon: Layers,
    title: 'Experiência multidisciplinar',
    description: 'Equipe com expertise em diversas áreas do Direito.',
  },
  {
    icon: Zap,
    title: 'Agilidade e rigor técnico',
    description: 'Respostas rápidas sem comprometer a qualidade.',
  },
  {
    icon: HandHeart,
    title: 'Compromisso total com o cliente',
    description: 'Sua causa é nossa prioridade absoluta.',
  },
  {
    icon: Laptop,
    title: 'Práticas modernas e tecnológicas',
    description: 'Utilizamos as melhores ferramentas disponíveis.',
  },
];

const DifferentialsSection = () => {
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
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Por que nos escolher</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
            Nossos Diferenciais
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {differentials.map((diff, index) => (
            <motion.div
              key={diff.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-primary/10 to-transparent border border-primary/20 rounded-2xl p-6 text-center hover:border-primary/50 hover:from-primary/20 transition-all duration-300"
            >
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/20 rounded-xl mb-4 group-hover:bg-primary/30 transition-colors">
                <diff.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                {diff.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {diff.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;