import { useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './components/ThemeContext';
import { TopNav } from './components/TopNav';
import { Sidebar } from './components/Sidebar';
import { ProfilePage } from './components/ProfilePage';
import { ProjectsPage } from './components/ProjectsPage';
import { ResumePage } from './components/ResumePage';
import { ArticlesPage } from './components/ArticlesPage';
import { CredentialsPage } from './components/CredentialPage';

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <ThemeProvider>
      <div className="h-screen flex flex-col bg-white dark:bg-[#201f1e]">
        <TopNav onMenuClick={() => setSidebarOpen(!sidebarOpen)} />

        <div className="flex flex-1 overflow-hidden">
          <Sidebar
            isOpen={sidebarOpen}
            onClose={() => setSidebarOpen(false)}
          />

          <main className="flex-1 overflow-y-auto bg-white dark:bg-[#201f1e]">
            <Routes>
              <Route path="/" element={<Navigate to="/projects" replace />} />
              <Route path="/profile" element={<ProfilePage />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/credentials" element={<CredentialsPage />} />
              <Route path="/resume" element={<ResumePage />} />
              <Route path="/articles" element={<ArticlesPage />} />
              <Route path="*" element={<Navigate to="/projects" replace />} />
            </Routes>
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
