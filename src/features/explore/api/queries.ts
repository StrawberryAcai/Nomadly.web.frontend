'use client';
import { useQuery } from "@tanstack/react-query";
import { RegionResponse, WeatherResponse } from "./dto";

async function fetchRegion(lat: number, lon: number): Promise<RegionResponse> {
  const res = await fetch(`/api/kakao/region?lat=${lat}&lon=${lon}`);
  if (!res.ok) throw new Error("지역 정보를 불러오지 못했습니다.");
  return res.json();
}

async function fetchWeather(lat: number, lon: number): Promise<WeatherResponse> {
  const res = await fetch(`/api/kma/weather?lat=${lat}&lon=${lon}`);
  if (!res.ok) throw new Error("날씨 정보를 불러오지 못했습니다.");
  return res.json();
}

export function useRegionQuery(lat: number | null, lon: number | null) {
  return useQuery({
    queryKey: ["region", lat, lon],
    queryFn: () => fetchRegion(lat!, lon!),
    enabled: !!lat && !!lon, // 좌표가 있을 때만 실행
  });
}

export function useWeatherQuery(lat: number | null, lon: number | null) {
  return useQuery({
    queryKey: ["weather", lat, lon],
    queryFn: () => fetchWeather(lat!, lon!),
    enabled: !!lat && !!lon,
  });
}