import Image from 'next/image'
import { Handbag, X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import logoImg from "../assets/logo.svg"
import { useShoppingCart } from "use-shopping-cart";
import Link from "next/link"

import {
  CloseButton,
  CloseButtonContainer,
  DialogContentCustom, 
  DialogTitle, 
  Header, 
  ContentContainer, 
  InformationsAboutTshirtContainer, 
  ItemsBuyedsSingle, 
  ItemsBuyedsWrapper,
  FooterInformations,
  InformationsAboutBuyContainer,
  FormButton,
  ImageContainer,
 } from '@/styles/pages/app'
import { CartEntry } from 'use-shopping-cart/core'

interface ItemsBuyeds {
  defaultPriceId: string
  description: string
  formattedPrice: string
  formattedValue: string
  id: string
  imageUrl: string
  name: string
  price: number
  price_data: {}
  product_data: {}
  quantity: number
  value: number
}

export function AppComponent() {
  const { cartDetails, removeItem } = useShoppingCart();
  
  let catDetailsArray: [string, CartEntry][]
  const itemsBuyedsList: ItemsBuyeds[] = []

  if(cartDetails) {
    catDetailsArray = Object.entries(cartDetails)
  } else {
    catDetailsArray = []
  }
  catDetailsArray.forEach((item: any) => {
    itemsBuyedsList.push((item[1]))
  })
 
  const quantityItemsBuyeds = itemsBuyedsList.reduce((acc, item) => acc + item.quantity, 0)
  const totalPriceItemsBuyeds = itemsBuyedsList.reduce((acc, item) => acc + ((item.price * item.quantity)) / 100, 0)
  const totalPriceItemsBuyedsFormatted = new Intl.NumberFormat('pt-BR', {
    style: "currency",
    currency: "BRL",
  }).format(totalPriceItemsBuyeds)

  return (
    <Dialog.Root>
      <Header>
       <Link href={"/"}>
        <Image src={logoImg} alt="" />
       </Link>
        <Dialog.Trigger asChild>
        {quantityItemsBuyeds === 0 ? (
          <button disabled>
            <Handbag size={24} color='#8D8D99'/>
          </button>
        ) : (
          <button>
            <span>{quantityItemsBuyeds}</span>
            <Handbag size={24} color='#fff'/>
          </button>
        )}
        </Dialog.Trigger>
        <Dialog.Portal>
          <DialogContentCustom>
            <CloseButtonContainer>
              <CloseButton>
                <X size={64} />
              </CloseButton>
            </CloseButtonContainer>
            <CloseButtonContainer>  
            <ContentContainer>
              <DialogTitle>
                Sacola de compras
              </DialogTitle>
              <ItemsBuyedsWrapper>
                {itemsBuyedsList.map((item: ItemsBuyeds) => {
                  return (
                    <ItemsBuyedsSingle key={item.id}>
                      <ImageContainer>
                        <Image src={item.imageUrl} width={100} height={100} alt=""/>
                      </ImageContainer>
                      <InformationsAboutTshirtContainer>
                        <h3>{item.name}</h3>
                        <strong>{item.formattedPrice}</strong>
                        <button onClick={() => removeItem(item.id)}>Remover</button>
                        <p>Quantidade: {item.quantity}</p>
                      </InformationsAboutTshirtContainer>
                    </ItemsBuyedsSingle>
                  )
                })}
              </ItemsBuyedsWrapper>
              <FooterInformations>
                <InformationsAboutBuyContainer>
                  <h3>Quantidade</h3>
                  <span>{quantityItemsBuyeds} itens</span>
                </InformationsAboutBuyContainer>
                <InformationsAboutBuyContainer>
                  <h2>Valor total</h2>
                  <p>{totalPriceItemsBuyedsFormatted}</p>
                </InformationsAboutBuyContainer>
                <FormButton>
                  <button>
                    Finalizar compra
                  </button>
                </FormButton>
              </FooterInformations>
            </ContentContainer>
              
            </CloseButtonContainer>
          </DialogContentCustom>
        </Dialog.Portal>
      </Header>
      
    </Dialog.Root>
  )
}