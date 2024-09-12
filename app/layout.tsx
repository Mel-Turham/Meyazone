import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import MenuSideBar from '@/components/MenuSideBar';
import { ThemeProvider } from '@/components/theme-provider';
import Navbar from '@/components/Navbar';
import { ToggleTheme } from '@/components/ToggleTheme';
import Footer from '@/components/Footer';
import { cn } from '@/lib/utils';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Mayazone',
	description: 'E-commerce web site',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body className={cn('flex flex-col min-h-screen antialiased')}>
				<ThemeProvider
					attribute='class'
					defaultTheme='light'
					enableSystem
					disableTransitionOnChange
				>
					<Navbar />
					<main className='grow'>
						<div className='fixed bottom-5 right-5'>
							<ToggleTheme />
						</div>
						{children}
						<MenuSideBar />
					</main>
					<Footer />
				</ThemeProvider>
			</body>
		</html>
	);
}
