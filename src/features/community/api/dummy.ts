import { BookmarkResponse, PlanDetailResponse, PlanListResponse } from "./dto";

export const dummyPlanData: PlanListResponse[] = [
  {
    board_id: "1",
    title: "서울 여행",
    content:
      "서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기 서울에서 맛집 탐방하기",
    is_liked: false,
    liked: 10,
  },
  {
    board_id: "2",
    title: "부산 바다 여행",
    content: "해운대에서 여유 즐기기",
    is_liked: true,
    liked: 20,
  },
  {
    board_id: "3",
    title: "제주도 힐링",
    content: "한라산 등반과 카페 투어",
    is_liked: false,
    liked: 5,
  },
];

export const dummyPlanDetailData: PlanDetailResponse = {
  board_id: "1",
  title: "sample plan title1",
  content: "sample plan description1",
  is_liked: true,
  liked: 10,
  avg_rate: 3.3,
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

export const dummyBookmarkData: BookmarkResponse = [
  {
    place_id: "f56490a4-f19d-43aa-aabe-51f324a4000a",
    name: "부산자연곤충마을",
    address: "부산광역시 강서구 평강로 441 (대저1동)",
    overall_bookmark: 1,
    overall_rating: 0,
  },
  {
    place_id: "fee65a35-d6af-45d6-9c92-2373970654a2",
    name: "송담서원(김해)",
    address: "경상남도 김해시 사충단길 25 (동상동)",
    overall_bookmark: 1,
    overall_rating: 0,
  },
  {
    place_id: "3cd8e995-d30f-40b5-be73-8cfd8a530a8f",
    name: "두루팜",
    address: "부산광역시 강서구 봉죽길91번길 65-37 (봉림동)",
    overall_bookmark: 1,
    overall_rating: 0,
  },
];
