export interface RegionResponse {
  addressName: string;
  error?: string;
}

export interface WeatherResponse {
  temperature: number;
  unit: string;
  location: string;
  error?: string;
}

export interface LocationResponse {
  type: string;
  data: {
    place_name: string;
    rating: string;
    trend: boolean;
    bookmark_cnt: number;
    distance: number;
    image: string;
  }[]
}