// 장소 추천 요청 DTO
export interface PlaceSuggestRequest {
  type: string;
  origin: {
    longitude: number;
    latitude: number;
  };
}

// 장소 추천 응답 DTO
export interface PlaceSuggestItem {
  place_id: string;
  place_name: string;
  rating: number;
  trend: boolean;
  bookmark_cnt: number;
  distance: number;
  address: string;
  image: string;
}

export interface PlaceSuggestResponse {
  type: string;
  items: PlaceSuggestItem[];
}
