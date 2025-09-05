'use client'
import { useQuery } from "@tanstack/react-query";
import { fetchPlanList } from "@/features/community/api/queries";
import {PlanListRequest} from "@/features/community/api/dto";

export const usePlanListQuery = (params?: PlanListRequest) => {
  return useQuery({
    queryKey: ["planList", params?.keyword],
    queryFn: () => fetchPlanList(params),
    staleTime: 1000 * 60,
  });
};