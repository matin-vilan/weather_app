import { Button, Flex, Tooltip } from "@chakra-ui/react";
import Icon from "@components/icon";
import useGetCurrentLocation from "@hooks/useGetCurrentLocation";
import { Link } from "react-router-dom";

const Footer = () => {
  const { handleGetLocation, loadingGetLocation } = useGetCurrentLocation();

  return (
    <Flex w="full" px={4} justify="space-between" align="center">
      <Tooltip label="Get your current location temp.">
        <Button
          variant="unstyled"
          onClick={handleGetLocation}
          disabled={loadingGetLocation}
          isLoading={loadingGetLocation}
        >
          <Icon cursor="pointer" src="location" />
        </Button>
      </Tooltip>
      <Icon cursor="pointer" src="plus" />
      <Tooltip label="7-Days Forecasts">
        <Flex as={Link} to="/days-forecasts">
          <Icon cursor="pointer" src="menu" />
        </Flex>
      </Tooltip>
    </Flex>
  );
};

export default Footer;
