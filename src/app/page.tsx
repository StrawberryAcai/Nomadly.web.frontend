import MainContainer from "@/shared/components/containers/MainContainer";
import WeeklyCalendar from "@/features/home/components/WeeklyCalendar";
import SearchBar from "@/features/home/components/SearchBar";
import AiScheduleButton from "@/features/home/components/AiScheduleButton";
import ShortcutButtons from "@/features/home/components/ShortcutButtons";

export default function Home() {
  return (
    <MainContainer>
      <WeeklyCalendar />
      <SearchBar />
      <AiScheduleButton />
      <ShortcutButtons />
    </MainContainer>
  );
}
