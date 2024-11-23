import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme-provider';
import { Suspense } from 'react';
import Loading from '@/app/loading';
import { Toaster } from '@/components/ui/toaster';

const montserrat = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

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
          enableSystem={false}
          disableTransitionOnChange
        >
          <Toaster />
          <Suspense fallback={<Loading />}>
            <main className='min-h-screen grow'>{children}</main>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
