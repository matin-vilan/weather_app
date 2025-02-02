import { CurrentFuncKeys } from "@services/queryFuncKeys";
import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { CurrentWeatherService } from "./current.service";

const currentService = new CurrentWeatherService();

export const useCurrentQueryAction = <T, K>(
  funcName: CurrentFuncKeys,
  data: K,
  enabled: boolean
) => {
  return useQuery({
    queryKey: [funcName, data],
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    queryFn: () => currentService[funcName](data as any) as T,
    enabled,
  });
};

export const useCurrentMutationAction = <T, K>(
  funcName: CurrentFuncKeys,
  invalidateTag?: CurrentFuncKeys
) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: [funcName],
    mutationFn: currentService[funcName] as MutationFunction<T, K>,

    onSettled: () => {
      if (invalidateTag) {
        queryClient.invalidateQueries({ queryKey: [invalidateTag] });
      }
    },
  });
};
