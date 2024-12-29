import {
  ICitiesDTO,
  ICityDTO,
  ICityIdDTO,
  IDailyResponse,
  ILatLonDTO,
  IPointsDTO,
  IPostalCodeDTO,
  ISlationDTO,
  IStationsDTO,
} from "./types";
import request from "@libs/axios";
import { objectToQueryString } from "@utils/transformers";

const entity = `forecast/daily?key=${
  import.meta.env.VITE_APP_API_KEY
}&hours=12`;
export type ResponseType = IDailyResponse;

interface IDailyWeatherService {
  dByLatLon(props: ILatLonDTO): Promise<IDailyResponse>;
  dByCity(props: ICityDTO): Promise<IDailyResponse>;
  dByPostalCode(props: IPostalCodeDTO): Promise<IDailyResponse>;
  dByCityId(props: ICityIdDTO): Promise<IDailyResponse>;
  dBySlation(props: ISlationDTO): Promise<IDailyResponse>;
  dByPoints(props: IPointsDTO): Promise<IDailyResponse>;
  dForCities(props: ICitiesDTO): Promise<IDailyResponse>;
  dForSlations(props: IStationsDTO): Promise<IDailyResponse>;
}

export class DailyWeatherService implements IDailyWeatherService {
  async dByLatLon(props: ILatLonDTO): Promise<IDailyResponse> {
    return await request.get<IDailyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async dByCity(props: ICityDTO): Promise<IDailyResponse> {
    return await request.get<IDailyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async dByPostalCode(props: IPostalCodeDTO): Promise<IDailyResponse> {
    return await request.get<IDailyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async dByCityId(props: ICityIdDTO): Promise<IDailyResponse> {
    return await request.get<IDailyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async dBySlation(props: ISlationDTO): Promise<IDailyResponse> {
    return await request.get<IDailyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async dByPoints(props: IPointsDTO): Promise<IDailyResponse> {
    return await request.get<IDailyResponse>(
      `/${entity}&${objectToQueryString(props.points.join(","))}`
    );
  }
  async dForCities(props: ICitiesDTO): Promise<IDailyResponse> {
    return await request.get<IDailyResponse>(
      `/${entity}&${objectToQueryString(props.cities.join(","))}`
    );
  }
  async dForSlations(props: IStationsDTO): Promise<IDailyResponse> {
    return await request.get<IDailyResponse>(
      `/${entity}&${objectToQueryString(props.stations.join(","))}`
    );
  }
}
