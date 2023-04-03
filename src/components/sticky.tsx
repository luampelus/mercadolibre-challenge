import React from "react";
import {Container} from "@chakra-ui/react";

import {BuyNow} from "./Comprar";
import {SellerInfo} from "./InfoVendedor";
import {Payments} from "./MetodosDePago";

export const Sticky = () => {
  return (
    <Container position="sticky" top="-35em">
      <BuyNow />
      <SellerInfo />
      <Payments />
    </Container>
  );
};
