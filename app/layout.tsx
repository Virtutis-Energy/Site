// app/layout.tsx
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import type { Metadata, Viewport } from 'next'

import { roboto, openSans, poppins } from './fonts' // seu novo arquivo de fontes

export const metadata: Metadata = {
  title: 'Virtutis Energy',
  description: '',
  manifest: '/manifest.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '570x591', type: 'image/png' },
    ],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'black-translucent',
    title: 'Virtutis Energy',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
  themeColor: '#000000',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${roboto.variable} ${openSans.variable} ${poppins.variable}`}>
     <head>
      {/* CSS principal */}
      <link rel="stylesheet" href="/styles/main.css" />

      {/* COMPONENTS */}
      <link rel="stylesheet" href="/styles/components/02_FE - SobreNós.css" />
      <link rel="stylesheet" href="/styles/components/04_FE - Investidores.css" />
      <link rel="stylesheet" href="/styles/components/05_FE - Cadastro.css" />
      <link rel="stylesheet" href="/styles/components/06_FE - TrabalheConosco.css" />
      <link rel="stylesheet" href="/styles/components/07_FE - Subdivisoes.css" />
      <link rel="stylesheet" href="/styles/components/index.css" />

      {/* LAYOUTS (Header e Footer) */}
      <link rel="stylesheet" href="/styles/layouts/footer.css" />
      <link rel="stylesheet" href="/styles/layouts/header.css" />

      {/* UTIL */}
      <link rel="stylesheet" href="/styles/util/hero.css" />
      <link rel="stylesheet" href="/styles/util/navgationDesktop.css" />
      <link rel="stylesheet" href="/styles/util/navgationMobile.css" />
      <link rel="stylesheet" href="/styles/util/scrollTop.css" />
      <link rel="stylesheet" href="/styles/util/widgets.css" />

      <link rel="stylesheet" href="/styles/vendor/bootstrap-icons/bootstrap-icons.css" />
    </head>

      <body className="index-page">{children}</body>
      
    </html>
  )
}
