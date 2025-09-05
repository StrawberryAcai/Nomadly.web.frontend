import {PlanDetailResponse, PlanListResponse} from "./dto";

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

export const dummyPlanDetailData: PlanDetailResponse = {
  plan_id: 1,
  title: "sample plan title1",
  content: "sample plan description1",
  is_liked: true,
  is_bookmarked: false,
  like: 10,
  bookmark: 1,
  avg_rate: 3.0,
  comment: 3,
  plan: {
    start_date: "2025-09-01",
    end_date: "2025-09-03",
    plan: [
      [
        { todo: "만나기", place: "오시리아역", time: "2025-09-01-10-00" },
        { todo: "점심 먹기", place: "부산대", time: "2025-09-01-12-00" },
      ],
      [
        { todo: "헤어지기", place: "스탈스크-12", time: "2025-09-02-18-00" },
        { todo: "귀가", place: "암스테르담 항구", time: "2025-09-02-21-00" },
      ],
    ],
    comments: [
      { content: "sample comment content1", rate: 3 },
      { content: "sample comment content2", rate: 5 },
      { content: "sample comment content3", rate: 1 },
    ],
  },
};
