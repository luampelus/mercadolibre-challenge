import {Container, Box, Button, Wrap, Stack} from "@chakra-ui/react";
import React, {useState} from "react";

import {p} from "./style.module.css";
import {QuestionComponent} from "./QuestionComponent";

const initialState = [
  "Hola, tenés en rosa ??",
  "Hola Lo puedo a pasar a buscar hoy?",
  "Es exactamente como en la foto? Los ojos son diferentes en otras publicaciones.",
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
      <Box color="666" fontSize="20px" fontWeight="400">
        Material 100% reciclado y reciclable.
        <br /> Cartón corrugado onda C, 4 mm de espesor.
        <br />
        100 cajas eCommerce N°2 en caja contenedora.
        <br />
        <br /> Medidas internas: 190 mm de largo, 163 mm de ancho, 120 mm de alto.
        <br />
        Peso máximo recomendado del contenido: 4 kg.*<br /> Apilado máximo recomendado: 5 cajas.*
        <br /> Certificación FSC.
        <br /> <br />
        Ideal para envíos de elementos pequeños: electrónica chica, accesorios cámaras, juguetes pequeños, etc.
        <br />
        En caso de que el producto sea más pequeño que la caja, contemplar colocar relleno para su protección.
        <br />
        <br/>
        Resguardarlas de líquidos y humedad.<br />
        <br />Este producto está disponible únicamente a través de MERCADO ENVÍOS, no puede ser enviado ni adquirido por otro medio.
        <br /><br/>Envíos a todo el país.
        <br />
        Stock Permanente.
        <br />
        <br />
        *Tanto el peso como el apilado máximo, dependen del tipo de producto que vaya a contener la caja, en caso de duda consultar.
        <br />
        IMPORTANTE:<br />
        Estos productos han sido fabricados bajo especificaciones de Mercado Libre.<br />
        Excluya de su interior elementos cortantes o punzantes sin protección que puedan dañar la caja.
        No arrojar en la vía pública.<br /><br />

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
          <p key={i} className={p}>
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
