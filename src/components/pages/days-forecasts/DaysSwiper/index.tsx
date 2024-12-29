/* eslint-disable @typescript-eslint/ban-ts-comment */
import { Swiper, SwiperSlide } from "swiper/react";

// @ts-ignore
import "swiper/css";
// @ts-ignore
import "swiper/css/navigation";

import "./styles.css";
import { Flex, Text } from "@chakra-ui/react";
import { IDailyData } from "@services/forecast/daily/types";
import DailyWeatherBox from "@components/common/dailyWeatherBox";
import { handleIcons } from "@utils/transformers";

const DaysSwiper = ({ days }: { days: IDailyData[] }) => {
  return (
    <Flex flexDir="column" w="full" mt={12} gap={4}>
      <Text variant="regularText" fontWeight="semibold" px={8}>
        7-Days Forecasts
      </Text>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        className="mySwiper"
      >
        {days.map((day) => (
          <SwiperSlide>
            <DailyWeatherBox
              imageSrc={handleIcons(day.weather.icon)}
              weatherInfo={day}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </Flex>
  );
};

export default DaysSwiper;
