import { createContext, useContext, useState, type ReactNode } from 'react';
import type { PageId } from '@/data/content';

type NavContextType = {
  currentPage: PageId;
  navigate: (page: PageId) => void;
};

const NavContext = createContext<NavContextType>({
  currentPage: 'home',
  navigate: () => {},
});

export function NavProvider({ children }: { children: ReactNode }) {
  const [currentPage, setCurrentPage] = useState<PageId>('home');

  const navigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <NavContext.Provider value={{ currentPage, navigate }}>
      {children}
    </NavContext.Provider>
  );
}

export function useNav() {
  return useContext(NavContext);
}
