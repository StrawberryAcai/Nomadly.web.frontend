import { PlanListResponse } from "./dto";

export const dummyPlanData: PlanListResponse = {
  plans: [
    {
      plan_id: 1,
      title: "서울 여행",
      content: "서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기",
      is_liked: false,
      is_bookmarked: true,
      like: 10,
      bookmark: 5,
    },
    {
      plan_id: 2,
      title: "부산 바다 여행",
      content: "해운대에서 여유 즐기기",
      is_liked: true,
      is_bookmarked: false,
      like: 20,
      bookmark: 8,
    },
    {
      plan_id: 3,
      title: "제주도 힐링",
      content: "한라산 등반과 카페 투어",
      is_liked: false,
      is_bookmarked: false,
      like: 5,
      bookmark: 2,
    },
  ],
};
