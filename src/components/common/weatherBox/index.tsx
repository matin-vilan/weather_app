import { Flex, Image, Text } from "@chakra-ui/react";
import { IHourlyData } from "@services/forecast/hourly/types";
import { AppProvider } from "@src/App";
import {
  destructTime,
  formatHourToAmPm,
  handleUnits,
} from "@utils/transformers";

const WeatherBox = ({
  weatherInfo,
  imageSrc,
}: {
  weatherInfo: IHourlyData;
  imageSrc: string;
}) => {
  const { units } = AppProvider.useContext();
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      p={1}
      minW="70px"
    >
      <Text variant="footNote">
        {weatherInfo.app_temp}°{handleUnits(units)}
      </Text>
      <Image
        src={imageSrc || "/images/demo.png"}
        width="50px"
        height="50px"
        alt="wetherImage"
      />
      <Text variant="footNote">
        {formatHourToAmPm(destructTime(weatherInfo.datetime))}
      </Text>
    </Flex>
  );
};

export default WeatherBox;
