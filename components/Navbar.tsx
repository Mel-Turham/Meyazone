'use client';

import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import {
	Bus,
	ChevronRight,
	Heart,
	MapPin,
	Menu,
	Repeat,
	Search,
	ShoppingBag,
	ShoppingCart,
	User,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useTheme } from 'next-themes';
import {
	Select,
	SelectContent,
	SelectItem,
	SelectValue,
	SelectTrigger,
} from '@/components/ui/select';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { useMenuStore } from '@/store/MenuStore';
import { usePathname } from 'next/navigation';
import NavLink from '@/components/NavLink';
import { departments } from '@/db';
import useOutSideClick from '@/hooks/useOutSideClick';

// Définition des liens de navigation principaux
const links = [
	{ linkId: 1, label: 'Home', href: '/' },
	{ linkId: 2, label: 'Shop', href: '/shop' },
	{ linkId: 3, label: 'Blog', href: '/blog' },
	{ linkId: 4, label: 'About Us', href: '/about' },
	{ linkId: 5, label: 'Contact Us', href: '/contact' },
];

// Interface pour le mega menu
interface MegaMenuProps {
	megaMenu:
		| {
				id: number;
				categoryName: string;
				links: { id: number; label: string }[];
		  }[]
		| undefined;
}

const Navbar: React.FC = () => {
	const { setIsOpen, isOpen } = useMenuStore();
	const [isDrowp, setIsDrowp] = useState<boolean>(false);
	const { theme, systemTheme } = useTheme();
	const pathname = usePathname();
	const [megaMenuItem, setMegaMenuItem] =
		useState<MegaMenuProps['megaMenu']>(undefined);
	const [isHoveringMegaMenu, setIsHoveringMegaMenu] = useState<boolean>(false);
	const handleOnMouseEnter = useCallback(
		(megaMenu: MegaMenuProps['megaMenu']) => {
			megaMenu && setMegaMenuItem(megaMenu);
		},
		[],
	);

	const handleOnMouseLeave = useCallback(() => {
		if (!isHoveringMegaMenu) {
			setMegaMenuItem(undefined);
		}
	}, [isHoveringMegaMenu]);
	// Gestion du scroll lors de l'ouverture du menu
	useEffect(() => {
		const html = document.querySelector<HTMLHtmlElement>('html');
		const body = document.querySelector<HTMLBodyElement>('body');

		if (isOpen) {
			html?.classList.add('scrollbar-w-0', 'scrollbar');
			body?.classList.add('overflow-hidden');
		} else {
			html?.classList.remove('scrollbar-w-0', 'scrollbar');
			body?.classList.remove('overflow-hidden');
		}

		return () => {
			html?.classList.remove('scrollbar-w-0', 'scrollbar');
			body?.classList.remove('overflow-hidden');
		};
	}, [isOpen]);
	const refMenuDepartement = useRef<HTMLDivElement>(null);
	useOutSideClick(refMenuDepartement, () => {
		setIsDrowp(false);
	});
	const handleMenuDepartement = useCallback(() => {
		setIsDrowp((prev) => !prev);
	}, []);
	// Pages où le footer doit être caché
	const hideFooter = ['/login', '/register'];
	const shouldHide = hideFooter.includes(pathname);

	// Sélection du logo en fonction du thème
	const logoSrc = useMemo(() => {
		const currentTheme = theme === 'system' ? systemTheme : theme;
		return currentTheme === 'light' ? '/logo-dark.png' : '/logo-white.png';
	}, [theme, systemTheme]);

	if (shouldHide) return null;

	return (
		<header className='w-full bg-white text-slate-800 dark:bg-slate-950 dark:text-white flex flex-col border-b border-solid border-slate-100 dark:border-gray-700'>
			{/* Barre supérieure */}
			<div className='container flex items-center justify-between py-2'>
				<span className='text-gray-600 text-sm dark:text-gray-100 font-normal'>
					Bienvenue sur la boutique Meyazone
				</span>
				<div className='flex items-center space-x-3 divide-x'>
					{[
						{
							icon: MapPin,
							text: 'Localisateur de magasin',
							className: 'pe-4',
						},
						{ icon: Bus, text: 'Suivre votre commande', className: 'px-4' },
						{ icon: ShoppingBag, text: 'Boutique', className: 'px-4' },
						{ icon: User, text: 'Mon compte', className: 'ps-4' },
					].map(({ icon: Icon, text, className }, index) => (
						<div
							key={index}
							className={`flex items-center text-gray-600 text-sm gap-1 cursor-pointer dark:text-gray-100 ${className}`}
						>
							<Icon className='w-4 h-4' strokeWidth={1} />
							<span>{text}</span>
						</div>
					))}
				</div>
			</div>
			<Separator />
			{/* Barre de navigation principale */}
			<div className='container flex items-center justify-between py-2'>
				<Link href='/' className='w-2/12'>
					<Image
						src={logoSrc}
						alt='Logo Meyazone'
						loading='lazy'
						title='Meyazone - Votre boutique en ligne'
						width={200}
						height={200}
						className='w-full h-full object-contain'
					/>
				</Link>

				<div className='w-7/12 flex items-center gap-2 justify-between'>
					<div
						onClick={() => setIsOpen(!isOpen)}
						className='mr-8 flex items-center justify-center'
					>
						<Menu className='w-7 h-7 cursor-pointer' aria-label='Menu' />
					</div>
					<form
						className='flex items-center w-[95%] rounded-full ps-2 border border-solid overflow-hidden border-gray-200 bg-gray-50 p-1'
						role='search'
					>
						<Select>
							<SelectTrigger className='focus-visible:ring-transparent focus-visible:ring-0 rounded-full border-none outline-none w-[40%] bg-transparent dark:text-gray-500'>
								<SelectValue placeholder='Toutes les catégories' />
							</SelectTrigger>
							<SelectContent>
								{[
									'Tout',
									'Non catégorisé',
									'Accessoires',
									'Caméras & Photographie',
									'Ordinateurs',
									'Gadgets',
									'Divertissement maison',
									'Ordinateurs portables',
									'Smartphones',
									'Jeux vidéo',
									'Stéréos',
									'Home Cinéma',
								].map((category) => (
									<SelectItem
										key={category}
										value={category.toLowerCase().replace(/ /g, '-')}
									>
										{category}
									</SelectItem>
								))}
							</SelectContent>
						</Select>
						<Input
							type='search'
							placeholder='Rechercher des produits'
							className='outline-none focus-visible:ring-transparent focus-visible:ring-0 border-none rounded-full w-[48%] pl-6 bg-transparent text-slate-600'
							aria-label='Rechercher des produits'
						/>
						<Button
							type='submit'
							size='icon'
							className='rounded-full h-[38.8px] w-[38.8px] p-0 ml-auto dark:bg-slate-900 text-white'
							aria-label='Rechercher'
						>
							<Search strokeWidth={2} className='w-6 h-6' />
						</Button>
					</form>
				</div>
				<div className='w-2/12 flex items-center between gap-5'>
					<TooltipProvider>
						{[
							{
								icon: Repeat,
								tooltip: 'Comparer',
								ariaLabel: 'Comparer les produits',
							},
							{
								icon: Heart,
								tooltip: 'Liste de souhaits',
								ariaLabel: 'Voir la liste de souhaits',
							},
							{
								icon: User,
								tooltip: 'Mon compte',
								ariaLabel: 'Accéder à mon compte',
							},
							{
								icon: ShoppingCart,
								tooltip: 'Panier',
								extra: <span className='absolute -right-12'>0,00 €</span>,
								ariaLabel: 'Voir le panier',
							},
						].map(({ icon: Icon, tooltip, extra, ariaLabel }, index) => (
							<Tooltip key={index}>
								<TooltipTrigger
									className='relative flex items-center gap-5'
									aria-label={ariaLabel}
								>
									<Icon
										strokeWidth={1.5}
										className='text-gray-600 w-5 h-5 dark:text-gray-100'
									/>
									{extra}
								</TooltipTrigger>
								<TooltipContent side='bottom'>
									<p>{tooltip}</p>
								</TooltipContent>
							</Tooltip>
						))}
					</TooltipProvider>
				</div>
			</div>

			{/* Barre de navigation inférieure */}
			<div className='container flex items-center justify-between h-14 relative border-t border-solid border-gray-700 py-1'>
				<Card className='w-[260px] rounded-sm absolute top-7 left-20  z-10'>
					<CardHeader className='bg-myprimary py-2 px-4'>
						<CardTitle className='flex items-center  gap-6'>
							<Menu
								className='w-6 h-6 text-black cursor-pointer'
								onClick={handleMenuDepartement}
							/>
							<span className='text-sm  font-medium text-black tracking-wide'>
								Tous les départements
							</span>
						</CardTitle>
					</CardHeader>
					<AnimatePresence mode='wait'>
						{isDrowp && (
							<motion.div
								ref={refMenuDepartement}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.5, ease: 'easeInOut' }}
								exit={{ opacity: 0 }}
							>
								<CardContent className='p-1 rounded-none divide-y-[0.4px] relative'>
									{departments.map((department) => (
										<div className='flex flex-col gap-2' key={department.id}>
											<div
												onMouseEnter={() =>
													handleOnMouseEnter(department?.megaMenu)
												}
												onMouseLeave={handleOnMouseLeave}
												className='flex items-center justify-between hover:dark:bg-slate-700 transition-all duration-300 ease-in-out dark:text-white text-slate-800 ps-4 rounded hover:bg-slate-100'
											>
												<Link
													href='#'
													className='text-sm font-medium tracking-wide py-2'
												>
													{department.name}
												</Link>
												{department?.megaMenu && (
													<ChevronRight
														className='w-6 h-6 text-muted-foreground'
														strokeWidth={1.5}
													/>
												)}
											</div>
										</div>
									))}
									<AnimatePresence mode='wait'>
										{megaMenuItem && (
											<motion.div
												onMouseEnter={() => setIsHoveringMegaMenu(true)}
												onMouseLeave={() => {
													setIsHoveringMegaMenu(false);
													setMegaMenuItem(undefined);
												}}
												initial={{ scaleX: 0, opacity: 0, originX: 'left' }}
												animate={{ scaleX: 1, opacity: 1, originX: 'left' }}
												transition={{
													delay: 0.5,
													duration: 0.3,
													ease: 'easeOut',
													stiffness: '80',
													type: 'keyframes',
												}}
												exit={{ scaleX: 0, opacity: 0, originX: 'left' }}
												className='absolute top-0 -right-[45vw] flex gap-5 w-[45vw] border-t-[1rem] px-5 py-8 bg-white dark:bg-slate-950 dark:text-white text-slate-800 z-10 border-solid border-myprimary'
											>
												{megaMenuItem.map((i) => (
													<div className='space-y-3 w-1/2' key={i.id}>
														<h3 className='text-lg text-balance font-bold capitalize'>
															{i.categoryName}
														</h3>
														<ul className='space-y-4'>
															{i.links.map((link) => (
																<li
																	key={link.id}
																	className='hover:underline hover:underline-offset-4 text-sm'
																>
																	<Link href='#'>{link.label}</Link>
																</li>
															))}
														</ul>
													</div>
												))}
											</motion.div>
										)}
									</AnimatePresence>
								</CardContent>
							</motion.div>
						)}
					</AnimatePresence>
				</Card>
				<div className='w-[260px]'></div>
				<nav className='flex items-center' aria-label='Navigation principale'>
					<ul className='flex items-center text-slate-600 font-medium dark:text-white'>
						{links.map((link) => (
							<li key={link.linkId} className='px-4'>
								<NavLink label={link.label} href={link.href} />
							</li>
						))}
					</ul>
				</nav>
				<div className='h-full px-2 py-1 bg-myprimary flex gap-2 rounded items-center cursor-pointer text-black'>
					<Image
						src='/call.png'
						alt='Icône de téléphone'
						loading='lazy'
						width={40}
						height={40}
						className='w-[20%] h-full object-contain'
					/>
					<div className='grid grid-rows-2 place-content-center h-full'>
						<small className='font-light leading-none text-xs text-nowrap'>
							Appelez-nous 24h/7
						</small>
						<p className='text-lg text-nowrap font-bold space-x-1 '>
							<span>+237</span>
							<span>672</span>
							<span>54</span>
							<span>22</span>
							<span>25</span>
						</p>
					</div>
				</div>
			</div>
		</header>
	);
};

export default Navbar;
