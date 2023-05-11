import * as Dialog from '@radix-ui/react-dialog'
import { globalStyles } from '@/styles/global'
import type { AppProps } from 'next/app'

import logoImg from "../assets/logo.svg"
import {
   CloseButton,
   CloseButtonContainer,
   Container,
   DialogContentCustom, 
   DialogTitle, 
   Header, 
   ContentContainer, 
   InformationsAboutTshirtContainer, 
   ItemsBuyedsSingle, 
   ItemsBuyedsWrapper,
   FooterInformations,
  } from '@/styles/pages/app'

import Image from 'next/image'
import { Handbag, X } from 'phosphor-react'



globalStyles()

export default function App({ Component, pageProps }: AppProps) {

  return (
    <Container>
      <Dialog.Root>
        <Header>
          <Image src={logoImg} alt="" />
          <Dialog.Trigger asChild>
            <button>
              <Handbag size={24} color='#8D8D99'/>
            </button>
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
                  <ItemsBuyedsSingle>
                    <p>Teste</p>
                    <InformationsAboutTshirtContainer>
                      <h3>Camiseta Beyond the Limits</h3>
                      <strong>R$ 37,90</strong>
                      <button>Remover</button>
                    </InformationsAboutTshirtContainer>
                  </ItemsBuyedsSingle>
                </ItemsBuyedsWrapper>
                <FooterInformations>
                  <h2>
                    Teste
                  </h2>
                </FooterInformations>
              </ContentContainer>
                
              </CloseButtonContainer>
            </DialogContentCustom>
          </Dialog.Portal>
        </Header>
        
       </Dialog.Root>
      
       
      <Component {...pageProps} />

    </Container>
    
  )
}
