import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { Source_Sans_Pro } from '@next/font/google'
import { IBM_Plex_Mono } from '@next/font/google'

const sourceSansPro = Source_Sans_Pro({
  subsets: ['latin'],
  weight: ['400', '600']
})

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '600']
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <main className={sourceSansPro.className}>
      <Component {...pageProps} />
    </main>
  )
}

export default MyApp
