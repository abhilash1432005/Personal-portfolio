import { Code, GraduationCap, Award, Briefcase } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const stats = [
  { icon: <GraduationCap className="w-5 h-5" />, label: 'CGPA', value: '8.91' },
  { icon: <Code className="w-5 h-5" />, label: 'Projects', value: '2+' },
  { icon: <Award className="w-5 h-5" />, label: 'Certifications', value: '5+' },
  { icon: <Briefcase className="w-5 h-5" />, label: 'Experience', value: '2 Internships' },
];

export const About = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-8">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold terminal-text">About Me</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Bio */}
            <div className="code-block card-glow space-y-4">
              <div className="flex items-center gap-2 text-muted-foreground text-sm border-b border-border pb-3">
                <span className="text-primary">//</span> about.json
              </div>
              
              <pre className="text-sm leading-relaxed overflow-x-auto">
                <code>
{`{
  "name": "Abhilash Bandaru",
  "education": {
    "degree": "B.Tech in CSE (AI & IPA)",
    "university": "KL University",
    "graduation": 2026
  },
  "interests": [
    "Web Development",
    "Machine Learning",
    "Data Analytics",
    "Cloud Computing",
    "Python Developer"
  ],
  "currently_learning": [
    "Advanced ML",
    "React Ecosystem",
    "AWS Services",
    "Data Analytics"
  ]
}`}
                </code>
              </pre>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className={`code-block card-glow flex flex-col items-center justify-center p-6 text-center transition-all duration-500 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="text-primary mb-2">{stat.icon}</div>
                  <div className="text-2xl md:text-3xl font-display font-bold terminal-text glow-text">
                    {stat.value}
                  </div>
                  <div className="text-muted-foreground text-sm mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
