import { useState } from 'react';
import { ThemeProvider } from './components/ThemeContext';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { ProfilePage } from './components/ProfilePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ResumePage } from './components/ResumePage';
import { ArticlesPage } from './components/ArticlesPage';
import { CredentialsPage } from './components/CredentialPage';

function App() {
  const [activePage, setActivePage] = useState('projects');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const renderPage = () => {
    switch (activePage) {
      case 'profile':
        return <ProfilePage />;
      case 'projects':
        return <ProjectsPage />;
      case 'credentials':
        return <CredentialsPage />;
      case 'resume':
        return <ResumePage />;
      case 'articles':
        return <ArticlesPage />;
      default:
        return <ProjectsPage />;
    }
  };

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col bg-white dark:bg-[#201f1e]">
        <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            activePage={activePage}
            onPageChange={setActivePage}
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="flex-1 overflow-y-auto bg-white dark:bg-[#201f1e]">
            {renderPage()}
          </main>
        </div>

        <footer className="h-10 flex items-center justify-center bg-[#f3f2f1] dark:bg-[#323130] border-t border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            © 2025 Power Platform Developer Portfolio
          </p>
        </footer>
      </div>
    </ThemeProvider>
  );
}

export default App;
