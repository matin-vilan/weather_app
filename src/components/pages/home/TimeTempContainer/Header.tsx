import { Divider, Flex, Text } from "@chakra-ui/react";

const TimeTempHeader = ({ today, desc }: { today: string; desc: string }) => {
  return (
    <Flex w="full" flexDir="column" py={2}>
      <Flex w="full" align="center" justify="space-between" px={4}>
        <Text variant="subtitle">{desc}</Text>
        <Text variant="subtitle">{today}</Text>
      </Flex>
      <Divider />
    </Flex>
  );
};

export default TimeTempHeader;
