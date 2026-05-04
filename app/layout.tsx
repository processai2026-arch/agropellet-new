import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '../src/index.css'
import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { ThemeProvider } from "next-themes"
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Agro Power Pellet | Biomass Fuel & Supply Chain Solutions',
  description: "India's trusted biomass supply chain partner. Agro Power Pellet provides agro-residue trading, thermal energy solutions, and logistics optimization for industries.",
  keywords: 'biomass fuel, agro pellets, biomass supply chain, thermal energy, agro-residue trading, biomass logistics, renewable energy, India biomass, industrial fuel, eco-friendly fuel, pellets Tamil Nadu, biomass Tamil Nadu',
  authors: [{ name: 'Agro Power Pellet' }],
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    url: 'https://agropowerpellet.com/',
    title: 'Agro Power Pellet | Biomass Fuel & Supply Chain Solutions',
    description: "India's trusted biomass supply chain partner. Agro Power Pellet provides agro-residue trading, thermal energy solutions, and logistics optimization for industries.",
    images: [
      {
        url: 'https://agropowerpellet.com/placeholder.svg',
        width: 1200,
        height: 630,
        alt: 'Agro Power Pellet',
      },
    ],
    siteName: 'Agro Power Pellet',
    locale: 'en_IN',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agro Power Pellet | Biomass Fuel & Supply Chain Solutions',
    description: "India's trusted biomass supply chain partner. Agro Power Pellet provides agro-residue trading, thermal energy solutions, and logistics optimization for industries.",
    images: ['https://agropowerpellet.com/placeholder.svg'],
  },
  alternates: {
    canonical: 'https://agropowerpellet.com/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preconnect to Google Fonts for faster loading */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        
        <link rel="icon" type="image/png" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "Agro Power Pellet",
              "url": "https://agropowerpellet.com",
              "logo": "https://agropowerpellet.com/placeholder.svg",
              "description": "India's trusted biomass supply chain partner providing agro-residue trading, thermal energy solutions, and logistics optimization.",
              "address": {
                "@type": "PostalAddress",
                "addressRegion": "Tamil Nadu",
                "addressCountry": "IN"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+91-9940099060",
                "contactType": "Customer Service",
                "availableLanguage": ["English", "Tamil"]
              },
              "sameAs": [
                "https://wa.me/919940099060"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Providers>
          <ThemeProvider attribute="class" defaultTheme="light">
            <TooltipProvider>
              <Toaster />
              <Sonner />
              {children}
            </TooltipProvider>
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}