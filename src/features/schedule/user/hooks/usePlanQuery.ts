import { useQuery } from "@tanstack/react-query";
import { getPlan, PlanResponse } from "../api/queries";
import { TravelState } from "@/shared/store/useTravelStore";

export function usePlanQuery(store: TravelState) {
  return useQuery<PlanResponse, Error>({
    queryKey: ["plan", store],
    queryFn: () => getPlan(store),
    enabled: !!store,
    staleTime: 1000 * 60,
  });
}