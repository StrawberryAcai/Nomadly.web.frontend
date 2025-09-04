"use client";

import { useQuery } from "@tanstack/react-query";
import { PlanListResponse, PlanListRequest } from "./dto";
import { dummyPlanData } from "./dummy";

const fetchPlanList = async (params?: PlanListRequest): Promise<PlanListResponse> => {
  if (params?.keyword) {
    return {
      plans: dummyPlanData.plans.filter((plan) =>
        plan.title.includes(params.keyword!)
      ),
    };
  }
  return dummyPlanData;
};

export const usePlanListQuery = (params?: PlanListRequest) => {
  return useQuery({
    queryKey: ["planList", params?.keyword],
    queryFn: () => fetchPlanList(params),
    staleTime: 1000 * 60,
  });
};
