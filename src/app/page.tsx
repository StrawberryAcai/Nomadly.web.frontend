import MainContainer from "@/shared/components/containers/MainContainer";
import WeeklyCalendar from "@/features/home/components/WeeklyCalendar";
import SearchBar from "@/features/home/components/SearchBar";

export default function Home() {
  return (
    <MainContainer>
      <WeeklyCalendar />
      <SearchBar />
      Main
    </MainContainer>
  );
}
