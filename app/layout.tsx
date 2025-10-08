import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

/* export const metadata: Metadata = {
  title: 'One God',
  description: 'Jews and Christians united under One God, defending our shared heritage of freedom, democracy, and human dignity against all forms of extremism.',
  // generator: 'v0.app',
  icons: {
    icon: '/logo.png',
  },
}*/
export const metadata: Metadata = {
  title: 'One God',
  description:
    'Jews and Christians united under One God, defending our shared heritage of freedom, democracy, and human dignity against all forms of extremism.',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'One God',
    description:
      'Jews and Christians united under One God, defending our shared heritage of freedom, democracy, and human dignity against all forms of extremism.',
    url: 'https://cheery-sunshine-8e8841.netlify.app', // ✅ your actual site URL
    siteName: 'One God',
    images: [
      {
        url: 'https://cheery-sunshine-8e8841.netlify.app/logo.png', // ✅ must be FULL URL!
        width: 1200,
        height: 630,
        alt: 'One God logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'One God',
    description:
      'Jews and Christians united under One God, defending our shared heritage of freedom, democracy, and human dignity against all forms of extremism.',
    images: ['https://cheery-sunshine-8e8841.netlify.app/logo.png'],
  },
}






export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
