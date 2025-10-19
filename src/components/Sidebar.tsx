import { User, FolderOpen, FileText, BookOpen, X, Award } from 'lucide-react';

interface SidebarProps {
  activePage: string;
  onPageChange: (page: string) => void;
  isOpen: boolean;
  onClose: () => void;
}

export function Sidebar({ activePage, onPageChange, isOpen, onClose }: SidebarProps) {
  const menuItems = [
    { id: 'profile', label: 'Profile', icon: User },
    { id: 'projects', label: 'Projects', icon: FolderOpen },
    { id: 'credentials', label: 'Credentials', icon: Award },
    { id: 'resume', label: 'Resume', icon: FileText },
    { id: 'articles', label: 'Articles', icon: BookOpen },
  ];

  const handlePageChange = (page: string) => {
    onPageChange(page);
    // Close sidebar on mobile after selection
    if (window.innerWidth < 768) {
      onClose();
    }
  };

  return (
    <>
      {/* Backdrop for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          fixed md:relative top-0 left-0 h-full
          bg-[#f3f2f1] dark:bg-[#323130]
          border-r border-gray-200 dark:border-gray-700
          z-50 transition-all duration-300 ease-in-out
          ${isOpen
            ? 'w-56 translate-x-0'
            : 'w-56 -translate-x-full md:translate-x-0 md:w-16'
          }
        `}
      >
        {/* Close button for mobile */}
        <div className={`md:hidden flex justify-end p-2 border-b border-gray-200 dark:border-gray-700 ${isOpen ? 'block' : 'hidden'}`}>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors"
          >
            <X className="w-5 h-5 text-gray-700 dark:text-gray-300" />
          </button>
        </div>

        <nav className="py-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activePage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handlePageChange(item.id)}
                title={!isOpen ? item.label : undefined}
                className={`
                  w-full flex items-center gap-3 py-3 transition-colors
                  ${isOpen ? 'px-4' : 'px-4 md:px-0 md:justify-center'}
                  ${isActive
                    ? 'bg-white dark:bg-[#3b3a39] border-l-4 border-[#742774]'
                    : 'hover:bg-white hover:text-[#742774] dark:hover:bg-[#3b3a39] dark:hover:text-[#742774]'
                  }
                `}
              >
                <Icon className={`w-5 h-5 flex-shrink-0 ${isActive ? 'text-[#742774]' : 'text-gray-700 dark:text-gray-300'} transition-colors`} />
                <span className={`
                  ${isActive ? 'text-[#742774]' : 'text-gray-800 dark:text-gray-200'}
                  transition-all overflow-hidden whitespace-nowrap
                  ${isOpen ? 'opacity-100 w-auto' : 'opacity-100 w-auto md:opacity-0 md:w-0'}
                `}>
                  {item.label}
                </span>
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
