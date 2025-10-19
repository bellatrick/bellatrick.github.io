import { Search, Mail, Sun, Moon, Menu } from 'lucide-react';
import { useTheme } from './ThemeContext';
import { Input } from './ui/input';

interface TopNavProps {
  onMenuClick: () => void;
}

export function TopNav({ onMenuClick }: TopNavProps) {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="h-14 bg-[#742774] dark:bg-[#8a2eb8] flex items-center justify-between px-4 shadow-md">
      <div className="flex items-center gap-3">
        <button
          onClick={onMenuClick}
          className="text-white hover:bg-white/10 p-2 rounded transition-colors"
          aria-label="Toggle menu"
        >
          <Menu className="w-5 h-5" />
        </button>

        <div className="text-white hidden sm:block">
          Power Platform Developer
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative hidden sm:block">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <Input
            type="text"
            placeholder="Search projects…"
            className="pl-9 w-64 bg-white dark:bg-gray-800 border-0"
          />
        </div>

        <button
          onClick={toggleTheme}
          className="text-white hover:bg-white/10 p-2 rounded transition-colors"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
        </button>

        <a
          href="mailto:busayosamuel2016@gmail.com"
          className="text-white hover:bg-white/10 p-2 rounded transition-colors"
          aria-label="Send email"
        >
          <Mail className="w-5 h-5" />
        </a>
      </div>
    </div>
  );
}
