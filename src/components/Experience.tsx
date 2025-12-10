import { Calendar, Building } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const experiences = [
  {
    title: 'AI & Machine Learning Intern',
    company: 'Edunet Foundation',
    duration: 'May 2024 – June 2024',
    type: 'Remote',
    description: [
      'Completed 6-week intensive internship in AI/ML',
      'Leveraged IBM SkillsBuild platform for learning',
      'Gained hands-on experience with ML fundamentals',
    ],
  },
  {
    title: 'AWS Cloud Virtual Intern',
    company: 'AICTE–Eduskills',
    duration: 'Jan 2024 – Mar 2024',
    type: 'Remote',
    description: [
      'Acquired foundational understanding of AWS cloud services',
      'Explored cloud computing concepts and architectures',
      'Completed AWS Cloud Practitioner certification prep',
    ],
  },
];

export const Experience = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="experience" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold terminal-text">Work Experience</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-display font-semibold text-foreground flex items-center gap-2">
              <Building className="w-5 h-5 text-primary" />
              Internships
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((exp, index) => (
                <div
                  key={exp.title}
                  className={`code-block card-glow transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 150}ms` }}
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h4 className="font-semibold text-foreground">{exp.title}</h4>
                      <p className="text-primary text-sm">{exp.company}</p>
                    </div>
                    <span className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground">
                      {exp.type}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-muted-foreground text-xs mb-3">
                    <Calendar className="w-3 h-3" />
                    {exp.duration}
                  </div>

                  <ul className="space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">▹</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
