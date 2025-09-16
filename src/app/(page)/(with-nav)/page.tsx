
import { useEffect, useState } from "react";
import MainContainer from "@/shared/components/containers/MainContainer";
import WeeklyCalendar from "@/features/home/components/WeeklyCalendar";
import SearchBar from "@/features/home/components/SearchBar";
import AiScheduleButton from "@/features/home/components/AiScheduleButton";
import ShortcutButtons from "@/features/home/components/ShortcutButtons";
import SuggestList from "@/features/home/components/SuggestList";

export default function Home() {
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
          // fallback 좌표(서울)
          setCoords({ longitude: 126.9780, latitude: 37.5665 });
        }
      );
    }
  }, [coords]);

  return (
    <MainContainer>
      <WeeklyCalendar />
      <SearchBar />
      <AiScheduleButton />
      <ShortcutButtons />
      {coords && (
        <SuggestList type="관광지" longitude={coords.longitude} latitude={coords.latitude} />
      )}
    </MainContainer>
  );
}
