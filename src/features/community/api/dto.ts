export interface PlanListRequest {
  keyword?: string;
}
export interface PlanItem {
  board_id: string;
  title: string;
  content: string;
  is_liked: boolean;
  liked: number;
}
export interface PlanListResponse {
  board_id: string;
  title: string;
  content: string;
  is_liked: boolean;
  liked: number;
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