import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Archivo } from 'next/font/google'
const manrope = Archivo({ weight: '400', subsets: ['latin'] })
import { SessionProvider } from 'next-auth/react'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <div className={manrope.className}>
        <Component {...pageProps} />
      </div>
    </SessionProvider>
  )
}
