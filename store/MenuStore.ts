import { create } from 'zustand';

export interface MenuStore {
	isOpen: boolean;
	setIsOpen: (isOpen: boolean) => void;
}

export const useMenuStore = create<MenuStore>()((set) => ({
	isOpen: false,
	setIsOpen: (isOpen) => set(() => ({ isOpen })),
}));
