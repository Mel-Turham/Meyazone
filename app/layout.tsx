import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuSideBar from '@/components/MenuSideBar';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import { ToggleTheme } from '@/components/ToggleTheme';
import Footer from '@/components/Footer';
import ScrollTop from '@/components/ScrollTop';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mayazone',
	description: 'E-commerce web site',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main className='grow'>{children}</main>
					<MenuSideBar />
					<Footer />
					<div className='fixed left-5 top-1/2'>
						<ToggleTheme />
					</div>
					<ScrollTop />
				</ThemeProvider>
			</body>
		</html>
	);
}
