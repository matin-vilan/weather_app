import { Flex, Image, Text } from "@chakra-ui/react";
import { IDailyData } from "@services/forecast/daily/types";
import { getDayOfWeek } from "@utils/transformers";

const DailyWeatherBox = ({
  weatherInfo,
  imageSrc,
}: {
  weatherInfo: IDailyData;
  imageSrc: string;
}) => {
  return (
    <Flex
      direction="column"
      justify="space-between"
      align="center"
      py={2}
      px={4}
      minW="70px"
    >
      <Text variant="regularText">{weatherInfo.temp}°C</Text>
      <Image
        src={imageSrc || "/images/demo.png"}
        width="50px"
        height="50px"
        alt="wetherImage"
      />
      <Text variant="footNote">{getDayOfWeek(weatherInfo.datetime)}</Text>
    </Flex>
  );
};

export default DailyWeatherBox;
