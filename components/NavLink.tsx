import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type LinkProps = {
	label: string;
	href: string;
};

const NavLink = ({ label, href }: LinkProps) => {
	const pathname = usePathname();
	return (
		<Link
			href={href}
			className={` hover:underline hover:underline-offset-8 transition-all duration-300 ease-linear  ${
				pathname === href ? 'underline underline-offset-8 ' : ''
			}`}
		>
			{label}
		</Link>
	);
};

export default NavLink;
