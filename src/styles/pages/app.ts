import * as Dialog from '@radix-ui/react-dialog'
import { styled } from "..";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  margin: "0 auto",
})

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: "1180px",
  margin: "0 auto",
  display: "flex",
  justifyContent: "space-between",  

  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: 0,
    borderRadius: 6,
    cursor: "pointer",
    position: "relative",
    width: "3rem",
    height: "3rem",
    backgroundColor: "$gray800",

    "&:disabled": {
      cursor: "default",
      borderRadius: 0,
    },
    
    span: {
      width: "1.5rem",
      height: "1.5rem",
      border: 0,
      borderRadius: "50%",
      backgroundColor: "$green500",
      
      position: "absolute",
      top: "-5px",
      right: "-10px",
      color: "$white",

      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontWeight: "700",
      fontSize: "0.875rem",
    },
  },
})

export const DialogContentCustom = styled(Dialog.Content, {
  position: "fixed",
  top: 0,
  right: 0,
  height: "100vh",
  width: "30rem",
  backgroundColor: "$gray800",
  boxShadow: "-4px 0px 30px rgba(0, 0, 0, 0.8)",
  
  display: "flex",
  flexDirection: "column",

})

export const CloseButtonContainer = styled("div", {
  display: "flex",
  justifyContent: "right",
  alignItems: "center",
  width: "100%",
  marginTop: "1.5rem",
  paddingRight: "1.5rem",
})

export const CloseButton = styled(Dialog.Close, {
  width: "1.5rem",
  height: "1.5rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "transparent",
  border: 0,
  color: "white",
  cursor: "pointer",

  svg: {
    width: "4rem",
    height: "4rem",
    color: "#8D8D99",

    "&:hover": {
      color: "$gray100",
    },
  },
})

export const ContentContainer = styled("div", {
  width: "100%",
  padding: "4rem",
})

export const DialogTitle = styled(Dialog.Title, {
  fontWeight: 700,
  fontSize: "1.25rem",
  color: "$gray100",
})

export const ItemsBuyedsWrapper = styled("div", {
  marginTop: "2rem",
  width: "100%",

  display: "flex",
  flexDirection: "column",

  gap: "1.5rem",
})

export const ItemsBuyedsSingle = styled("div", {
  display: "grid",
  justifyContent: "left",
  gridTemplateColumns: "1fr 2fr",
  gap: "1.5rem",
})

export const ImageContainer = styled("div", {
  width: "100%",
  height: "100%",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  border: 0,
  borderRadius: 8,

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
})

export const InformationsAboutTshirtContainer = styled("div", {
  display: "flex",
  flexDirection: "column",

  h3: {
    fontWeight: "400",
    fontSize: "1.125rem",
    color: "$gray300",
    width: "100%",
    marginBottom: "0.5rem",
  },

  strong: {
    fontWeight: "700",
    fontSize: "1.125rem",
    color: "$gray100",
    marginBottom: "0.5rem",
  },

  button: {
    background: "transparent",
    border: 0,
    color: "$green500",
    fontSize: "1rem",
    fontWeight: "700",
    textAlign: "left",
    marginBottom: "0.5rem",
    cursor: "pointer",

    "&:hover": {
      color: "$green300",
    },
  }
})

export const FooterInformations = styled("footer", {
  position: "absolute",
  bottom: 0,
  width: "100%",
  paddingBottom: "4rem",
})

export const InformationsAboutBuyContainer = styled("div", {
  marginBottom: "0.5",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  paddingRight: "8rem",
  color: "$gray100",

  h2: {
    fontSize: "1.125rem",
    fontWeight: 700,
  },

  h3: {
    fontSize: "1rem",
    fontWeight: 400,
  },

  span: {
    fontSize: "1.125rem",
   
    fontWeight: 400,
  },

  p: {
    fontSize: "1.5rem",
    fontWeight: 700,
  },
})


export const FormButton = styled("form", {
  width: "100%",
  paddingRight: "8rem",
  marginTop: "3.5rem",

  button: {
    width: "100%",
    padding: "1.25rem 0",
    display: "flex",
    textAlign: "center",
    justifyContent: "center",
    color: "$gray100",
    fontSize: "1.125rem",
    fontWeight: 700,
    backgroundColor: "$green500",
    border: 0,
    borderRadius: 8,
    cursor: "pointer",

    "&:hover": {
      transition: "backgroundColor 0.2s",
      backgroundColor: "$green300",
    }
  },
})