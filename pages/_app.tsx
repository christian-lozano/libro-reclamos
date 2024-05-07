import Head from 'next/head'
import { CartProvider } from 'react-use-cart'

/// #endif

import '@/styles/_index.css'
import { Footer } from '@/components/footer/footer'
import { AppLayout } from '@/layouts/app-layout'

export default function App() {
  return (
    <CartProvider>
      <AppLayout>
        <Head>
          <title>Fritz Sport consultas</title>
        </Head>

        <Footer />
      </AppLayout>
    </CartProvider>
  )
}
