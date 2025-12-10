import { useInView } from '@/hooks/useInView';

const skillCategories = [
  {
    title: 'Languages',
    skills: ['Python', 'C', 'Java', 'HTML', 'CSS', 'JavaScript'],
  },
  {
    title: 'Frameworks',
    skills: ['Django', 'React.js', 'Node.js'],
  },
  {
    title: 'Libraries',
    skills: ['NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'Tools',
    skills: ['VS Code', 'PyCharm', 'Git', 'PowerBI'],
  },
  {
    title: 'Databases',
    skills: ['MySQL', 'MongoDB'],
  },
  {
    title: 'Cloud',
    skills: ['AWS', 'Azure'],
  },
];

export const Skills = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="skills" className="py-24 px-6 bg-card/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold terminal-text">Skills & Tech Stack</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className={`code-block card-glow transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${categoryIndex * 100}ms` }}
              >
                <div className="flex items-center gap-2 text-muted-foreground text-sm border-b border-border pb-3 mb-4">
                  <span className="text-primary">const</span>
                  <span className="text-foreground">{category.title.toLowerCase()}</span>
                  <span className="text-muted-foreground">=</span>
                  <span className="text-secondary">[</span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm bg-muted rounded-md border border-border hover:border-primary hover:text-primary transition-all duration-300 cursor-default"
                      style={{ animationDelay: `${(categoryIndex * category.skills.length + skillIndex) * 50}ms` }}
                    >
                      "{skill}"
                    </span>
                  ))}
                </div>

                <div className="text-secondary mt-4 text-sm">];</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
