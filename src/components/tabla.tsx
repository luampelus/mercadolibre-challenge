import React from "react";
import { Box, Grid } from "@chakra-ui/react";

const Table = () => {
    return (
        <Box my={8}>
            <Grid templateColumns="1fr 3fr" fontSize="16px">
                <Box bgColor="#EBEBEB" p={4} fontWeight={600}>
                    Marca
                </Box>
                <Box bgColor="#F5F5F5" p={4}>
                    Mercado Libre
                </Box>
                <Box bgColor="#F5F5F5" p={5} fontWeight={600}>
                    Fabricante
                </Box>
                <Box bgColor="#FFFFFF" p={4}>
                    #N/A
                </Box>
                <Box bgColor="#EBEBEB" p={5} fontWeight={600}>
                    Modelo
                </Box>
                <Box bgColor="#F5F5F5" p={4}>
                    Taza Logo Mercado Libre
                </Box>
                <Box bgColor="#F5F5F5" p={5} fontWeight={600}>
                    Unidades por pack
                </Box>
                <Box bgColor="#FFFFFF" p={4}>
                    1
                </Box>
                <Box bgColor="#EBEBEB" p={5} fontWeight={600}>
                    Capacidad en volumen
                </Box>
                <Box bgColor="#F5F5F5" p={4}>
                    250 Cc
                </Box>
            </Grid>
        </Box>
    );
};

export default Table;