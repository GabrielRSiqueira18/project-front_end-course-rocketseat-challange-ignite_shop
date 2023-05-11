import { ImageContainer, ProductContainer, ProductDetails } from "@/styles/pages/product"
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import { useRouter } from "next/router";
import axios from "axios";
import { useState } from "react";
import Head from "next/head";
import { useShoppingCart } from "use-shopping-cart";

interface ProductProps {
  product: {
    id: string
    name: string
    imageUrl: string
    price: string
    description: string
    defaultPriceId: string
  }
  res: string[]
}

/*
  Usar useRouter para mandar para outra página na aplicação
  const router = useRouter()
  router.push("/destino")
*/

export default function Product({ product }: ProductProps) {  
  const [ isCreatingCheckoutSession, setIsCreatingCheckoutSession ] = useState(false)
  


  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true)

  //     const response = await axios.post("/api/checkout", {
  //       priceId: product.defaultPriceId,
  //     })

  //     const { checkoutUrl } = response.data

  //     window.location.href = checkoutUrl
  //   } catch (err) {
  //     //Datadog / Sentry
  //     setIsCreatingCheckoutSession(false)
  //     alert("Falha ao redirecionar ao checkout")
  //   }
  // }

  const { isFallback } = useRouter()
  const { addItem, clearCart  } = useShoppingCart()

  
    
    


  if(isFallback) {
    return <div>Loading...</div>
  }

  const priceFormatted = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL",
  }).format(Number(product.price) / 100)

  return (      
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt="" />
        </ImageContainer>
        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{priceFormatted}</span>
          <p>{product.description}</p>
          <button disabled={isCreatingCheckoutSession} onClick={() => addItem(product)}>Colocar na sacola</button>
        </ProductDetails>
      </ProductContainer> 
    </>
   
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({ params }) => {
  const productId = params!.id

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price'],
  })


  const price  = product.default_price as Stripe.Price
  
  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price:(price.unit_amount!),
        description: product.description,
        defaultPriceId: price.id,
      },
    },
    revalidate: 60 * 60 * 1, // 1 Hora
  }
}
