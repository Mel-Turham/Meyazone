import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuSideBar from '@/components/MenuSideBar';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import { ToggleTheme } from '@/components/ToggleTheme';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={inter.className}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<div className='fixed bottom-5 right-5'>
						<ToggleTheme />
					</div>
					<Navbar />
					<main>
						{children}
						<MenuSideBar />
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
