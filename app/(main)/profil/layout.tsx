import { Button } from '@/components/ui/button';
import {
	CreditCard,
	Heart,
	LayoutDashboard,
	LockKeyhole,
	LogOut,
	MapPinHouse,
	ShoppingBag,
	ThumbsUp,
	User,
	UserRoundCheck,
} from 'lucide-react';
import Link from 'next/link';

const Links = [
	{
		href: '#',
		label: 'Dashbaord',
		icon: <LayoutDashboard />,
	},
	{
		href: '#',
		label: 'Parsonal Info',
		icon: <User />,
	},
	{
		href: '#',
		label: 'Payment Method',
		icon: <CreditCard />,
	},
	{
		href: '#',
		label: 'Order',
		icon: <ShoppingBag />,
	},
	{
		href: '#',
		label: 'Wishlist',
		icon: <Heart />,
	},
	{
		href: '#',
		label: 'Address',
		icon: <MapPinHouse />,
	},
	{
		href: '#',
		label: 'Reviews',
		icon: <ThumbsUp />,
	},
	{
		href: '#',
		label: 'Change Password',
		icon: <LockKeyhole />,
	},
	{
		href: '#',
		label: 'Support Ticket',
		icon: <UserRoundCheck />,
	},
];

const UserProfilLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='grow pt-8 flex items-center justify-center'>
			<div className='flex gap-3 container py-12 dark:bg-slate-900 bg-gray-200/25'>
				<aside className='w-3/12 min-h-screen flex flex-col gap-3 justify-between bg-white dark:bg-slate-800 shadow-sm pt-6 pb-3 px-4'>
					<h1 className='text-2xl font-bold'>Your Dashboard</h1>
					<ul className='mt-8 space-y-10'>
						{Links.map((link) => (
							<li key={link.label}>
								<Link href={link.href} className='flex items-center gap-2'>
									<span className='w-5 h-5 flex items-center justify-center'>
										{link.icon}
									</span>
									<span className='text-base'>{link.label}</span>
								</Link>
							</li>
						))}
					</ul>
					<Button size={'sm'} className='mt-5  flex items-center gap-2'>
						<span className='w-5 h-5 flex items-center justify-center'>
							<LogOut />
						</span>
						<span>Logout</span>
					</Button>
				</aside>
				<div className='w-9/12 bg-white  dark:bg-slate-800 shadow-sm  py-6 px-4'>
					{children}
				</div>
			</div>
		</main>
	);
};

export default UserProfilLayout;
