import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import FullScreenContentProvider from '@/Reducer/FullScreenContentReducer'
import { Poppins } from 'next/font/google'
const ubuntu = Poppins({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <FullScreenContentProvider>
      <div className={ubuntu.className}>
        <Component {...pageProps} />
      </div>
    </FullScreenContentProvider>
  )
}
