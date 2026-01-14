import { motion } from 'framer-motion';
import { 
  MessageSquare, 
  FileCheck, 
  Landmark, 
  ClipboardList, 
  Building, 
  Search, 
  Coins 
} from 'lucide-react';

const services = [
  {
    icon: MessageSquare,
    title: 'Consultoria e assessoria jurídica permanente',
    description: 'Acompanhamento contínuo para empresas e particulares.',
  },
  {
    icon: FileCheck,
    title: 'Elaboração e revisão de contratos',
    description: 'Redação e análise detalhada de documentos contratuais.',
  },
  {
    icon: Landmark,
    title: 'Representação em processos judiciais e arbitrais',
    description: 'Defesa qualificada em todas as instâncias.',
  },
  {
    icon: ClipboardList,
    title: 'Assistência em processos administrativos',
    description: 'Apoio em procedimentos junto a entidades públicas.',
  },
  {
    icon: Building,
    title: 'Constituição e reorganização de sociedades',
    description: 'Estruturação e reestruturação empresarial.',
  },
  {
    icon: Search,
    title: 'Due Diligence legal',
    description: 'Auditoria jurídica para transações e investimentos.',
  },
  {
    icon: Coins,
    title: 'Recuperação de créditos e contencioso executivo',
    description: 'Cobrança judicial e extrajudicial de dívidas.',
  },
];

const ServicesSection = () => {
  return (
    <section id="servicos" className="section-padding bg-background">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">O que fazemos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
            Nossos Serviços
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex gap-5 bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;