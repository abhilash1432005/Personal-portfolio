import { Award, Download, ExternalLink } from 'lucide-react';
import { useInView } from '@/hooks/useInView';

const certifications = [
  {
    name: 'AWS Cloud Practitioner',
    issuer: 'Amazon Web Services',
    image: '/certifications/AWS CP.png',
    pdf: '/certifications/Abhi CP certificate.pdf',
  },
  {
    name: 'Essential RPA Professional',
    issuer: 'Automation Anywhere (2023)',
    image: '/certifications/RPA.png',
    pdf: '/certifications/RPA Essential.pdf',
  },
  {
    name: 'Salesforce AI Associate',
    issuer: 'Salesforce',
    image: '/certifications/Sales force .png',
    pdf: '/certifications/Sales force AI Associate.pdf',
  },
  {
    name: 'Data Science & Analytics',
    issuer: 'HP LIFE',
    image: '/certifications/HP Data Analyst.png',
    pdf: '/certifications/HP Data science and analytics certificate.pdf',
  },
  {
    name: 'Microsoft Azure AZ-900',
    issuer: 'Microsoft (Fundamentals)',
    image: '/certifications/Azure.png',
    pdf: '/certifications/Microsoft Azure AZ-900.pdf',
  },
];

export const Certifications = () => {
  const { ref, isInView } = useInView();

  return (
    <section id="certifications" className="py-24 px-6" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <div className={`transition-all duration-700 ${isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="flex items-center gap-3 mb-12">
            <span className="text-primary font-mono text-sm">06.</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold terminal-text">Certifications</h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`code-block card-glow group transition-all duration-500 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Certificate Image Preview */}
                <div className="relative aspect-[4/3] mb-4 rounded-lg overflow-hidden bg-muted border border-border">
                  <img
                    src={cert.image}
                    alt={cert.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    onError={(e) => {
                      // Fallback for missing images
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <div class="w-full h-full flex flex-col items-center justify-center text-muted-foreground">
                          <svg class="w-12 h-12 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                          <span class="text-xs text-center px-2">Certificate Image</span>
                        </div>
                      `;
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                    <a
                      href={cert.pdf}
                      download
                      className="p-3 bg-primary rounded-full text-primary-foreground hover:scale-110 transition-transform"
                      title="Download PDF"
                    >
                      <Download className="w-5 h-5" />
                    </a>
                    <a
                      href={cert.image}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-secondary rounded-full text-secondary-foreground hover:scale-110 transition-transform"
                      title="View Full Size"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* Certificate Info */}
                <div className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-foreground text-sm leading-tight">
                      {cert.name}
                    </h3>
                    <p className="text-muted-foreground text-xs mt-1">{cert.issuer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
