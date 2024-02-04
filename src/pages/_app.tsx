import SEO from '@/components/SEO'
import { ScrollToTop } from '@/components/ScrollToTop'
import '@/styles/globals.css'
import { NextIntlClientProvider } from 'next-intl'
import type { AppProps } from 'next/app'
import { Poppins } from 'next/font/google'
import { useRouter } from 'next/router'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['400', '700'],
})

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <NextIntlClientProvider
      locale={router.locale}
      timeZone='Europe/Lisbon'
      messages={pageProps.messages}
    >
      <div className={poppins.className}>
        <SEO />
        <ScrollToTop />
        <Component {...pageProps} />
      </div>
    </NextIntlClientProvider>
  )
}
