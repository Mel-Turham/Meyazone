import { create } from 'zustand';

export interface MenuStore {
  toggleSideBar: boolean;
  setToggleSideBar: (toggleSideBar: boolean) => void;
}

export const useToggleAdminSideBar = create<MenuStore>()((set) => ({
  toggleSideBar: false,
  setToggleSideBar: (toggleSideBar) => set(() => ({ toggleSideBar })),
}));
