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
  data?: K
) => {
  return useQuery({
    queryKey: [funcName, data],
    queryFn: () => currentService[funcName](data as any) as T,
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
