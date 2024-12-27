import { Response } from "~types/index";
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

const entity = "current";
export type ResponseType = ICurrentResponse[];
export type CurrentResType = Response<ResponseType>;

interface ICurrentWeatherService {
  byLatLon(props: ILatLonDTO): Promise<CurrentResType>;
  byCity(props: ICityDTO): Promise<CurrentResType>;
  byPostalCode(props: IPostalCodeDTO): Promise<CurrentResType>;
  byCityId(props: ICityIdDTO): Promise<CurrentResType>;
  bySlation(props: ISlationDTO): Promise<CurrentResType>;
  byPoints(props: IPointsDTO): Promise<CurrentResType>;
  forCities(props: ICitiesDTO): Promise<CurrentResType>;
  forSlations(props: IStationsDTO): Promise<CurrentResType>;
}

export class CurrentWeatherService implements ICurrentWeatherService {
  async byLatLon(props: ILatLonDTO): Promise<CurrentResType> {
    return await request.get<ResponseType>(
      `/${entity}?${objectToQueryString(props)}`
    );
  }
  async byCity(props: ICityDTO): Promise<CurrentResType> {
    return await request.get<ResponseType>(
      `/${entity}?${objectToQueryString(props)}`
    );
  }
  async byPostalCode(props: IPostalCodeDTO): Promise<CurrentResType> {
    return await request.get<ResponseType>(
      `/${entity}?${objectToQueryString(props)}`
    );
  }
  async byCityId(props: ICityIdDTO): Promise<CurrentResType> {
    return await request.get<ResponseType>(
      `/${entity}?${objectToQueryString(props)}`
    );
  }
  async bySlation(props: ISlationDTO): Promise<CurrentResType> {
    return await request.get<ResponseType>(
      `/${entity}?${objectToQueryString(props)}`
    );
  }
  async byPoints(props: IPointsDTO): Promise<CurrentResType> {
    return await request.get<ResponseType>(
      `/${entity}?${objectToQueryString(props.points.join(","))}`
    );
  }
  async forCities(props: ICitiesDTO): Promise<CurrentResType> {
    return await request.get<ResponseType>(
      `/${entity}?${objectToQueryString(props.cities.join(","))}`
    );
  }
  async forSlations(props: IStationsDTO): Promise<CurrentResType> {
    return await request.get<ResponseType>(
      `/${entity}?${objectToQueryString(props.stations.join(","))}`
    );
  }
}
