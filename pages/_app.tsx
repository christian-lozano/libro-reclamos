import { AnimatePresence } from 'framer-motion'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Script from 'next/script'
import { useMemo } from 'react'
import { CartProvider } from 'react-use-cart'

/// #if DEV
// eslint-disable-next-line import/order
import { Dev } from '@dev/dev'
/// #endif

import { Banner } from '@/components/banner/banner'
import type { FooterProps } from '@/components/footer/footer'
import type { HeaderProps } from '@/components/header/header'
import { Loader } from '@/components/loader/loader'
import { Overlay } from '@/components/overlay/overlay'
import { AppLayout } from '@/layouts/app-layout'
import { gaTrackingId, isDev, isProd } from '@/utils/env'
import { scrollToTop } from '@/utils/scrollToTop'
import '@/styles/_index.css'
import IconWhatapp from '@/components/icon-whatsapp/icon-whatapp'

export const Header = dynamic<HeaderProps>(() =>
  import(/* webpackChunkName: 'common' */ '@/components/header/header').then(
    (mod) => mod.Header
  )
)

export const Footer = dynamic<FooterProps>(() =>
  import(/* webpackChunkName: 'common' */ '@/components/footer/footer').then(
    (mod) => mod.Footer
  )
)

export default function App({ Component, pageProps, router }: AppProps) {
  const isCatalogPage = useMemo(
    () =>
      router?.pathname === '/catalog/[[...slugs]]' || router?.pathname === '/',
    [router?.pathname]
  )

  return (
    <CartProvider>
      <AppLayout>
        <Head>
          <title>Fritz Sport</title>
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1,maximum-scale=1,viewport-fit=cover"
          />
        </Head>

        {/* Google Analytics */}
        {isProd && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${gaTrackingId}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){window.dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', '${gaTrackingId}');
            `}
            </Script>
          </>
        )}

        <Banner
          size="xs-large"
          className="hidden z-header bg-black"
          fullWidth={true}
        >
          20% de Descuento! Solo por este mes*
        </Banner>
        <Header />

        <AnimatePresence exitBeforeEnter={true} onExitComplete={scrollToTop}>
          <Component {...pageProps} key={router.route} />
        </AnimatePresence>
        {/* <RemoveProductCartStock /> */}
        {/* <RemoveProductCartStock /> */}
        <Footer />

        <Loader layout={isCatalogPage ? 'bar' : 'overlay'} />
        <Overlay />

        {isDev && <Dev />}
        <IconWhatapp />
      </AppLayout>
    </CartProvider>
  )
}
