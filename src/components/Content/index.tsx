import { Box, Button, Center, ChakraProvider, Input } from "@chakra-ui/react";
import { login } from "../../services/login";

export function Content() {
  return (
    <ChakraProvider>
      <Box minHeight="100vh" backgroundColor="#9413dc" padding="25px">
        <Box backgroundColor="#FFFFFF" borderRadius="25px" padding="15px">
          <Center marginBottom={3}>
            <h1>Faça o login</h1>
          </Center>
          <Input placeholder="email" marginBottom={4} />
          <Input placeholder="password" marginBottom={6} />
          <Center>
            <Button
              onClick={login}
              height="2.5rem"
              colorScheme="teal"
              size="sm"
              width="20rem"
              marginTop="5px"
            >
              Button
            </Button>
          </Center>
        </Box>
      </Box>
    </ChakraProvider>
  );
}
