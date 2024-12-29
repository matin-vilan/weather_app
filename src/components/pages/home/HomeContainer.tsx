import { Button, CircularProgress, Flex, Image, Text } from "@chakra-ui/react";
import TimeTempContainer from "./TimeTempContainer";
import Footer from "@components/common/footer";
import TitleTemp from "@components/common/TitleTemp";
import useGetCurrentLocation from "@hooks/useGetCurrentLocation";
import { useCurrentQueryAction } from "@services/current";
import { CurrentFuncKeys } from "@services/queryFuncKeys";
import { ICurrentResponse, ILatLonDTO } from "@services/current/types";
import { getLocalStorage, setLocalStorage } from "@utils/storage";
import { STORAGE_LOCATION_NAME, STORAGE_UNIT_NAME } from "@constants/index";
import { formatDateTime, handleUnits } from "@utils/transformers";
import { EUnitsType } from "~types/index";
import { AppProvider } from "@src/App";
import { useMemo } from "react";

const HomeContainer = () => {
  const { units, setUnit } = AppProvider.useContext();
  const { location: geoLoc } = useGetCurrentLocation();

  const location = useMemo(() => {
    const storedLocation = getLocalStorage(STORAGE_LOCATION_NAME);
    if (storedLocation && storedLocation !== null) {
      return JSON.parse(storedLocation);
    }
    return null;
  }, [geoLoc]);

  const { data, isLoading } = useCurrentQueryAction<
    ICurrentResponse,
    ILatLonDTO
  >(
    CurrentFuncKeys.ByLatLon,
    { lat: location?.lat, lon: location?.lon, units: units as EUnitsType },
    location ? true : false
  );

  const weatherInfo = data?.data?.[0];

  const handleChangeUnit = () => {
    setLocalStorage({
      name: STORAGE_UNIT_NAME,
      value: units === "M" ? "I" : "M",
    });
    setUnit(units === EUnitsType.M ? EUnitsType.I : EUnitsType.M);
  };

  return (
    <Flex
      position="relative"
      flexDir="column"
      justify="space-between"
      height="full"
    >
      <Button
        pos="absolute"
        variant="ghost"
        color="white"
        _hover={{ bg: "transparent" }}
        rounded="lg"
        onClick={handleChangeUnit}
      >
        °{handleUnits(units)}
      </Button>
      {!weatherInfo || isLoading ? (
        <Flex w="full" h="full" justify="center" align="center">
          <CircularProgress />
        </Flex>
      ) : (
        <Flex gap={4} flexDir="column" align="center">
          <Image src="/images/demo.png" alt="demo" w="170px" h="150px" />
          <Text variant="boldTitle">{weatherInfo?.temp}°</Text>
          <TitleTemp
            title={weatherInfo?.city_name}
            rightText={`SUNRISE: ${weatherInfo?.sunrise} AM`}
            leftText={`SUNSET: ${weatherInfo?.sunset} PM`}
          />
          <Image src="/images/House.png" alt="demo" />
          <TimeTempContainer
            today={formatDateTime(String(weatherInfo?.datetime)) || ""}
            desc={weatherInfo.weather.description}
          />
        </Flex>
      )}
      <div>
        <Footer />
      </div>
    </Flex>
  );
};

export default HomeContainer;
