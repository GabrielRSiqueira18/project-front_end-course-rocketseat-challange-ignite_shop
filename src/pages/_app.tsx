
import { AppComponent } from '@/components/App'
import { globalStyles } from '@/styles/global'
import { Container } from '@/styles/pages/app'
import type { AppProps } from 'next/app'





import { CartProvider } from "use-shopping-cart"






globalStyles()

export default function App({ Component, pageProps}: AppProps) {



  return (
    <Container>
      <CartProvider 
        shouldPersist={true}
        cartMode="checkout-session"
        stripe={process.env.STRIPE_SECRET_KEY!}
        currency="BRL"
      >
        <AppComponent />

        <Component {...pageProps} />
      </CartProvider>
    
     </Container>
    
  )
}