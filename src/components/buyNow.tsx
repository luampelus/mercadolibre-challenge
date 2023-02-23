import React, { useState } from "react";
import {
    Box,
    Stack,
    Text,
    Heading,
    Link,
    Menu,
    MenuButton,
    Button,
    MenuList,
    MenuItem,
    Image,
} from "@chakra-ui/react";
import { AiOutlineHeart, AiFillHeart, AiOutlineTrophy } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { TbArrowBack, TbTruckDelivery } from "react-icons/tb";
import { BiChevronDown } from "react-icons/bi";
import security from "../assets/security.png";



export const BuyNow = () => {
    const [unidades, setUnidades] = useState("1 unidad");
    const [corazon, setCorazon] = useState(false);
    return (
        <Box border="1px solid RGBA(0, 0, 0, 0.08)" borderRadius="8px" p={4}>
            <Stack>
                <Stack
                    direction="row"
                    fontSize="sm"
                    color="blackAlpha.500"
                    fontWeight={400}
                >
                    <Text
                        float="left"
                        margin="0 10px 0 0"
                        position="relative"
                        _after={{
                            backgroundColor: "rgba(0, 0, 0, .2)",
                            content: '""',
                            height: "10px",
                            position: "absolute",
                            right: "-10px",
                            top: "6px",
                            width: "1px",
                        }}
                    >
                        Nuevo
                    </Text>
                    <Text>50 vendidos</Text>
                </Stack>
                <Stack direction="row">
                    <Heading fontSize="22px">Caja De Cartón Ecommerce N°2 (19x16,3x12) X 100 Unidades</Heading>
                    <Stack userSelect="none">
                    {corazon ? (
                    <AiOutlineHeart
                        style={{
                            fontSize: "46px",
                            color: "#3483FA",
                            cursor: "pointer",
                            paddingBottom: "20px",
                        }}
                        onClick={() => setCorazon(false)}
                    />
                    ) : (
                    <AiFillHeart
                    style={{
                        fontSize: "46px",
                        color: "#3483FA",
                        cursor: "pointer",
                        paddingBottom: "20px",
                    }}
                        onClick={() => setCorazon(true)}
                        />
                    )}
                    </Stack>
                </Stack>
                <Box mt={2}>
                    <Text fontSize="36px" fontWeight="300">
                        ${" "}
                        {10784
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ".")}{" "}
                    </Text>
                    <Text fontSize="18px" mt="-10px">
                        en 6x $ 2.666
                    </Text>
                    <Link fontSize="sm">Ver los medios de pago</Link>
                </Box>
                <Box>
                    <Stack direction="row" mt={4}>
                        <TbTruckDelivery
                            style={{ color: "#00A650", fontSize: "23px" }}
                        />
                        <Box>
                            <Text color="#00A650" fontWeight={400}>
                                Llega gratis <b>mañana</b>
                            </Text>
                            <Text color="blackAlpha.600" fontSize="sm">
                                Solo en CABA y zonas de GBA
                            </Text>
                            <Text color="blackAlpha.600" fontSize="sm">
                                Comprando dentro de las próximas <b>12 h 30 min</b>
                            </Text>
                            <Link fontSize="sm">Ver más formas de entrega</Link>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Stack direction="row" mt={4}>
                        <TbArrowBack
                            style={{ color: "#00A650", fontSize: "23px" }}
                        />
                        <Box>
                            <Text color="#00A650" fontWeight={400}>
                                Devolución gratis
                            </Text>
                            <Text color="blackAlpha.600" fontSize="sm">
                                Tenés 30 días desde que lo recibís.
                            </Text>
                            <Link fontSize="sm">Conocer más</Link>
                        </Box>
                    </Stack>
                </Box>
                <Box>
                    <Stack mt={5}>
                        <Text fontWeight={700} mb={2}>Stock disponible</Text>
                        <Stack direction="row" alignItems="center">
                            <Text>Cantidad:</Text>
                            <Menu>
                                <MenuButton
                                    marginRight="-10px"
                                    as={Button}
                                    background="transparent"
                                    rightIcon={
                                        <BiChevronDown
                                            style={{
                                                color: "#3483FA",
                                                fontSize: "24px",
                                                marginLeft: "-8px",
                                            }}
                                        />
                                    }
                                >
                                    {unidades}
                                </MenuButton>
                                <MenuList backgroundColor="white">
                                    {[
                                        "1 unidad",
                                        "2 unidades",
                                        "3 unidades",
                                        "4 unidades",
                                        "5 unidades",
                                    ].map((item, i) => (
                                        <MenuItem
                                            key={i}
                                            backgroundColor="white"
                                            color={
                                                item === unidades
                                                    ? "#3483FA"
                                                    : "blackAlpha.800"
                                            }
                                            fontWeight={
                                                item === unidades
                                                    ? "600"
                                                    : "400"
                                            }
                                            borderLeft={
                                                item === unidades
                                                    ? "2px solid #3483FA"
                                                    : "40"
                                            }
                                            _hover={{
                                                backgroundColor:
                                                    "blackAlpha.100",
                                            }}
                                            onClick={() => setUnidades(item)}
                                        >
                                            {item}
                                        </MenuItem>
                                    ))}
                                </MenuList>
                            </Menu>
                            <Text fontSize="sm" color="blackAlpha.600">
                                (12 disponibles)
                            </Text>
                        </Stack>
                    </Stack>
                </Box>
                <Stack pt={8}>
                    <Button
                        bgColor="#3483FA"
                        _hover={{ backgroundColor: "#2968C8" }}
                        height="50px"
                        color="white"
                    >
                        Comprar ahora
                    </Button>
                    <Button
                        bgColor="rgba(65,137,230,.15)"
                        _hover={{ backgroundColor: "#D9E7FA" }}
                        height="50px"
                        color="#3483FA"
                    >
                        Agregar al carrito
                    </Button>
                </Stack>
                <Box>
                    <Box mt={3}>
                        <Stack direction="row" alignItems="center" p={2}>
                            <Image
                                src={security}
                                alt="mercado pago"
                                width="16px"
                            />

                            <Text fontSize="sm" fontWeight="700">
                                <Link>Compra protegida, </Link>
                                <Text
                                    as="span"
                                    color="blackAlpha.600"
                                    fontWeight={400}
                                >
                                    recibí el producto que esperabas o te
                                    devolvemos tu dinero
                                </Text>
                            </Text>
                        </Stack>
                    </Box>
                </Box>
                <Box>
                    <Box mt={-2}>
                        <Stack direction="row" alignItems="center" p={2}>
                            <AiOutlineTrophy style={{ fontSize: "18px", color: "gray" }} />

                            <Text fontSize="sm" fontWeight="700">
                                <Link>Mercado Puntos, </Link>
                                <Text
                                    as="span"
                                    color="blackAlpha.600"
                                    fontWeight={400}
                                >
                                    sumás 12 puntos.
                                </Text>
                            </Text>
                        </Stack>
                    </Box>
                </Box>
            </Stack>
        </Box>
    );
};