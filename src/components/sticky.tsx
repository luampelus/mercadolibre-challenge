import React from "react";
import {Container} from "@chakra-ui/react";

import {BuyNow} from "./buyNow";
import {SellerInfo} from "./sellerInfo";
import {Payments} from "./Payments";

export const Sticky = () => {
  return (
    <Container position="sticky" top="-35em">
      <BuyNow />
      <SellerInfo />
      <Payments />
    </Container>
  );
};
