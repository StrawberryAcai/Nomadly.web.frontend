'use client';
import { useEffect, useState } from "react";
import MainContainer from "@/shared/components/containers/MainContainer";
import AdvancedSearchBar from "@/features/explore/components/AdvancedSearchBar";
import MiniSuggestList from "@/features/explore/components/MiniSuggestList";
import LocalWeather from "@/features/explore/components/LocalWeather";

export default function Page() {
  const [coords, setCoords] = useState<{ longitude: number; latitude: number } | null>(null);

  useEffect(() => {
    if (!coords && typeof window !== "undefined" && navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setCoords({
            longitude: pos.coords.longitude,
            latitude: pos.coords.latitude,
          });
        },
        (err) => {
          setCoords({ longitude: 126.9780, latitude: 37.5665 });
        }
      );
    }
  }, [coords]);

  return (
    <MainContainer>
      <LocalWeather />
      <AdvancedSearchBar />
      {coords && (
        <>
          <MiniSuggestList title="🍀 현지인과 함께 부산을 즐겨요!" type="관광지" longitude={coords.longitude} latitude={coords.latitude} />
          <MiniSuggestList title="♦️ 취향에 딱 맞는 워킹스페이스예요!" type="워킹스페이스" longitude={coords.longitude} latitude={coords.latitude} />
          <MiniSuggestList title="😉 숙면도 중요한 거 아시죠?" type="숙박" longitude={coords.longitude} latitude={coords.latitude} />
        </>
      )}
    </MainContainer>
  );
}