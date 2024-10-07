import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { Suspense } from 'react';
import Loading from '@/app/loading';

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
					defaultTheme='dark'
					enableSystem
					disableTransitionOnChange
				>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</ThemeProvider>
			</body>
		</html>
	);
}
