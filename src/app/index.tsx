import React from "react";
import {Container, Stack, Box, Image, Text, Input, Icon, StackDivider} from "@chakra-ui/react";

import {AiOutlineSearch} from "react-icons/ai"
import {FiPrinter} from "react-icons/fi"
import {GoLocation} from "react-icons/go"
import {AiOutlineShoppingCart} from "react-icons/ai"

import logo from "../assets/logomeli.png"

import Routes from "./routes";

const App: React.FC = () => {
  return (
    <Stack>
        <Box boxShadow={"sm"} backgroundColor="primary.1000" paddingY={4}>
        <Container maxWidth="container.xl" >  
          <Stack spacing={3}>
           <Stack direction="row" justifyContent="space-between">
           <Stack direction="row" spacing={12} flex={1}>
              <Image objectFit="contain" maxWidth={"190px"} src={logo}/>
              <Stack 
              backgroundColor="white"
              boxShadow="sm"
              borderRadius="md"
              direction="row" 
              divider={<StackDivider />} 
              maxWidth={600}
              width="100%"
              padding={2} 
              alignItems="center"
              >
                <Input paddingX={2} variant="unstyled"/>
                <Icon as={AiOutlineSearch} width={5} height={5} color="gray.400"/>
              </Stack>
            </Stack>
            <Stack direction="row" alignItems="center" color="blackAlpha.700" spacing={3}>
              <Icon width={8} height={8} as={FiPrinter}/>
              <Text fontSize="lg" fontWeight="500">Compra tu Point y QR a $189</Text>
            </Stack>
           </Stack>
          <Stack direction="row" justifyContent="space-between" alignItems="baseline">
          <Stack direction="row" spacing={12} alignItems="baseline" >
              <Stack alignItems="center" direction="row" spacing={1}>
                <Icon as={GoLocation} width={6} height={6}/>
                <Stack spacing={0}>
                  <Text lineHeight="normal" fontSize="xs" color="blackAlpha.700">Enviar a</Text>
                  <Text fontSize="sm" lineHeight="normal">Buenos Aires 1876</Text>
                </Stack>
              </Stack>
              <Stack direction="row" fontSize="sm" color="blackAlpha.700" spacing={5}>
                <Text>Categorías</Text>
                <Text>Ofertas</Text>
                <Text>Historial</Text>
                <Text>Supermercado</Text>
                <Text>Moda</Text>
                <Text>Vender</Text>
                <Text>Ayuda</Text>
              </Stack>
            </Stack>
            <Stack direction="row" fontSize="sm" spacing={6} alignItems="center">
              <Text>Creá tu cuenta</Text>
              <Text>Ingresá</Text>
              <Text>Mis compras</Text>
              <Icon as={AiOutlineShoppingCart} width={6} height={6}></Icon>
            </Stack>
          </Stack>
          </Stack>
          </Container>
          </Box>
        <Container alignSelf="center" maxWidth="container.xl" paddingX={0}>
          <Routes />      
    </Container>
      </Stack>
  );
};

export default App;
