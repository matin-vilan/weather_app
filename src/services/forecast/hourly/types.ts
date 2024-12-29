import { EUnitsType } from "@src/types";

export interface IHourlyData {
  timestamp_local: string;
  timestamp_utc: string;
  ts: number;
  datetime: string;
  wind_gust_spd: number;
  wind_spd: number;
  wind_dir: number;
  wind_cdir: string;
  wind_cdir_full: string;
  temp: number;
  app_temp: number;
  pop: number;
  precip: number;
  snow: number;
  snow_depth: number;
  slp: number;
  pres: number;
  dewpt: number;
  rh: number;
  weather: {
    icon: string;
    code: string;
    description: string;
  };
  pod: string;
  clouds_low: number;
  clouds_mid: number;
  clouds_hi: number;
  clouds: number;
  vis: number;
  dhi: number;
  dni: number;
  ghi: number;
  solar_rad: number;
  uv: number;
  ozone: number;
}
export interface IHourlyResponse {
  data: IHourlyData[];
  city_name: string;
  lon: string;
  timezone: string;
  lat: string;
  country_code: string;
  state_code: string;
}

export interface ILatLonDTO {
  lat: number;
  lon: number;
  units?: EUnitsType;
}
export interface ICityDTO {
  city: string;
}
export interface IPostalCodeDTO {
  postal_code: number;
  country?: string;
}
export interface ICityIdDTO {
  city_id: number;
}
export interface ISlationDTO {
  station: number;
}
export interface IPointsDTO {
  points: string[];
}
export interface ICitiesDTO {
  cities: string[];
}
export interface IStationsDTO {
  stations: string[];
}
