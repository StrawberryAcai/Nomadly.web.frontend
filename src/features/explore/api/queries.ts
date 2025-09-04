import { RegionResponse, WeatherResponse } from "./dto";

export async function fetchRegion(lat: number, lon: number): Promise<RegionResponse> {
  const res = await fetch(`/api/kakao/region?lat=${lat}&lon=${lon}`);
  if (!res.ok) throw new Error("지역 정보를 불러오지 못했습니다.");
  return res.json();
}

export async function fetchWeather(lat: number, lon: number): Promise<WeatherResponse> {
  const res = await fetch(`/api/kma/weather?lat=${lat}&lon=${lon}`);
  if (!res.ok) throw new Error("날씨 정보를 불러오지 못했습니다.");
  return res.json();
}