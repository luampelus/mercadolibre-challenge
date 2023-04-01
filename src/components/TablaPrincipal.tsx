import { Box, Grid, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import Table from "./tabla";

export const TablaPrincipal = () => {
  return (
    <>
        <Box m={8} paddingLeft={2}>
            <Heading fontWeight={400} fontSize="24px">
                Características principales
            </Heading>
            <Table />
            <Heading fontWeight={400} fontSize="18px">
                Otras características
            </Heading>
            <Grid templateColumns="1fr 1fr" my={6} fontSize="sm">
                <Stack>
                    <Text fontWeight={600}>
                        Material:{" "}
                        <Text as="span" fontWeight={400}>
                          Cerámica
                        </Text>
                    </Text>
                </Stack>
            </Grid>
        </Box>
        
    </>
);
};
