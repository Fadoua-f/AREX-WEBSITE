import { NavProvider, useNav } from '@/context/NavContext';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ExpertisePage from '@/pages/ExpertisePage';
import ServicesPage from '@/pages/ServicesPage';
import ProjectsPage from '@/pages/ProjectsPage';
import NewsPage from '@/pages/NewsPage';
import ContactPage from '@/pages/ContactPage';

function PageRouter() {
  const { currentPage } = useNav();

  switch (currentPage) {
    case 'home':
      return <HomePage />;
    case 'about':
      return <AboutPage />;
    case 'expertise':
      return <ExpertisePage />;
    case 'services':
      return <ServicesPage />;
    case 'projects':
      return <ProjectsPage />;
    case 'news':
      return <NewsPage />;
    case 'contact':
      return <ContactPage />;
    default:
      return <HomePage />;
  }
}

function App() {
  return (
    <NavProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <PageRouter />
        </main>
        <Footer />
      </div>
    </NavProvider>
  );
}

export default App;
