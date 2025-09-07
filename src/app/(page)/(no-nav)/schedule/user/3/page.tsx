'use client';
import Title from "@/features/schedule/user/components/Title";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import InterestButton from "@/features/schedule/user/components/InterestButton";
import BottomButton from "@/features/schedule/user/components/BottomButton";

import Culture from "@public/icons/button/interest/Culture.svg";
import {useTravelStore} from "@/shared/store/useTravelStore";

export default function Page() {
  const {interests, resetInterests} = useTravelStore();
  return (
    <>
      <Title title={"선호하는 여행 유형을 알려주세요"}
             caption={"최소 1개 이상 선택해 주세요.\n"+
                      "사용자님의 취향에 맞춰서 미리 선택했어요.\n"}
      ><span onClick={resetInterests}
             className="absolute bottom-6 right-4 text-caption text-[#EF4444] underline">모두 지우기</span></Title>
      <SectionContainer className="justify-around">
        <InterestButton name={"문화"} src={Culture} value={"Culture1"} />
        <InterestButton name={"문화"} src={Culture} value={"Culture2"} />
        <InterestButton name={"문화"} src={Culture} value={"Culture3"} />
      </SectionContainer>
      <BottomButton isActive={interests?.length !== 0} />
    </>
  )
}