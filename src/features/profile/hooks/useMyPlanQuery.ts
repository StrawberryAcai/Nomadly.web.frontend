// src/features/myplans/hooks/useMyPlansQuery.ts
import { useQuery } from "@tanstack/react-query";
import { getMePlan } from "../api/queries";
import { MyPlan } from "../api/dto";

export function useMyPlansQuery() {
  return useQuery<MyPlan[], Error>({
    queryKey: ["myPlans"],
    queryFn: getMePlan,
    staleTime: 1000 * 60,
    retry: false,
  });
}
