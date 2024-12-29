import { CircularProgress, Flex } from "@chakra-ui/react";
import TimeTempHeader from "./Header";
import WeatherBox from "@components/common/weatherBox";
import { useHourlyQueryAction } from "@services/forecast/hourly";
import { HourlyFuncKeys } from "@services/queryFuncKeys";
import { IHourlyResponse, ILatLonDTO } from "@services/forecast/hourly/types";
import { getLocalStorage } from "@utils/storage";
import { PROJECT_STORAGE_NAME } from "@constants/index";
import { handleIcons } from "@utils/transformers";
import { AppProvider } from "@src/App";

const TimeTempContainer = ({
  today,
  desc,
}: {
  today: string;
  desc: string;
}) => {
  const location = getLocalStorage(`${PROJECT_STORAGE_NAME}/location`);
  const { units } = AppProvider.useContext();

  const { data, isLoading } = useHourlyQueryAction<IHourlyResponse, ILatLonDTO>(
    HourlyFuncKeys.ByLatLon,
    {
      lat: location ? JSON.parse(location)?.lat : null,
      lon: location ? JSON.parse(location)?.lon : null,
      units,
    },
    !!location
  );

  return isLoading || !data ? (
    <Flex w="full" h="full" justify="center" align="center">
      <CircularProgress />
    </Flex>
  ) : (
    <Flex
      w="full"
      rounded="3xl"
      bg="linear-gradient(90deg, rgba(62,45,143,1) 0%, rgba(157,82,172,0.7) 100%)"
      flexDir="column"
    >
      <TimeTempHeader today={today} desc={desc} />
      <Flex gap={4} px={4} w="full" justify="space-around" overflowX="auto">
        {data?.data.map((w) => (
          <WeatherBox imageSrc={handleIcons(w.weather.icon)} weatherInfo={w} />
        ))}
      </Flex>
    </Flex>
  );
};

export default TimeTempContainer;
