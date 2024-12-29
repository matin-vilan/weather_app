import { CircularProgress, Flex } from "@chakra-ui/react";
import Footer from "@components/common/footer";
import TitleTemp from "@components/common/TitleTemp";
import DaysSwiper from "./DaysSwiper";
import { useDailyQueryAction } from "@services/forecast/daily";
import { DailyFuncKeys } from "@services/queryFuncKeys";
import { getLocalStorage } from "@utils/storage";
import { PROJECT_STORAGE_NAME } from "@constants/index";
import { IDailyResponse } from "@services/forecast/daily/types";
import { ILatLonDTO } from "@services/current/types";
import { AppProvider } from "@src/App";

const DaysForcastsContainer = () => {
  const { units } = AppProvider.useContext();
  const location = JSON.parse(
    getLocalStorage(`${PROJECT_STORAGE_NAME}/location`) || ""
  );
  const { data, isLoading } = useDailyQueryAction<IDailyResponse, ILatLonDTO>(
    DailyFuncKeys.ByLatLon,
    { lat: location?.lat, lon: location?.lon, units },
    location ? true : false
  );

  return (
    <Flex
      flexDir="column"
      align="center"
      gap={4}
      justify="space-between"
      py={2}
      height="full"
      overflowY="auto"
    >
      {isLoading || !data ? (
        <Flex w="full" h="full" justify="center" align="center">
          <CircularProgress />
        </Flex>
      ) : (
        <Flex w="full" flexDir="column" align="center" pt="48px">
          <TitleTemp title={data.city_name} leftText="" rightText="" />
          <DaysSwiper days={data.data} />
        </Flex>
      )}
      <Footer />
    </Flex>
  );
};

export default DaysForcastsContainer;
