import { GraduationCap, Calendar, MapPin } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const education = [
  {
    degree: 'B.Tech in CSE (AI & IPA)',
    institution: 'KL University',
    location: 'Vijayawada, India',
    duration: '2022 – 2026',
    grade: 'CGPA: 8.91',
    status: 'current',
    description: 'Specializing in Artificial Intelligence and Intelligent Process Automation',
  },
  {
    degree: 'Intermediate (MPC)',
    institution: 'DKNP Junior College',
    location: 'Vissannapeta, Andhra Pradesh, India',
    duration: '2020 – 2022',
    grade: 'Completed',
    status: 'completed',
    description: 'Mathematics, Physics, and Chemistry specialization',
  },
  {
    degree: 'Secondary School (SSC)',
    institution: 'Sri Chaitanya High School',
    location: 'Vissannapeta, Andhra Pradesh, India',
    duration: '2019 – 2020',
    grade: 'Completed',
    status: 'completed',
    description: 'Foundation in Science and Mathematics',
  },
];

export const EducationRoadmap = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="education" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold terminal-text">Education Journey</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Roadmap */}
          <div className="relative">
            {/* Main Road Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-primary/50 to-border transform md:-translate-x-1/2" />

            {/* Education Items */}
            <div className="space-y-12">
              {education.map((edu, index) => (
                <div
                  key={edu.degree}
                  className={`relative flex flex-col md:flex-row items-start gap-8 transition-all duration-700 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  {/* Milestone Marker */}
                  <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 z-10">
                    <div className={`w-6 h-6 rounded-full border-4 ${
                      edu.status === 'current' 
                        ? 'bg-primary border-primary animate-pulse-glow' 
                        : 'bg-background border-primary/50'
                    } flex items-center justify-center`}>
                      {edu.status === 'current' && (
                        <div className="w-2 h-2 bg-background rounded-full" />
                      )}
                    </div>
                  </div>

                  {/* Content Card - Alternating sides on desktop */}
                  <div className={`w-full md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-8 md:text-right' : 'md:ml-auto md:pl-8 md:text-left'
                  } ml-16 md:ml-0`}>
                    <div className="code-block card-glow">
                      <div className={`flex items-center gap-2 text-muted-foreground text-sm border-b border-border pb-3 mb-4 ${
                        index % 2 === 0 ? 'md:flex-row-reverse' : ''
                      }`}>
                        <GraduationCap className="w-4 h-4 text-primary" />
                        <span className="text-primary font-mono">{edu.duration}</span>
                        {edu.status === 'current' && (
                          <span className="px-2 py-0.5 text-xs bg-primary/20 text-primary rounded-full">Current</span>
                        )}
                      </div>

                      <h3 className="font-display font-semibold text-lg text-foreground mb-1">
                        {edu.degree}
                      </h3>
                      
                      <p className="text-primary text-sm mb-2">{edu.institution}</p>
                      
                      <div className={`flex items-center gap-2 text-muted-foreground text-xs mb-3 ${
                        index % 2 === 0 ? 'md:justify-end' : ''
                      }`}>
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </div>

                      <p className="text-sm text-muted-foreground mb-3">{edu.description}</p>

                      <div className={`flex items-center gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                        <span className="px-3 py-1 text-xs bg-muted rounded-full text-foreground font-mono">
                          {edu.grade}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Road End Marker */}
            <div className="absolute left-8 md:left-1/2 -bottom-4 transform -translate-x-1/2">
              <div className="w-4 h-4 border-4 border-primary/30 rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
