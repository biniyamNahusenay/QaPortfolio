// app/layout.tsx
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Biniyam - QA Portfolio',
  description: 'Biniyam Tesfaye - QA Engineer, Automation Tester, CI/CD Enthusiast',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-white text-gray-900`}>
        <header className="bg-blue-600 text-white p-4 shadow-md">
          <nav className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              Biniyam Nahusenay
            </Link>
            <div className="space-x-4">
              <Link href="/about" className="hover:text-blue-200">
                About
              </Link>
              <Link href="/skills" className="hover:text-blue-200">
                Skills
              </Link>
              <Link href="/projects" className="hover:text-blue-200">
                Projects
              </Link>
              <Link href="/contact" className="hover:text-blue-200">
                Contact
              </Link>
            </div>
          </nav>
        </header>

        <main className="container mx-auto p-4 py-8 min-h-[calc(100vh-160px)]">
          {children}
        </main>

        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <div className="container mx-auto">
            <p>&copy; {new Date().getFullYear()} Biniyam Nahusenay. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}