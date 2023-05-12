import { HomeContainer, Product } from "@/styles/pages/home"
import { useKeenSlider } from "keen-slider/react"
import 'keen-slider/keen-slider.min.css'
import Image from "next/image"
import Link from "next/link"

import { stripe } from "@/lib/stripe"
import { GetStaticProps } from "next"
import Stripe from "stripe"
import Head from "next/head"
import { Handbag } from "phosphor-react"

interface HomeProps {
  products: {
    id: string
    name: string
    imageUrl: string
    price: string
  }[]
}

export default function Home({ products }: HomeProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2.5,
      spacing: 36,
    }
  })

  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
      
        {products.map(product => {
          return (
            <div 
              key={product.id}
              className="keen-slider__slide"
            >
                
              <Product>
                <Image src={product.imageUrl} width={520} height={480} alt={""} />

                <footer>
                  <section>
                    <strong>{product.name}</strong>
                    <span>{product.price}</span>
                  </section>
                  <Link
                    href={`/product/${product.id}`}
                    prefetch={false}
                  >
                    <button>
                      <Handbag color="#fff"  size={32}/>
                    </button>
                  </Link>
                </footer>
              </Product>
            </div>
          )
        })}
      </HomeContainer>

      {/* <DebugCart /> */}

    </>
    
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  
  const products = response.data.map(product => {
    const price  = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
      }).format(price.unit_amount! / 100) ,
      
    }
  })

  return {
    props: {
      products,
    },
    revalidate: 60 * 60 * 2, // 2 Horas
  }
}