import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Archivo } from 'next/font/google'
const manrope = Archivo({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className={manrope.className}>
      <Component {...pageProps} />
    </div>
  )
}
