import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    primary: {
      500: "#1A73E8",  
      600: "#0D47A1",  
    },
    secondary: {
      500: "#21A179",  
      600: "#1E7D57",  
    },
    gray: {
      100: "#F5F7FA", 
      800: "#333",     
    },
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "gray.100",  
        color: "gray.800",            
      },
    },
  },
});

export default theme;
