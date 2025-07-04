// app/layout.tsx
import './globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'

import { roboto, openSans, poppins } from './fonts' // seu novo arquivo de fontes

export const metadata = {
  title: 'Virtutis Energy',
  description: '',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt" className={`${roboto.variable} ${openSans.variable} ${poppins.variable}`}>
      <head>
        
     

        {/* CSS Vendors */}
        {/* <link rel="stylesheet" href="/styles/vendor/bootstrap-icons/bootstrap-icons.css" />
        <link rel="stylesheet" href="/styles/vendor/aos/aos.css" />
        <link rel="stylesheet" href="/styles/vendor/fontawesome-free/css/all.min.css" />
        <link rel="stylesheet" href="/styles/vendor/glightbox/css/glightbox.min.css" />
        <link rel="stylesheet" href="/styles/vendor/swiper/swiper-bundle.min.css" /> */}

        {/* Seu CSS principal */}
        <link rel="stylesheet" href="/styles/main.css" />
        {/* <!-- COMPONENTS --> */}
        <link rel="stylesheet" href="/styles/components/02_FE - SobreNós.css" />
        <link rel="stylesheet" href="/styles/components/04_FE - Investidores.css" />
        <link rel="stylesheet" href="/styles/components/05_FE - Cadastro.css" />
        <link rel="stylesheet" href="/styles/components/06_FE - TrabalheConosco.css" />
        <link rel="stylesheet" href="/styles/components/index.css" />

        {/* <!-- UTIL --> */}
        <link rel="stylesheet" href="/styles/util/hero.css" />
        <link rel="stylesheet" href="/styles/util/navgationDesktop.css" />
        <link rel="stylesheet" href="/styles/util/navgationMobile.css" />
        <link rel="stylesheet" href="/styles/util/scrollTop.css" />
        <link rel="stylesheet" href="/styles/util/widgets.css" />
      </head>
      <body className="index-page">{children}</body>
    </html>
  )
}