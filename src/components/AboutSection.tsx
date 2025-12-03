import { motion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { GithubIcon, LinkedinIcon, MailIcon } from 'lucide-react';
import smcrImage from '@/components/smcr.jpg';
import jmapImage from '@/components/jmap.jpg';
import sjprImage from '@/components/sjpr.jpeg';

const AboutSection = () => {
  const team = [
    {
      name: 'Juan Marco A. Peralta',
      role: 'Data Scientist | Web Developer',
      description: "Hi, I'm Marco! I'm a 3rd year BS Computer Science student at UP Diliman who loves building projects that blend coding, research, and visualization. I’m especially drawn to real-world problems like earthquakes where data can be used to tell stories and guide better decisions.",
      avatar: jmapImage,
      initials: 'JMAP',
      links: {
        github: 'https://github.com/wamaco',
        linkedin: 'https://www.linkedin.com/in/wamaco16/',
        email: 'japeralta2@up.edu.ph',
      },
    },
    {
      name: 'Samantha Mikaylah C. Reyes',
      role: 'Data Scientist | Web Developer',
      description: "Hello! My name is Sam, and I am a 3rd-year BS Computer Science student at the University of the Philippines Diliman. I am particularly interested in data analytics and look forward to exploring how data can uncover meaningful insights and drive real-world solutions.",
      avatar: smcrImage,
      initials: 'SMCR',
      links: {
        github: 'https://github.com/smcreyes',
        linkedin: 'https://www.linkedin.com/in/samantha-mikaylah-reyes/',
        email: 'reyes.sammikaylah@gmail.com',
      },
    },
    {
      name: 'Syrelle Joy P. Reforma',
      role: 'Data Scientist | Web Developer',
      description: "Hi I'm Syrelle, a 3rd-year BS Computer Science student from UP Diliman interested in software development and UI/UX design. This capstone also sparked my passion for data science particularly in data collection adn modeling, and I hope to use these skills to contribute meaningfully to the community.",
      avatar: sjprImage,
      initials: 'SJPR',
      links: {
        github: 'https://github.com/psychic-qt',
        linkedin: 'https://linkedin.com/in/syrellereforma',
        email: 'spreforma.careers@gmail.com',
      },
    },
  ];

  return (
    <section id="about" className="relative py-16 lg:py-24 bg-tertiary/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl lg:text-4xl font-semibold text-foreground mb-12 text-center"
        >
          About Us
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="bg-card p-6 rounded-xl border-0 shadow-lg h-full hover:scale-[1.03] transition-transform duration-300">
                <div className="flex flex-col items-center text-center">
                  <Avatar className="w-24 h-24 mb-4">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">
                      {member.initials}
                    </AvatarFallback>
                  </Avatar>

                  <h3 className="text-xl font-medium text-card-foreground mb-1">
                    {member.name}
                  </h3>
                  <p className="text-sm text-primary font-normal mb-4">
                    {member.role}
                  </p>
                  <p className="text-sm text-card-foreground font-light leading-relaxed mb-6">
                    {member.description}
                  </p>

                  <div className="flex space-x-4">
                    <a
                      href={member.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-card-foreground hover:text-primary transition-colors duration-200"
                      aria-label={`${member.name} GitHub`}
                    >
                      <GithubIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={member.links.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-card-foreground hover:text-primary transition-colors duration-200"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedinIcon className="w-5 h-5" />
                    </a>
                    <a
                      href={member.links.email}
                      className="text-card-foreground hover:text-primary transition-colors duration-200"
                      aria-label={`Email ${member.name}`}
                    >
                      <MailIcon className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;




