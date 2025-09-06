export interface PlanListRequest {
  keyword?: string;
}
export interface PlanItem {
  plan_id: number;
  title: string;
  content: string;
  is_liked: boolean;
  is_bookmarked: boolean;
  like: number;
  bookmark: number;
}
export interface PlanListResponse {
  plans: PlanItem[];
}

export interface PlanDetailResponse extends PlanItem {
  avg_rate: number;
  comment: number;
  plan: {
    start_date: string;
    end_date: string;
    plan: {
      todo: string;
      place: string;
      time: string;
    }[][];
    comments: {
      content: string;
      rate: number;
    }[];
  };
}