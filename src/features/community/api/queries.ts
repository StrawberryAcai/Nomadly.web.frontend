import { PlanListResponse, PlanListRequest, PlanDetailResponse } from "./dto";
import { dummyPlanData, dummyPlanDetailData } from "./dummy";

export const fetchPlanList = async (params?: PlanListRequest): Promise<PlanListResponse> => {
  if (params?.keyword) {
    return {
      plans: dummyPlanData.plans.filter((plan) =>
        plan.title.includes(params.keyword!)
      ),
    };
  }
  return dummyPlanData;
};

export const getPlanDetail = async (plan_id: number | undefined): Promise<PlanDetailResponse | null> => {
  if(undefined === plan_id) return null;
  return dummyPlanDetailData;
};