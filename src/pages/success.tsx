import { ImageContainer, ImagesWrapper, SuccessContainer } from "@/styles/pages/success";
import Link from "next/link";
import { GetServerSideProps } from 'next';
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import Image from "next/image";
import Head from "next/head";

interface SuccessProps {
  customerName: string
  products: {
    productName: string
    productImage: string
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  console.log(products)
  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>

        <meta name="robots" content="noindex" />
      </Head>
      <SuccessContainer>
        <ImagesWrapper>
          {products.map(product => {
            return (
              <ImageContainer key={product.productName}>
                <Image width={150} height={160} src={product.productImage} alt=""/>
              </ImageContainer>
            )
          })}
        </ImagesWrapper>

        <h1>Compra efetuada!</h1>

        {products.length > 1 ? (
          <p>Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camisetas já estão a caminho da sua casa. </p>
        ) : (
          <p>Uhuul <strong>{customerName}</strong>, sua compra de {products.length} camiseta já está a caminho da sua casa. </p>
        ) }

        <Link href={"/"}>
          Voltar ao catálogo
        </Link>
      </SuccessContainer>
    </>
    
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const sessionId = String(query.session_id)
  
  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId, {
      expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details?.name
    // const product = session.line_items?.data[0].price?.product as Stripe.Product

    const products = session.line_items!.data.map(item => {
      const product = item.price?.product as Stripe.Product
      return {
        productName: product.name,
        productImage: product.images[0]
      }
    })
  
    return {
      props: {
        customerName,
        products
      }
    }
  } catch (err) {
    return {
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }
}