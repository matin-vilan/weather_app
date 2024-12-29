import {
  ICitiesDTO,
  ICityDTO,
  ICityIdDTO,
  IHourlyResponse,
  ILatLonDTO,
  IPointsDTO,
  IPostalCodeDTO,
  ISlationDTO,
  IStationsDTO,
} from "./types";
import request from "@libs/axios";
import { objectToQueryString } from "@utils/transformers";

const entity = `forecast/hourly?key=${
  import.meta.env.VITE_APP_API_KEY
}&hours=12`;
export type ResponseType = IHourlyResponse;

interface IHourlyWeatherService {
  hByLatLon(props: ILatLonDTO): Promise<IHourlyResponse>;
  hByCity(props: ICityDTO): Promise<IHourlyResponse>;
  hByPostalCode(props: IPostalCodeDTO): Promise<IHourlyResponse>;
  hByCityId(props: ICityIdDTO): Promise<IHourlyResponse>;
  hBySlation(props: ISlationDTO): Promise<IHourlyResponse>;
  hByPoints(props: IPointsDTO): Promise<IHourlyResponse>;
  hForCities(props: ICitiesDTO): Promise<IHourlyResponse>;
  hForSlations(props: IStationsDTO): Promise<IHourlyResponse>;
}

export class HourlyWeatherService implements IHourlyWeatherService {
  async hByLatLon(props: ILatLonDTO): Promise<IHourlyResponse> {
    return await request.get<IHourlyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async hByCity(props: ICityDTO): Promise<IHourlyResponse> {
    return await request.get<IHourlyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async hByPostalCode(props: IPostalCodeDTO): Promise<IHourlyResponse> {
    return await request.get<IHourlyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async hByCityId(props: ICityIdDTO): Promise<IHourlyResponse> {
    return await request.get<IHourlyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async hBySlation(props: ISlationDTO): Promise<IHourlyResponse> {
    return await request.get<IHourlyResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async hByPoints(props: IPointsDTO): Promise<IHourlyResponse> {
    return await request.get<IHourlyResponse>(
      `/${entity}&${objectToQueryString(props.points.join(","))}`
    );
  }
  async hForCities(props: ICitiesDTO): Promise<IHourlyResponse> {
    return await request.get<IHourlyResponse>(
      `/${entity}&${objectToQueryString(props.cities.join(","))}`
    );
  }
  async hForSlations(props: IStationsDTO): Promise<IHourlyResponse> {
    return await request.get<IHourlyResponse>(
      `/${entity}&${objectToQueryString(props.stations.join(","))}`
    );
  }
}
