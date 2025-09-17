'use client';
import { useEffect, useState, useMemo } from "react";
import MainContainer from "@/shared/components/containers/MainContainer";
import AdvancedSearchBar from "@/features/explore/components/AdvancedSearchBar";
import MiniSuggestList from "@/features/explore/components/MiniSuggestList";
import LocalWeather from "@/features/explore/components/LocalWeather";

const SuggestType: string[] = [
  "관광지",
  "문화시설",
  "축제공연행사",
  "여행코스",
  "레포츠",
  "숙박",
  "쇼핑",
  "음식점"
];

function getRandomUnique<T>(arr: T[], count: number): T[] {
  const copy = [...arr];
  const result: T[] = [];
  for (let i = 0; i < count && copy.length > 0; i++) {
    const idx = Math.floor(Math.random() * copy.length);
    result.push(copy[idx]);
    copy.splice(idx, 1); // 중복 제거
  }
  return result;
}

export default function Page() {
  const [coords, setCoords] = useState<{ longitude: number; latitude: number } | null>(null);

  useEffect(() => {
    if (!coords && typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((pos) => {
        setCoords({
          longitude: pos.coords.longitude,
          latitude: pos.coords.latitude,
        });
      });
    }
  }, [coords]);

  // SuggestType에서 중복 없이 3개 뽑기 (첫 렌더 시 고정)
  const randomTypes = useMemo(() => getRandomUnique(SuggestType, 3), []);

  return (
    <MainContainer>
      <LocalWeather />
      <AdvancedSearchBar />
      {coords && (
        <>
          {randomTypes.map((type, i) => (
            <MiniSuggestList
              key={i}
              title={`추천 리스트 ${i + 1}`}
              type={type}
              longitude={coords.longitude}
              latitude={coords.latitude}
            />
          ))}
        </>
      )}
    </MainContainer>
  );
}
