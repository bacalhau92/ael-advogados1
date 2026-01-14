import { motion } from 'framer-motion';
import { BadgeCheck } from 'lucide-react';
import albertinaPhoto from '@/assets/albertina-santos.jpg';
import lisenderPhoto from '@/assets/lisender-domingos.jpg';

const team = [
  {
    name: 'Albertina dos Santos',
    role: 'Advogada',
    credential: 'Cédula Profissional n.º 4.453',
    photo: albertinaPhoto,
  },
  {
    name: 'Domineth Lisender Domingos',
    role: 'Advogado',
    credential: 'Cédula Profissional n.º 5.768',
    photo: lisenderPhoto,
  },
];

const TeamSection = () => {
  return (
    <section id="equipe" className="section-padding bg-navy-800">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-medium text-sm tracking-widest uppercase">Profissionais</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-4">
            Nossa Equipe
          </h2>
          <p className="text-muted-foreground text-lg mt-4 max-w-2xl mx-auto">
            Nossa equipe é composta por advogados experientes e altamente qualificados, com vasta experiência em diversas áreas do Direito, prontos para oferecer soluções eficazes para cada caso.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="group bg-gradient-to-br from-card to-secondary/30 border border-border rounded-2xl p-8 text-center hover:border-primary/50 transition-all duration-300"
            >
              <div className="relative inline-block mb-6">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                  <img 
                    src={member.photo} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div className="absolute bottom-0 right-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center border-4 border-card">
                  <BadgeCheck className="w-4 h-4 text-primary-foreground" />
                </div>
              </div>
              
              <h3 className="text-xl font-serif font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <p className="text-primary font-medium mb-2">{member.role}</p>
              <p className="text-sm text-muted-foreground">{member.credential}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;