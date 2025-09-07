import Title from "@/features/schedule/user/components/Title";
import TextInput from "@/shared/components/inputs/TextInput";

import Search from '@public/icons/search.svg';
import BottomButton from "@/features/schedule/user/components/BottomButton";
import MainContainer from "@/shared/components/containers/MainContainer";

export default async function Page() {
  return (
    <>
      <MainContainer className="">
        <Title title="워케이션 지역을 선택해 주세요" caption="지역을 검색해 보세요.">
          <TextInput placeholder="지역을 입력하세요." src={Search} alt="search" className="my-2" />
        </Title>
      </MainContainer>
      <BottomButton isActive={true} />
    </>
  )
}