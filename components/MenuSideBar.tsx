'use client';
import { useRef } from 'react';
import { useMenuStore } from '@/store/MenuStore';
import { AnimatePresence, motion } from 'framer-motion';
import useOutSideClick from '@/hooks/useOutSideClick';

const MenuSideBar = () => {
	const { isOpen, setIsOpen } = useMenuStore();
	const menuBarRef = useRef<HTMLElement>(null);
	const handleClickOutsite = () => {
		setIsOpen(false);
	};
	useOutSideClick(menuBarRef, handleClickOutsite);

	return (
		<>
			{isOpen && (
				<>
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.3, stiffness: 50, ease: 'easeInOut' }}
						exit={{ opacity: 0 }}
						onClick={handleClickOutsite}
						className='cursor-pointer w-full h-screen fixed top-0 left-0 dark:bg-black/20 z-10 backdrop-blur-sm'
					></motion.div>
				</>
			)}
			{isOpen && (
				<AnimatePresence>
					<motion.aside
						ref={menuBarRef}
						initial={{ x: '-100%' }}
						animate={{ x: '0%' }}
						transition={{
							duration: 0.5,
							stiffness: 60,
							ease: 'easeInOut',
							mass: 40,
						}}
						exit={{ x: '-100%' }}
						className='w-[30%] bg-white dark:bg-slate-950 fixed top-0 h-screen shadow-sm z-20'
					>
						<h1>Hello world</h1>
					</motion.aside>
				</AnimatePresence>
			)}
		</>
	);
};

export default MenuSideBar;
