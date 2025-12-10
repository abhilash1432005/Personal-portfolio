import { useState, useEffect } from 'react';
import { Monitor, Sparkles, Binary } from 'lucide-react';

type Theme = 'monochrome' | 'neon' | 'matrix';

interface ThemeOption {
  id: Theme;
  label: string;
  icon: React.ReactNode;
}

const themes: ThemeOption[] = [
  { id: 'monochrome', label: 'Mono', icon: <Monitor className="w-4 h-4" /> },
  { id: 'neon', label: 'Neon', icon: <Sparkles className="w-4 h-4" /> },
  { id: 'matrix', label: 'Matrix', icon: <Binary className="w-4 h-4" /> },
];

export const ThemeSwitcher = () => {
  const [currentTheme, setCurrentTheme] = useState<Theme>('monochrome');

  useEffect(() => {
    const saved = localStorage.getItem('portfolio-theme') as Theme;
    if (saved) {
      setCurrentTheme(saved);
      applyTheme(saved);
    }
  }, []);

  const applyTheme = (theme: Theme) => {
    const root = document.documentElement;
    root.classList.remove('theme-neon', 'theme-matrix');
    if (theme !== 'monochrome') {
      root.classList.add(`theme-${theme}`);
    }
  };

  const handleThemeChange = (theme: Theme) => {
    setCurrentTheme(theme);
    localStorage.setItem('portfolio-theme', theme);
    applyTheme(theme);
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      <div className="flex items-center gap-1 p-1 rounded-full bg-card/80 backdrop-blur-md border border-border card-glow">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => handleThemeChange(theme.id)}
            className={`flex items-center gap-2 px-3 py-2 rounded-full transition-all duration-300 ${
              currentTheme === theme.id
                ? 'bg-primary text-primary-foreground shadow-lg'
                : 'text-muted-foreground hover:text-foreground hover:bg-muted'
            }`}
            aria-label={`Switch to ${theme.label} theme`}
          >
            {theme.icon}
            <span className="text-xs font-medium hidden sm:inline">{theme.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
};
