import { create } from 'zustand';

export interface MenuStore {
  toggleSideBar: boolean;
  setToggleSideBar: (toggleSideBar: boolean) => void;
}

export const useToggleSideBar = create<MenuStore>()((set) => ({
  toggleSideBar: true,
  setToggleSideBar: (toggleSideBar) => set(() => ({ toggleSideBar })),
}));
