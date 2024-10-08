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
		href: '/profil/1',
		label: 'Dashbaord',
		icon: <LayoutDashboard />,
	},
	{
		href: '/profil/1/userInfo',
		label: 'Personal Info',
		icon: <User />,
	},
	{
		href: '/profil/1/payementMetho',
		label: 'Payment Method',
		icon: <CreditCard />,
	},
	{
		href: '/profil/1/order',
		label: 'Order',
		icon: <ShoppingBag />,
	},
	{
		href: '/profil/1/wishlist',
		label: 'Wishlist',
		icon: <Heart />,
	},
	{
		href: '/profil/1/address',
		label: 'Address',
		icon: <MapPinHouse />,
	},
	{
		href: '/profil/1/userReviews',
		label: 'Reviews',
		icon: <ThumbsUp />,
	},
	{
		href: '/profil/1/changePassword',
		label: 'Change Password',
		icon: <LockKeyhole />,
	},
	{
		href: '/profil/1/supportticket',
		label: 'Support Ticket',
		icon: <UserRoundCheck />,
	},
];

const UserProfilLayout = ({ children }: { children: React.ReactNode }) => {
	return (
		<main className='grow pt-8 flex items-center justify-center'>
			<div className='flex gap-3 container py-12 dark:bg-slate-900 bg-gray-200/25'>
				<aside className='w-3/12 min-h-[90vh] flex flex-col gap-3 justify-between bg-white dark:bg-slate-800 shadow-sm py-8 px-10'>
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
				<div className='w-9/12 bg-white  dark:bg-slate-800 shadow-sm  pt-6 px-8'>
					{children}
				</div>
			</div>
		</main>
	);
};

export default UserProfilLayout;
