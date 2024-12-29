import { Flex, Text } from "@chakra-ui/react";

const TitleTemp = ({
  title,
  rightText,
  leftText,
}: {
  title: string;
  rightText: string;
  leftText: string;
}) => {
  return (
    <Flex flexDir="column" align="center" w="full">
      <Text variant="regularText">{title}</Text>
      <Flex justify="space-between" align="center" w="full">
        <Text variant="subtitle">{rightText}</Text>
        <Text variant="subtitle">{leftText}</Text>
      </Flex>
    </Flex>
  );
};

export default TitleTemp;
