import { motion } from 'framer-motion';
import { Target, Eye } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding bg-navy-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Quem Somos</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
            Sobre Nós
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-3"
          >
            <div className="bg-card/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-10 h-full">
              <p className="text-muted-foreground text-lg leading-relaxed">
                A <span className="text-primary font-semibold">AL - Albertina & Lisender Advogados</span> é um escritório de advogados situado em Luanda, Angola, no Município do Rangel, Rua João de Deus, Bairro Nelito Soares, Vila Alice, n.º 31-A, especializado em oferecer soluções jurídicas eficazes, transparentes e personalizadas para clientes individuais, empresas e instituições públicas e privadas.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-6">
                Atuamos com rigor, ética, deontologia profissional e eficiência, garantindo a defesa dos interesses dos nossos clientes com total dedicação.
              </p>
            </div>
          </motion.div>

          {/* Mission & Vision Cards */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/30 rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Target className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Missão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Prestar serviços jurídicos de excelência, assegurando a defesa dos direitos e interesses dos nossos clientes com profissionalismo, ética e o compromisso que se pretende.
              </p>
            </div>

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-secondary/80 to-secondary/40 border border-border rounded-2xl p-6 md:p-8">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-primary/20 rounded-xl">
                  <Eye className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-serif font-semibold text-foreground">Visão</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                Ser referência nacional no campo jurídico, reconhecido pela qualidade dos serviços, inovação e confiança.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;