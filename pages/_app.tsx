import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Archivo } from 'next/font/google'
import { SessionProvider } from 'next-auth/react'
import store from '../store/index'
import { Provider } from 'react-redux'
const manrope = Archivo({ weight: '400', subsets: ['latin'] })

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <Provider store={store}>
        <div className={`${manrope.className}`}>
          <Component {...pageProps} />
        </div>
      </Provider>
    </SessionProvider>
  )
}
