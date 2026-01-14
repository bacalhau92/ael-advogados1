import { motion } from 'framer-motion';
import { 
  Users, 
  Building2, 
  Briefcase, 
  FileText, 
  Receipt, 
  Gavel, 
  Home, 
  Scale 
} from 'lucide-react';

const areas = [
  {
    icon: Users,
    title: 'Direito Civil',
    description: 'Contratos, responsabilidade civil, família e sucessões.',
  },
  {
    icon: Building2,
    title: 'Direito Comercial Empresarial e Societário',
    description: 'Constituição de empresas, fusões, aquisições e reestruturações.',
  },
  {
    icon: Briefcase,
    title: 'Direito Laboral',
    description: 'Relações de trabalho, contratos e litígios laborais.',
  },
  {
    icon: FileText,
    title: 'Direito Administrativo e Contratual Público',
    description: 'Contratação pública e procedimentos administrativos.',
  },
  {
    icon: Receipt,
    title: 'Direito Fiscal',
    description: 'Planeamento fiscal e contencioso tributário.',
  },
  {
    icon: Gavel,
    title: 'Arbitragem e Mediação de Conflitos',
    description: 'Resolução alternativa de disputas comerciais.',
  },
  {
    icon: Home,
    title: 'Direito Imobiliário e Notarial',
    description: 'Transações imobiliárias e registos.',
  },
  {
    icon: Scale,
    title: 'Direito Penal',
    description: 'Defesa criminal e processos penais.',
  },
];

const PracticeAreasSection = () => {
  return (
    <section id="areas" className="section-padding bg-navy-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Especialidades</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
            Áreas de Atuação
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ scale: 1.03 }}
              className="group relative bg-gradient-to-br from-card to-secondary/50 border border-border rounded-2xl p-6 overflow-hidden hover:border-primary/50 transition-all duration-300"
            >
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <area.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-foreground mb-2">
                  {area.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {area.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PracticeAreasSection;