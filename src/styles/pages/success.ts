import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: "656px",

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: "560px",
    textAlign: 'center',
    marginTop: "2rem",
    lineHeight: "1.4",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    textDecoration: "none",
    fontWeight: "bold",

    "&:hover": {
      color: "$green300",
    },
  },
})

export const ImagesWrapper = styled("div", {
  display: "flex",
})

export const ImageContainer = styled("div", {
  width: "100%",
  maxWidth: "160px",
  height: "160px",
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "50%",
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "4rem",
  marginBottom: "4rem",
  position: "relative", 

  "&:not(:first-child)": {
    marginLeft: "-4rem", 
  },

  img: {
    objectFit: "cover",
  },

})