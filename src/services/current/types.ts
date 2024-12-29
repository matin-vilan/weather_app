import { EUnitsType } from "~types/index";

export interface ICurrentResponse {
  data: {
    wind_cdir: string;
    rh: number;
    pod: string;
    lon: number;
    pres: number;
    timezone: string;
    ob_time: string;
    country_code: string;
    clouds: number;
    vis: number;
    wind_spd: number;
    gust: number;
    wind_cdir_full: "northeast";
    app_temp: 24.25;
    state_code: string;
    ts: number;
    h_angle: number;
    dewpt: number;
    weather: {
      icon: string;
      code: number;
      description: string;
    };
    uv: number;
    aqi: number;
    station: string;
    sources: string[];
    wind_dir: number;
    elev_angle: number;
    datetime: string;
    precip: number;
    ghi: number;
    dni: number;
    dhi: number;
    solar_rad: number;
    city_name: string;
    sunrise: string;
    sunset: string;
    temp: number;
    lat: number;
    slp: number;
  }[];
  count: number;
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
