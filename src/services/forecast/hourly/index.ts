import { HourlyFuncKeys } from "@services/queryFuncKeys";
import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { HourlyWeatherService } from "./hourly.service";

const hourlyService = new HourlyWeatherService();

export const useHourlyQueryAction = <T, K>(
  funcName: HourlyFuncKeys,
  data: K,
  enabled: boolean
) => {
  return useQuery({
    queryKey: [funcName, data],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryFn: () => hourlyService[funcName](data as any) as T,
    enabled,
  });
};

export const useHourlyMutationAction = <T, K>(
  funcName: HourlyFuncKeys,
  invalidateTag?: HourlyFuncKeys
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [funcName],
    mutationFn: hourlyService[funcName] as MutationFunction<T, K>,

    onSettled: () => {
      if (invalidateTag) {
        queryClient.invalidateQueries({ queryKey: [invalidateTag] });
      }
    },
  });
};
