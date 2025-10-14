import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Analytics } from '@vercel/analytics/next'
import Script from "next/script"
import './globals.css'

export const metadata: Metadata = {
  title: 'One God',
  description: 'Jews and Christians united under One God — defending freedom, democracy, and human dignity together.',
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'One God',
    description: 'Jews and Christians united under One God — defending freedom, democracy, and human dignity together.',
    url: 'https://www.one-god.co',
    siteName: 'One God',
    images: [
      {
        url: 'https://one-god.co/logo-og.png',
        width: 1200,
        height: 630,
        alt: 'One God logo',
      },
    ],
    type: 'website',
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
        {/* ✅ Google Analytics Script */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=G-2WNTDVNYFE`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-2WNTDVNYFE', {
                page_path: window.location.pathname,
              });
            `,
          }}
        />
        {/* ✅ End Google Analytics Script */}

        {children}
        <Analytics />
      </body>
    </html>
  )
}
