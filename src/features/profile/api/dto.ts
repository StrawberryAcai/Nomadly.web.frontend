export interface ProfileDto {
  id: string;
  username: string;
  profile: string;
}

export type MyPlanItem = {
  todo: string;
  place: string;
  time: string;
};

export type MyPlan = {
  plan_id: string;
  start_time: string;
  end_time: string;
  plan: MyPlanItem[];
};
