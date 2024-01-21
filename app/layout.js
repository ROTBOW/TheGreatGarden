import { Inter } from 'next/font/google';
import './globals.css';
import './globalIcons.css';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Great Garden',
  description: 'Planet flowers with little notes',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
