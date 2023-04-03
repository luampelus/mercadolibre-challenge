import {Container, Box, Button, Wrap, Stack} from "@chakra-ui/react";
import React, {useState} from "react";

import styles from "./style.module.css";
import {QuestionComponent} from "./Preguntas";

const initialState = [
  "Buenas noches! Es sublimado o pintado?",
  "Tenés stock y envío a cba capital??",
  "Hola buenas tardes !! son originales? tienen en color negro?",
];

export const Description = () => {
  const [questions, setQuestions] = useState<string[]>(initialState);

  const changeState = (text: string) => {
    setQuestions([text, ...questions]);
  };

  return (
    <Container marginBottom="3em" maxWidth="718px">
      <Box fontSize="1.4em" fontWeight="400" paddingBottom="26px" paddingTop="40px">
        Descripción
      </Box>
      <Box color="666" fontSize="20px" fontWeight="300">
        TAZA DE CERAMICA CON LOGO MERCADO LIBRE.
        <br /> CAPACIDAD : 250 CC
        <br />
        <br />Este producto está disponible únicamente a través de MERCADO ENVÍOS, no puede ser enviado ni adquirido por otro medio.
        <br /><br/>Envíos a todo el país.
        <br />
        Stock Permanente.
        <br />
        <br />
        IMPORTANTE:<br />
        Estos productos han sido fabricados bajo especificaciones de Mercado Libre.<br /><br />
        FACTURACIÓN:<br />
        El producto será facturado una vez que haya sido confirmada la entrega, por favor asegúrese que su usuario tenga todos los datos correctamente cargados:<br />
        CUIT, Razón social, y domicilio fiscal.<br />
        En caso contrario será facturado a consumidor final.<br />
        La factura electrónica le será remitida vía mail o mensaje privado.<br />
        Ante cualquier duda no deje de consultarnos.<br /><br />

        ENVÍOS:<br />
        El producto será entregado en el domicilio cargado en su usuario. Por favor asegúrese que el mismo este actualizado y vigente, con todos los datos requeridos para evitar retrasos en la entrega de su producto.<br />
        Las compras realizadas de Lunes a Viernes antes de las 13 horas, serán despachadas el mismo día.<br />
        En caso de compras realizadas fuera de esos días y horarios, el despacho se realizará el siguiente día hábil.<br/>
      </Box>
      <Box fontSize="1.5em" fontWeight="400" paddingTop="80px">
        Preguntas y respuestas
      </Box>
      <Box fontSize="1.2em" fontWeight="600" marginBottom="33px" marginTop="40px">
        ¿Qué querés saber?
      </Box>
      <Wrap align="center" direction="row" spacing={3}>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgb(65 137 230 / 25%)"}}
          backgroundColor="rgba(65 137 230 / 15%)"
          color="#3483fa"
          cursor="pointer"
        >
          Costo y tiempo de envío
        </Button>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgb(65 137 230 / 25%)"}}
          backgroundColor="rgba(65 137 230 / 15%)"
          color="#3483fa"
          cursor="pointer"
        >
          Devoluciones gratis
        </Button>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgb(65 137 230 / 25%)"}}
          backgroundColor="rgba(65 137 230 / 15%)"
          color="#3483fa"
          cursor="pointer"
        >
          Medios de pago y promociones
        </Button>
        <Button
          _focus={{border: "none"}}
          _hover={{backgroundColor: "rgb(65 137 230 / 25%)"}}
          backgroundColor="rgba(65 137 230 / 15%)"
          color="#3483fa"
          cursor="pointer"
        >
          Garantía
        </Button>
      </Wrap>
      <Box fontSize="1.2em" fontWeight="600" marginTop="40px">
        Preguntale al vendedor
      </Box>
      <Stack direction="row">
        <QuestionComponent change={changeState} />
      </Stack>
      <Box>
        <Box fontSize="1.2em" fontWeight="600">
          Últimas realizadas
        </Box>
        {questions.map((el, i) => (
          <p key={i} className={styles.p}>
            {el}
          </p>
        ))}
        <Box color="#296DCB" cursor="pointer" fontSize="sm">
          Ver todas las preguntas
        </Box>
      </Box>
    </Container>
  );
};
