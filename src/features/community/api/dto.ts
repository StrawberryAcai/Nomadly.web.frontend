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

export interface PlanActionRequest {
  type: "bookmark" | "like";
}

export interface PlanActionResponse {
  message: string;
}