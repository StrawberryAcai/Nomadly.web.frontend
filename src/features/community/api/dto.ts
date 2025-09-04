interface PlanListRequest {
  keyword: string;
}
interface PlanItem {
  plan_id: number;
  title: string;
  content: string;
  is_liked: boolean;
  is_bookmarked: boolean;
  like: number;
  bookmark: number;
}
interface PlanListResponse {
  plans: PlanItem[];
}

export default PlanItem