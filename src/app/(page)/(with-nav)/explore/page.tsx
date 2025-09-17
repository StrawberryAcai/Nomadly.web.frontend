'use client';
import { useEffect, useState, useMemo } from "react";
import MainContainer from "@/shared/components/containers/MainContainer";
import AdvancedSearchBar from "@/features/explore/components/AdvancedSearchBar";
import MiniSuggestList from "@/features/explore/components/MiniSuggestList";
import LocalWeather from "@/features/explore/components/LocalWeather";
import Title from "@/features/schedule/user/components/Title";
import TextInput from "@/shared/components/inputs/TextInput";
import Search from "@public/icons/search.svg";
import {usePlaceQuery} from "@/features/schedule/user/hooks/usePlaceQuery";

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
  const [input, setInput] = useState<string>("");
  const [debouncedInput, setDebouncedInput] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 400);
    return () => clearTimeout(handler);
  }, [input]);

  const { data, isLoading, isError } = usePlaceQuery(
      debouncedInput,
      coords?.longitude ?? undefined,
      coords?.latitude ?? undefined,
      !!debouncedInput
  );
  return (
    <MainContainer>
      <LocalWeather />
      <AdvancedSearchBar onChange={e => setInput(e.target.value)} />
        <div className="flex flex-col gap-4 px-4 py-2 w-full">
            {isLoading && (
                <div className="text-center text-gray-400 py-4">로딩중...</div>
            )}
            {isError && (
                <div className="text-center text-red-400 py-4">에러 발생</div>
            )}
            {data && (
                <button
                    type="button"
                    className={`flex gap-3 items-center w-full border rounded-xl p-2 transition-colors border-transparent`}
                >
                    <div className="overflow-clip relative shrink-0 w-[100px] h-[100px]">
                        <div
                            className="absolute inset-0 rounded-[12px] bg-cover bg-center"
                            style={{ backgroundImage: `url('${data.image}')` }}
                        />
                    </div>
                    <div className="flex flex-col gap-1 items-start justify-center text-left">
                        <div className="font-medium text-[#111] text-[18px] leading-6">
                            {data.place_name}
                        </div>
                        <div className="font-light text-[#aaa] text-[12px] leading-4">
                            {data.address}
                        </div>
                        <div className="font-light text-[#aaa] text-[12px] leading-4">
                            평점: {data.rating} / 북마크: {data.bookmark_cnt} / 거리: {data.distance}m
                        </div>
                    </div>
                </button>
            )}
        </div>
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
