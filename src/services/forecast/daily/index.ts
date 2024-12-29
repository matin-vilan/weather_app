import { DailyFuncKeys } from "@services/queryFuncKeys";
import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { DailyWeatherService } from "./daily.service";

const dailyService = new DailyWeatherService();

export const useDailyQueryAction = <T, K>(
  funcName: DailyFuncKeys,
  data: K,
  enabled: boolean
) => {
  return useQuery({
    queryKey: [funcName, data],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryFn: () => dailyService[funcName](data as any) as T,
    enabled,
  });
};

export const useDailyMutationAction = <T, K>(
  funcName: DailyFuncKeys,
  invalidateTag?: DailyFuncKeys
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [funcName],
    mutationFn: dailyService[funcName] as MutationFunction<T, K>,

    onSettled: () => {
      if (invalidateTag) {
        queryClient.invalidateQueries({ queryKey: [invalidateTag] });
      }
    },
  });
};
