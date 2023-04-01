import {Stack, Image, Box, Text, Container} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import {Navigation} from "swiper";

import {swipperBtnPrev, swipperBtnNext, swipper, containerSwiper} from "./style.module.css";

export const Carrousel = () => {
  useEffect(() => {
    const prevBtn = document.querySelector(".swiper-button-prev");
    const nextBtn = document.querySelector(".swiper-button-next");

    prevBtn?.classList.add(swipperBtnPrev);
    nextBtn?.classList.add(swipperBtnNext);
  }, []);

  return (
    <Container className={containerSwiper} maxW="55em" width="90%" zIndex="0">
      <Box fontSize="1.5em" marginBottom="0.7em" marginTop="1em">
        Publicaciones del vendedor
      </Box>
      <Swiper
        className={swipper}
        loop={true}
        modules={[Navigation]}
        navigation={true}
        scrollbar={{draggable: true}}
        slidesPerGroup={2}
        slidesPerView={3}
        spaceBetween={1}
      >
        <Stack>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="gorra"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://i.ibb.co/zG5pzxb/meli-gorra.png"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $2.999
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                  Gorra Logo Mercado Libre Bordada 
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="remera"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://i.ibb.co/J5D0wQw/meli-remera.png" }
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $4.900
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Remera Logo Mercado Libre Hombre
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="botella"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://i.ibb.co/V9b4SrF/botella-meli.png"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $2.700
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                  Botella Logo Mercado Libre Metálica Aluminio Tapa Rosca 800cc
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="mochila"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://i.ibb.co/PwBmL8T/meli-mochila.png"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $7.900
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Mochila Espalda Logo Mercado Libre
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="libreta"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://i.ibb.co/h2Wx7mT/libreta-meli.jpg"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $1.090
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Libreta Anotador Cuaderno Logo Mercado Libre
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="Funda"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://i.ibb.co/2jqPrfj/funda-notebook.jpg"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $3.600
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">Funda Para Notebook 14 Pulgadas Logo Mercado Libre</Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
          <SwiperSlide>
            <Box cursor="pointer" marginBottom="1em">
              <Stack
                _hover={{boxShadow: "0px 7px 16px -2px rgba(116,113,122,0.65)"}}
                border="1px solid rgba(51,51,51,.1)"
                borderRadius="4px"
                height="25em"
                margin="0 0.5em 2em 0.5em"
              >
                <Image
                  alt="moussepad"
                  borderBottom="1px solid rgba(51,51,51,.1)"
                  paddingBottom="0.25em"
                  src={"https://i.ibb.co/kQZDDqt/mousepad-meli.jpg"}
                />
                <Box>
                  <Text fontSize="1.5em" margin="0em 0.6em 0em 0.6em">
                    $2.499
                  </Text>
                  <Text margin="0em 0.6em 2em 0.6em">
                    Moussepad Home Office Logo Mercado Libre 21x25 Cm
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SwiperSlide>
        </Stack>
      </Swiper>
      <Box _hover={{cursor: "pointer"}} color="#1259c3" marginBottom="1.5em">
        ver más publicaciones del vendedor
      </Box>
    </Container>
  );
};
