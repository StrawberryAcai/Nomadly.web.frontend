import MainContainer from "@/shared/components/containers/MainContainer";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";

import Search from "@public/icons/search.svg"

export default function Page() {
  return (
    <MainContainer>
      <SectionContainer>
        <TextInput src={Search} alt={"Search"} placeholder={"글, 작성자를 검색해 보세요."} />
      </SectionContainer>
    </MainContainer>
  )
}