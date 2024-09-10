'use client';
import { useRef } from 'react';
import { useMenuStore } from '@/store/MenuStore';
import { AnimatePresence, motion } from 'framer-motion';
import useOutSideClick from '@/hooks/useOutSideClick';

const variantsMenuBar = {
	hidden: {
		x: '-100%',
	},
	show: {
		x: '0%',
		transition: {
			ease: 'linear',
		},
	},
	exit: {
		x: '-100%',
		transition: {
			ease: 'linear',
		},
	},
};

const MenuSideBar = () => {
	const { isOpen, setIsOpen } = useMenuStore();
	const menuBarRef = useRef<HTMLElement>(null);

	// Fermer le menu si on clique en dehors
	useOutSideClick(menuBarRef, () => setIsOpen(false));

	return (
		<AnimatePresence mode='wait'>
			{isOpen && (
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					className='cursor-pointer w-full h-screen fixed top-0 left-0 bg-black/60 z-10 '
				>
					<motion.aside
						ref={menuBarRef}
						variants={variantsMenuBar}
						initial='hidden'
						animate='show'
						exit='exit'
						className='w-[30%] bg-white dark:bg-slate-950 fixed top-0 h-screen shadow-sm z-20'
					>
						<h1>Hello world</h1>
					</motion.aside>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default MenuSideBar;
