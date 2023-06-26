import Head from 'next/head'
import Footer from './components/Footer'
import Navbar from './components/NavBar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Echo',
  description: 'Created by Algo Hussle | ',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        {/* Add more meta tags as needed */}
      </Head>
      <body className={`${inter.className} gradient-bg flex flex-col min-h-screen`}>
        <Navbar/>
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
