
import React, { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Sun, Moon } from 'lucide-react';

type LayoutProps = {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [languages, setLanguages] = useState([
    { code: 'en', name: 'English', active: true },
    { code: 'es', name: 'Español', active: false },
    { code: 'fr', name: 'Français', active: false },
    { code: 'hi', name: 'हिन्दी', active: false },
  ]);
  const [showLangDropdown, setShowLangDropdown] = useState(false);

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const selectLanguage = (code: string) => {
    setLanguages(languages.map(lang => ({
      ...lang,
      active: lang.code === code
    })));
    setShowLangDropdown(false);
  };

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const activeLanguage = languages.find(lang => lang.active);

  return (
    <div className="flex h-screen overflow-hidden bg-background">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      
      <div className="flex flex-col flex-1 overflow-hidden">
        <header className="flex items-center justify-end h-16 px-6 border-b border-border bg-card z-10">
          <div className="relative mr-4">
            <button 
              onClick={() => setShowLangDropdown(!showLangDropdown)}
              className="flex items-center px-3 py-1 text-sm rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
            >
              {activeLanguage?.name || 'English'}
            </button>
            
            {showLangDropdown && (
              <div className="absolute right-0 mt-2 w-40 py-2 rounded-lg shadow-lg bg-popover border border-border z-20 animate-fade-in">
                {languages.map(lang => (
                  <button
                    key={lang.code}
                    onClick={() => selectLanguage(lang.code)}
                    className={`w-full text-left px-4 py-2 text-sm hover:bg-muted transition-colors ${
                      lang.active ? 'text-primary font-medium' : 'text-foreground'
                    }`}
                  >
                    {lang.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-secondary transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </header>
        
        <main className="flex-1 overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};
