import { ExternalLink, Github, Folder } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const projects = [
  {
    title: 'Automobile Management System',
    description: 'A comprehensive web-based automobile garage management system with user authentication, spare parts gallery, appointment booking, and billing features.',
    tech: ['Python', 'Django', 'HTML', 'CSS'],
    github: 'https://github.com/abhilash1432005/Auto-mobile-managementsystem',
  },
  {
    title: 'Portfolio Website',
    description: 'This interactive portfolio website with multiple themes, terminal aesthetics, and smooth animations built with React and TypeScript.',
    tech: ['React', 'TypeScript', 'Tailwind CSS'],
    github: '#',
  },
];

export const Projects = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold terminal-text">Projects</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid gap-6">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className={`code-block card-glow group transition-all duration-500 hover:scale-[1.02] ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <Folder className="w-5 h-5 text-primary" />
                      <h3 className="text-xl font-display font-semibold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>
                    </div>

                    <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 bg-muted rounded text-muted-foreground font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Terminal-style footer */}
                <div className="mt-4 pt-4 border-t border-border text-xs text-muted-foreground font-mono">
                  <span className="text-primary">$</span> git clone project-{index + 1}.git
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
