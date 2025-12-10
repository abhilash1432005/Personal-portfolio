import { useEffect, useState } from 'react';
import { Terminal, ChevronDown, Download } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';

export const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const fullText = 'Abhilash Bandaru';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, []);

  const scrollToNext = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative px-6">
      {/* Terminal Window */}
      <div className="w-full max-w-4xl animate-slide-up">
        <div className="code-block card-glow overflow-hidden">
          {/* Terminal Header */}
          <div className="flex items-center gap-2 pb-4 border-b border-border mb-4">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-destructive" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            <div className="flex-1 text-center text-muted-foreground text-sm flex items-center justify-center gap-2">
              <Terminal className="w-4 h-4" />
              portfolio.exe
            </div>
          </div>

          {/* Terminal Content with Photo */}
          <div className="flex flex-col md:flex-row gap-8 items-center">
            {/* Profile Photo */}
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary/50 p-1 relative">
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-secondary to-primary animate-spin-slow opacity-50" style={{ animation: 'spin 8s linear infinite' }} />
                <img 
                  src={profilePhoto} 
                  alt="Abhilash Bandaru" 
                  className="w-full h-full object-cover rounded-full relative z-10"
                />
              </div>
              {/* Animated border glow */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-primary/20 via-secondary/20 to-primary/20 blur-md opacity-75 group-hover:opacity-100 transition-opacity animate-pulse-glow" />
            </div>

            {/* Text Content */}
            <div className="font-mono space-y-3 flex-1 text-center md:text-left">
              <div className="flex items-center gap-2 justify-center md:justify-start">
                <span className="text-muted-foreground">$</span>
                <span className="text-muted-foreground">whoami</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold terminal-text glow-text">
                {displayText}
                <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity`}>|</span>
              </h1>

              <div className="flex items-center gap-2 mt-6 justify-center md:justify-start">
                <span className="text-muted-foreground">$</span>
                <span className="text-muted-foreground">cat role.txt</span>
              </div>

              <p className="text-lg md:text-xl text-foreground opacity-80">
                Computer Science Student • AI & ML Enthusiast • Full Stack Developer • Data Analyst • Python Developer
              </p>

              <div className="flex items-center gap-2 mt-4 justify-center md:justify-start">
                <span className="text-muted-foreground">$</span>
                <span className="text-muted-foreground">echo $OBJECTIVE</span>
              </div>

              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                "Building innovative solutions at the intersection of AI, web development, and Data Analysis."
              </p>

              <div className="flex flex-wrap items-center gap-4 mt-6 pt-4 border-t border-border justify-center md:justify-start">
                <div className="flex items-center gap-2">
                  <span className="text-primary animate-pulse-glow">●</span>
                  <span className="text-muted-foreground text-sm">Available for opportunities</span>
                </div>

                <a
                  href="/resume/Abhilash_Bandaru_Resume.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  <Download className="w-4 h-4" />
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float cursor-pointer group"
        aria-label="Scroll to about section"
      >
        <ChevronDown className="w-8 h-8 text-muted-foreground group-hover:text-foreground transition-colors" />
      </button>

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
              linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>
    </section>
  );
};
