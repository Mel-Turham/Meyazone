import Link from 'next/link';
import React from 'react';
type Props = {
	path: string;
	link: string;
};
const NavLink = (props: Props) => {
	return <Link href={props.path}>{props.link}</Link>;
};

export default NavLink;
