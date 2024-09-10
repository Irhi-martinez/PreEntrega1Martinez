import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./NavBar/NavBar";
import ItemListContainer from "./ItemListContainer/ItemListContainer";

const App = () => {

  return <ChakraProvider>
    <NavBar/>
    <ItemListContainer greeting="Bienvenidos a la Tienda Web"/>
  </ChakraProvider>;

};


export default App;