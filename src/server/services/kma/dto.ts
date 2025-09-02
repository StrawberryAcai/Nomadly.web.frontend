export interface KmaWeatherItem {
  baseDate: string;
  bateTime: string;
  category: string;
  fcstDate: string;
  fcstTime: string;
  fcstValue: string;
  nx: number;
  ny: number;
}
export interface KmaWeatherResponse {
  temperature: number; // 온도 (°C)
  unit: string;        // 단위 (°C)
  location: string;    // 위치 정보 (예: "서울특별시 강남구")
}
