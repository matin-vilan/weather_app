import {
  ICitiesDTO,
  ICityDTO,
  ICityIdDTO,
  ICurrentResponse,
  ILatLonDTO,
  IPointsDTO,
  IPostalCodeDTO,
  ISlationDTO,
  IStationsDTO,
} from "./types";
import request from "@libs/axios";
import { objectToQueryString } from "@utils/transformers";

const entity = `current?key=${import.meta.env.VITE_APP_API_KEY}`;

interface ICurrentWeatherService {
  byLatLon(props: ILatLonDTO): Promise<ICurrentResponse>;
  byCity(props: ICityDTO): Promise<ICurrentResponse>;
  byPostalCode(props: IPostalCodeDTO): Promise<ICurrentResponse>;
  byCityId(props: ICityIdDTO): Promise<ICurrentResponse>;
  bySlation(props: ISlationDTO): Promise<ICurrentResponse>;
  byPoints(props: IPointsDTO): Promise<ICurrentResponse>;
  forCities(props: ICitiesDTO): Promise<ICurrentResponse>;
  forSlations(props: IStationsDTO): Promise<ICurrentResponse>;
}

export class CurrentWeatherService implements ICurrentWeatherService {
  async byLatLon(props: ILatLonDTO): Promise<ICurrentResponse> {
    return await request.get<ICurrentResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async byCity(props: ICityDTO): Promise<ICurrentResponse> {
    return await request.get<ICurrentResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async byPostalCode(props: IPostalCodeDTO): Promise<ICurrentResponse> {
    return await request.get<ICurrentResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async byCityId(props: ICityIdDTO): Promise<ICurrentResponse> {
    return await request.get<ICurrentResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async bySlation(props: ISlationDTO): Promise<ICurrentResponse> {
    return await request.get<ICurrentResponse>(
      `/${entity}&${objectToQueryString(props)}`
    );
  }
  async byPoints(props: IPointsDTO): Promise<ICurrentResponse> {
    return await request.get<ICurrentResponse>(
      `/${entity}&${objectToQueryString(props.points.join(","))}`
    );
  }
  async forCities(props: ICitiesDTO): Promise<ICurrentResponse> {
    return await request.get<ICurrentResponse>(
      `/${entity}&${objectToQueryString(props.cities.join(","))}`
    );
  }
  async forSlations(props: IStationsDTO): Promise<ICurrentResponse> {
    return await request.get<ICurrentResponse>(
      `/${entity}&${objectToQueryString(props.stations.join(","))}`
    );
  }
}
