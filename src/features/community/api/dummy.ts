import { MyPlan } from "@/features/profile/api/dto";
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

export const dummyMyPlanData: MyPlan[] = [
  {
    plan_id: "a1f3d5b2-9c21-4f67-8b5d-1f3a6f7c2c11",
    start_time: "2025-10-25T09:00:00Z",
    end_time: "2025-10-25T18:30:00Z",
    plan: [
      { todo: "호텔에서 출발", place: "신라호텔", time: "2025-10-25T09:00:00Z" },
      { todo: "아침 식사", place: "이태원 브런치 카페", time: "2025-10-25T09:30:00Z" },
      { todo: "전시회 관람", place: "디뮤지엄", time: "2025-10-25T11:00:00Z" },
      { todo: "점심 식사", place: "삼청동 수제버거집", time: "2025-10-25T13:00:00Z" },
      { todo: "북악산 산책", place: "북악산 둘레길", time: "2025-10-25T15:30:00Z" },
      { todo: "저녁 및 귀가", place: "광화문 근처 식당", time: "2025-10-25T18:00:00Z" },
    ],
  },
  {
    plan_id: "b7c1f8d3-2451-4b2d-9a77-9d37f1e2c2f9",
    start_time: "2025-10-26T08:30:00Z",
    end_time: "2025-10-26T20:00:00Z",
    plan: [
      { todo: "출발", place: "홍대입구역", time: "2025-10-26T08:30:00Z" },
      { todo: "조식", place: "홍대 브런치카페", time: "2025-10-26T09:00:00Z" },
      { todo: "드라이브", place: "양평 두물머리", time: "2025-10-26T11:00:00Z" },
      { todo: "점심", place: "양평 고기집", time: "2025-10-26T13:30:00Z" },
      { todo: "카페 탐방", place: "양평 리버뷰 카페", time: "2025-10-26T15:00:00Z" },
      { todo: "서울 복귀", place: "홍대입구역", time: "2025-10-26T20:00:00Z" },
    ],
  },
  {
    plan_id: "d2a3e6b5-8f41-4e73-bc67-1c83e2a1b456",
    start_time: "2025-10-27T10:00:00Z",
    end_time: "2025-10-27T16:30:00Z",
    plan: [
      { todo: "출발", place: "서울역", time: "2025-10-27T10:00:00Z" },
      { todo: "KTX 이동", place: "부산역 도착", time: "2025-10-27T12:30:00Z" },
      { todo: "점심", place: "광안리 해물탕집", time: "2025-10-27T13:00:00Z" },
      { todo: "해변 산책", place: "광안리 해수욕장", time: "2025-10-27T14:00:00Z" },
      { todo: "카페", place: "광안리 오션뷰 카페", time: "2025-10-27T15:00:00Z" },
      { todo: "호텔 체크인", place: "파라다이스호텔 부산", time: "2025-10-27T16:30:00Z" },
    ],
  },
];