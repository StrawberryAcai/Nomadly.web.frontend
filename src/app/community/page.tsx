import MainContainer from "@/shared/components/containers/MainContainer";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";

import Search from "@public/icons/search.svg"
import PlanList from "@/features/community/components/PlanList";

export default function Page() {
  return (
    <MainContainer>
      <SectionContainer>
        <TextInput src={Search} alt={"Search"} placeholder={"글, 작성자를 검색해 보세요."} />
      </SectionContainer>
      <PlanList />
    </MainContainer>
  )
}