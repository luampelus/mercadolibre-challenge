import React from "react";
import {Stack, StackDivider} from "@chakra-ui/react";

import FirstComponent from "../../components/Categorias";

import {TablaPrincipal} from "./../../components/TablaPrincipal";
import {PrincipalGallery} from "../../components/Galeria";
import {Carrousel} from "./../../components/Carrousel";
import {Description} from "../../components/Descripcion";
import {Opinions} from "../../components/Opiniones";
import {Sticky} from "./../../components/sticky";
const HomeScreen: React.FC = () => {
  return (
    <>
      <FirstComponent />

      <Stack backgroundColor="white" borderRadius="7px" direction="row" id="main" minWidth="1184px">
        <Stack
          backgroundColor="white"
          borderRadius="7px"
          divider={<StackDivider backgroundColor="blackAlpha.300" marginLeft="2em !important" />}
          id="izquierda"
          maxWidth="770px"
        >
          <PrincipalGallery />
          <Carrousel />
          <TablaPrincipal />
          <Description />
          <Opinions />
        </Stack>
        <Stack id="derecho">
          <Sticky />
        </Stack>
      </Stack>
    </>
  );
};

export default HomeScreen;
