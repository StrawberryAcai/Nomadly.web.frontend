import { PlanListResponse, PlanListRequest, PlanDetailResponse } from "./dto";
import { dummyPlanData, dummyPlanDetailData } from "./dummy";
// import api from '@/shared/lib/axiosInstance';

export const getPlanList = async (params?: PlanListRequest): Promise<PlanListResponse> => {
  if (params?.keyword) {
    // await api.get(`/api/board?keyword=${params?.keyword}`);
    return {
      plans: dummyPlanData.plans.filter((plan) =>
        plan.title.includes(params.keyword!)
      ),
    };
  }
  // await api.get("/api/board");
  return dummyPlanData;
};

export const getPlanDetail = async (plan_id: number | undefined): Promise<PlanDetailResponse | null> => {
  if(undefined === plan_id) return null;
  // await api.get(`/api/board/${plan_id}}`)
  return dummyPlanDetailData;
};