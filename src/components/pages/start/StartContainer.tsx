import { Button, Flex, Image, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const StartContainer = () => {
  return (
    <Flex w="full" h="full" justify="space-around" flexDir="column">
      <Image src="/images/demo.png" alt="demo" />
      <Flex flexDir="column">
        <Text variant="boldTitle">Weather</Text>
        <Text color="brand.yellow" variant="boldTitle">
          ForeCasts
        </Text>
      </Flex>
      <Button as={Link} to="/home" bgColor="brand.yellow" rounded="3xl">
        Get Start
      </Button>
    </Flex>
  );
};

export default StartContainer;
