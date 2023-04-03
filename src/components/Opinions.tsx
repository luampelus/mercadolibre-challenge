import React, {useState} from "react";
import {
  Container,
  Box,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Stack,
  Flex,
  Progress,
} from "@chakra-ui/react";
import {AiFillLike, AiOutlineLike, AiFillDislike, AiOutlineDislike} from "react-icons/ai";

export const Opinions = () => {
  const [like, setlike] = useState(false);
  const [liketwo, setliketwo] = useState(false);
  const [likethree, setlikethree] = useState(false);
  const [dislike, setdislike] = useState(false);
  const [disliketwo, setdisliketwo] = useState(false);
  const [dislikethree, setdislikethree] = useState(false);

  return (
    <Container marginTop="2em" maxWidth="718px">
      <Box color="#333" fontSize="24px" fontWeight="400" paddingTop="14px">
        Opiniones sobre Taza Logo Mercado Libre 250 Cc
        <Container>
          <Box display="flex">
            <Box width="55%">
              <Box fontSize="64px" fontWeight="300" paddingLeft="1.2em">
                5.0
              </Box>
              <Box>
                <Box display="flex" justifyContent="space-between" paddingBottom="7px" width="7em">
                  <svg
                    aria-hidden="true"
                    className="ui-review-view__rating__summary__rating__star"
                    height="24px"
                    margin-right="8px"
                    viewBox="0 0 10 10"
                    width="25.2px"
                  >
                    <path
                      d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                      fill="#3483FA"
                      fillRule="evenodd"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="ui-review-view__rating__summary__rating__star"
                    height="24px"
                    margin-right="8px"
                    viewBox="0 0 10 10"
                    width="25.2px"
                  >
                    <path
                      d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                      fill="#3483FA"
                      fillRule="evenodd"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="ui-review-view__rating__summary__rating__star"
                    height="24px"
                    margin-right="8px"
                    viewBox="0 0 10 10"
                    width="25.2px"
                  >
                    <path
                      d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                      fill="#3483FA"
                      fillRule="evenodd"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="ui-review-view__rating__summary__rating__star"
                    height="24px"
                    margin-right="8px"
                    viewBox="0 0 10 10"
                    width="25.2px"
                  >
                    <path
                      d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                      fill="#3483FA"
                      fillRule="evenodd"
                    />
                  </svg>
                  <svg
                    aria-hidden="true"
                    className="ui-review-view__rating__summary__rating__star"
                    height="24px"
                    margin-right="8px"
                    viewBox="0 0 10 10"
                    width="25.2px"
                  >
                    <path
                      d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                      fill="#3483FA"
                      fillRule="evenodd"
                    />
                  </svg>
                </Box>
                <Box fontSize="sm">Promedio entre 3 opiniones</Box>
              </Box>
            </Box>
            <Box marginLeft="1.5em" paddingTop="1em" width="100%">
              <Stack alignItems="center" direction="row" marginBottom="4px">
                <Box fontSize="md" width="23%">
                  5 estrellas
                </Box>
                <Progress bg="#3483FA" borderRadius={2} size="xs" value={0} width="50%" />
                <Box fontSize="md" paddingLeft="9px">
                  4
                </Box>
              </Stack>
              <Stack alignItems="center" direction="row" marginBottom="4px">
                <Box fontSize="md" width="23%">
                  4 estrellas
                </Box>
                <Progress bg="#E5E5E5" borderRadius={2} size="xs" value={0} width="50%" />
                <Box fontSize="md" paddingLeft="9px">
                  0
                </Box>
              </Stack>
              <Stack alignItems="center" direction="row" marginBottom="4px">
                <Box fontSize="md" width="23%">
                  3 estrellas
                </Box>
                <Progress bg="#E5E5E5" borderRadius={2} size="xs" value={0} width="50%" />
                <Box fontSize="md" paddingLeft="9px">
                  0
                </Box>
              </Stack>
              <Stack alignItems="center" direction="row" marginBottom="4px">
                <Box fontSize="md" width="23%">
                  2 estrellas
                </Box>
                <Progress bg="#E5E5E5" borderRadius={2} size="xs" value={0} width="50%" />
                <Box fontSize="md" paddingLeft="9px">
                  0
                </Box>
              </Stack>
              <Stack alignItems="center" direction="row" marginBottom="4px">
                <Box fontSize="md" width="23%">
                  1 estrellas
                </Box>
                <Progress bg="#E5E5E5" borderRadius={2} size="xs" value={0} width="50%" />
                <Box fontSize="md" paddingLeft="9px">
                  0
                </Box>
              </Stack>
            </Box>
          </Box>
        </Container>
      </Box>
      <Box height="35em" paddingTop="42px">
        <Tabs width="100%">
          <TabList>
            <Tab
              _focus={{outline: "none"}}
              _selected={{
                color: "#3483FA",
                borderBottom: "2px solid",
                transition: "border-bottom 1.4s",
                borderBottomColor: "#3483FA",
              }}
              fontWeight="600"
              width="33.33%"
            >
              Todas
            </Tab>
            <Tab
              _focus={{outline: "none"}}
              _selected={{
                color: "#3483FA",
                borderBottom: "2px solid",
                transition: "border-bottom 1.4s",
                borderBottomColor: "#3483FA",
              }}
              fontWeight="600"
              width="33.33%"
            >
              Positivas
            </Tab>
            <Tab
              _focus={{outline: "none"}}
              _selected={{
                color: "#3483FA",
                borderBottom: "2px solid",
                transition: "border-bottom 1.4s",
                borderBottomColor: "#3483FA",
              }}
              fontWeight="600"
              width="33.33%"
            >
              Negativas
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <Stack>
                <Box display="flex">
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginTop="0.6em"
                      paddingBottom="7px"
                      width="8em"
                    >
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Box>
                    <Box marginTop="0.6em">
                    Muy buena calidad. Recibimos todo en perfecta condición. Y súper rápido. Lo recomendamos al 100 %.
                    </Box>
                    <Box alignItems="center" display="flex">
                      <Flex alignItems="center" marginRight="2em" userSelect="none">
                        {like ? (
                          <>
                            <AiFillLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              height="22px"
                              size={"1.2rem"}
                              onClick={() => setlike(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setlike(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                      <Flex alignItems="center" userSelect="none">
                        {dislike ? (
                          <>
                            <AiFillDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdislike(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdislike(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                
                </Box>
                <Box display="flex">
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginTop="0.6em"
                      paddingBottom="7px"
                      width="8em"
                    >
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Box>
                    <Box marginTop="0.6em">
                    Hermosa. La compré especialmente para el microondas. La uso todos los días para desayunar.
                    </Box>
                    <Box alignItems="center" display="flex">
                      <Flex alignItems="center" marginRight="2em" userSelect="none">
                        {liketwo ? (
                          <>
                            <AiFillLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              height="22px"
                              size={"1.2rem"}
                              onClick={() => setliketwo(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setliketwo(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                      <Flex alignItems="center" userSelect="none">
                        {disliketwo ? (
                          <>
                            <AiFillDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdisliketwo(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdisliketwo(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                 
                </Box>
                <Box display="flex">
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginTop="0.6em"
                      paddingBottom="7px"
                      width="8em"
                    >
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Box>
                    <Box marginTop="0.6em">
                    Muy buen producto. Muy conforme con la compra.
                    </Box>
                    <Box alignItems="center" display="flex">
                      <Flex alignItems="center" marginRight="2em" userSelect="none">
                        {likethree ? (
                          <>
                            <AiFillLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              height="22px"
                              size={"1.2rem"}
                              onClick={() => setlikethree(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setlikethree(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                      <Flex alignItems="center" userSelect="none">
                        {dislikethree ? (
                          <>
                            <AiFillDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdislikethree(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdislikethree(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                  
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack>
                <Box display="flex">
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginTop="0.6em"
                      paddingBottom="7px"
                      width="8em"
                    >
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Box>
                    <Box marginTop="0.6em">
                    Muy buena calidad. Recibimos todo en perfecta condición. Y súper rápido. Lo recomendamos al 100 %.
                    </Box>
                    <Box alignItems="center" display="flex">
                      <Flex alignItems="center" marginRight="2em">
                        {like ? (
                          <>
                            <AiFillLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              height="22px"
                              size={"1.2rem"}
                              onClick={() => setlike(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setlike(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                      <Flex alignItems="center">
                        {dislike ? (
                          <>
                            <AiFillDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdislike(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdislike(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                 
                </Box>
                <Box display="flex">
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginTop="0.6em"
                      paddingBottom="7px"
                      width="8em"
                    >
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Box>
                    <Box marginTop="0.6em">
                      Hermosa. La compré especialmente para el microondas. La uso todos los días para desayunar.
                    </Box>
                    <Box alignItems="center" display="flex">
                      <Flex alignItems="center" marginRight="2em">
                        {liketwo ? (
                          <>
                            <AiFillLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              height="22px"
                              size={"1.2rem"}
                              onClick={() => setliketwo(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setliketwo(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                      <Flex alignItems="center">
                        {disliketwo ? (
                          <>
                            <AiFillDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdisliketwo(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdisliketwo(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                 
                </Box>
                <Box display="flex">
                  <Box>
                    <Box
                      display="flex"
                      justifyContent="space-between"
                      marginTop="0.6em"
                      paddingBottom="7px"
                      width="8em"
                    >
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                      <svg
                        aria-hidden="true"
                        className="ui-review-view__rating__summary__rating__star"
                        height="24px"
                        margin-right="8px"
                        viewBox="0 0 10 10"
                        width="17px"
                      >
                        <path
                          d="M5.056 8L1.931 9.648l.597-3.49L0 3.684l3.494-.509L5.056 0l1.562 3.176 3.494.51-2.528 2.471.597 3.491z"
                          fill="#3483FA"
                          fillRule="evenodd"
                        />
                      </svg>
                    </Box>
                    <Box marginTop="0.6em">
                    Muy buen producto. Muy conforme con la compra.
                    </Box>
                    <Box alignItems="center" display="flex">
                      <Flex alignItems="center" marginRight="2em">
                        {likethree ? (
                          <>
                            <AiFillLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              height="22px"
                              size={"1.2rem"}
                              onClick={() => setlikethree(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineLike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setlikethree(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                      <Flex alignItems="center">
                        {dislikethree ? (
                          <>
                            <AiFillDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdislikethree(false)}
                            />
                            <Box marginLeft="10px">1</Box>
                          </>
                        ) : (
                          <>
                            <AiOutlineDislike
                              color={"rgba(0,0,0,.9"}
                              cursor="pointer"
                              size={"1.2rem"}
                              onClick={() => setdislikethree(true)}
                            />
                            <Box marginLeft="10px">0</Box>
                          </>
                        )}
                      </Flex>
                    </Box>
                  </Box>
                </Box>
              </Stack>
            </TabPanel>
            <TabPanel>
              <Stack alignItems="center" marginBottom="1.5em" paddingTop="3em">
                <Box fontSize="xl">¡Nada por acá!</Box>
                <Box fontSize="sm" textAlign="center">
                  Este producto aún no tiene <br /> opiniones negativas.
                </Box>
              </Stack>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <Box color="#296DCB" cursor="pointer" fontSize="sm" marginTop="1.5">
          Ver todas las opiniones
        </Box>
      </Box>
    </Container>
  );
};
