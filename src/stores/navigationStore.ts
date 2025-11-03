import { create } from 'zustand';

interface NavigationState {
  isMenuOpen: boolean;
  activeSection: string;
  setMenuOpen: (open: boolean) => void;
  setActiveSection: (section: string) => void;
}

export const useNavigationStore = create<NavigationState>((set) => ({
  isMenuOpen: false,
  activeSection: 'home',
  setMenuOpen: (open) => set({ isMenuOpen: open }),
  setActiveSection: (section) => set({ activeSection: section }),
}));
