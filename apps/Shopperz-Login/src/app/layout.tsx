import '../styles/globals.css';
import { Metadata, Viewport } from 'next';
import clsx from 'clsx';

import { Providers } from './providers';
import { fontSans } from '../config/fonts';

export const metadata: Metadata = {
  title: {
    default: 'Login',
    template: '',
  },
  description: 'Login to Shopperz',
  icons: {
    icon: '/favicon.ico',
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          'min-h-screen bg-background font-sans antialiased',
          fontSans.variable
        )}
      >
        <Providers themeProps={{ attribute: 'class', defaultTheme: 'dark' }}>
          <div className="relative flex flex-col h-screen bg-gradient-to-r from-blue-500 to-purple-600 h-screen flex justify-center items-center">
            <main className="container mx-auto pt-16 px-6 flex-grow">
              {children}
            </main>
            <footer className="w-full flex items-center justify-center py-3">
              Made by Jayesh
            </footer>
          </div>
        </Providers>
      </body>
    </html>
  );
}
