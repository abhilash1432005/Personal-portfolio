import { Heart, Code } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground font-mono">
            <Code className="w-4 h-4 text-primary" />
            <span>Designed & Built by</span>
            <span className="text-foreground">Abhilash Bandaru</span>
          </div>

          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-destructive animate-pulse" />
            <span>and lots of</span>
            <span className="text-primary font-mono">{"<code />"}</span>
          </div>

          <div className="text-xs text-muted-foreground font-mono">
            © {new Date().getFullYear()} All rights reserved
          </div>
        </div>
      </div>
    </footer>
  );
};
