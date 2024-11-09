import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { Toaster } from '@/components/ui/toaster';

const montserrat = Montserrat({ subsets: ['latin'] });

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
      <body className={montserrat.className}>
        <ThemeProvider
          attribute='class'
          defaultTheme='light'
          enableSystem={true}
          disableTransitionOnChange
        >
          <Toaster />
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
