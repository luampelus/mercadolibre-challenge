import React from "react";
import { Box, Text, Stack, Link, color } from "@chakra-ui/react";
import { MdChevronRight } from "react-icons/md";

const FirstComponent = () => {
    return (
        <Box
            display="flex"
            flexDir="row"
            justifyContent="space-between"
            py={4}
            alignItems="flex-end"
        >
            <Stack gap={3}>
                <Stack direction="row" fontSize="sm" alignItems="center">
                    <Text
                        float="left"
                        margin="0 25px 0 0"
                        position="relative"
                        _hover={{cursor: "pointer", color:"#0078FF"}}
                        _after={{
                            backgroundColor: "rgba(0, 0, 0, .2)",
                            content: '""',
                            height: "14px",
                            position: "absolute",
                            right: "-16px",
                            top: "3px",
                            width: "1px",
                        }}
                    >
                        Volver al listado
                    </Text>
                    <Link>Industrias y Oficinas</Link>
                    <Text>
                        <MdChevronRight
                            style={{
                                color: "RGBA(0, 0, 0, 0.36)",
                                fontSize: "16px",
                            }}
                        />
                    </Text>
                    <Link>Embalaje y Logística</Link>
                    <Text>
                        <MdChevronRight
                            style={{
                                color: "RGBA(0, 0, 0, 0.36)",
                                fontSize: "16px",
                            }}
                        />
                    </Text>
                    <Link>Materiales</Link>
                    <Text>
                        <MdChevronRight
                            style={{
                                color: "RGBA(0, 0, 0, 0.36)",
                                fontSize: "16px",
                            }}
                        />
                    </Text>
                    <Link>Cajas de Embalaje</Link>
                </Stack>
            </Stack>
            <Stack direction="row" fontSize="sm">
                <Link
                    float="left"
                    margin="0 25px 0 0"
                    position="relative"
                    _after={{
                        backgroundColor: "rgba(0, 0, 0, .2)",
                        content: '""',
                        height: "14px",
                        position: "absolute",
                        right: "-18px",
                        top: "3px",
                        width: "1px",
                    }}
                >
                    Compartir
                </Link>
                <Link>Vender uno igual</Link>
            </Stack>
        </Box>
    );
};

export default FirstComponent;