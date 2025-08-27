import MainContainer from "@/shared/components/containers/MainContainer";
import AdvancedSearchBar from "@/features/explore/components/AdvancedSearchBar";
import MiniSuggestList from "@/features/explore/components/MiniSuggestList";

export default function Home() {
  return (
    <MainContainer>
      <AdvancedSearchBar />
      <MiniSuggestList title="🍀 현지인과 함께 부산을 즐겨요!" />
      <MiniSuggestList title="♦️ 취향에 딱 맞는 워킹스페이스예요!" />
      <MiniSuggestList title="😉 숙면도 중요한 거 아시죠?" />
    </MainContainer>
  )
}