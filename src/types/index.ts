import { AxiosError } from "axios";

export interface Response<T> {
  data: T;
}

export type ErrorType = AxiosError<{
  Errors: string[];
  IsSuccess: boolean;
  Message: string;
  Value: string;
}>;
