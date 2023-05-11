import { styled } from "..";

export const HomeContainer = styled("main", {
  display: "flex",
  width: "100%",
  maxWidth: "calc(100vw - ((100vw - 1180px)/2))",
  marginLeft: "auto",
  minHeight: "656px"
})

export const Product = styled("div", {
  background: "linear-gradient(180deg, #1ea483 0%, #7465d4 100%)",
  borderRadius: "8px",
  // padding: "0.25rem",
  cursor: "default",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  
  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: "6px",
    display: "flex",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: "0",
    transition: "all 0.2s ease-in-out",

    section: {
      display: "flex",
      flexDirection: "column",
      gap: "1rem",
    },

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },

    button: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      border: 0,
      borderRadius: 6,
      cursor: "pointer",
  
      width: "3.5rem",
      height: "3.5rem",
      backgroundColor: "$green500",

      "&:hover": {
        transition: "background-color 0.2s",
        backgroundColor: "$green300",
      }
    },

  },

  '&:hover': {
    footer: {
      transform: "translateY(0%)",
      opacity: "1",
    }
  }
})
