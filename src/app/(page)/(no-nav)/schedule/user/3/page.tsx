'use client';
import Title from "@/features/schedule/user/components/Title";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import InterestButton from "@/features/schedule/user/components/InterestButton";
import BottomButton from "@/features/schedule/user/components/BottomButton";
import {useTravelStore} from "@/shared/store/useTravelStore";

import Culture from "@public/icons/button/interest/Culture.svg";
import History from "@public/icons/button/interest/History.svg";
import LocalFood from "@public/icons/button/interest/LocalFood.svg";
import Activity from "@public/icons/button/interest/Activity.svg";
import Coworking from "@public/icons/button/interest/Coworking.svg";
import Shopping from "@public/icons/button/interest/Shopping.svg";
import Nature from "@public/icons/button/interest/Nature.svg";
import Healing from "@public/icons/button/interest/Healing.svg";
import Photo from "@public/icons/button/interest/Photo.svg";
import Festival from "@public/icons/button/interest/Festival.svg";
import Religion from "@public/icons/button/interest/Religion.svg";
import Tourism from "@public/icons/button/interest/Tourism.svg";

export default function Page() {
  const {interests, resetInterests} = useTravelStore();
  return (
    <>
      <Title title={"선호하는 여행 유형을 알려주세요"}
             caption={"최소 1개 이상 선택해 주세요.\n"+
                      "사용자님의 취향에 맞춰서 미리 선택했어요.\n"}
      ><span onClick={resetInterests}
             className="absolute bottom-6 right-4 text-caption text-[#EF4444] underline">모두 지우기</span></Title>
      <SectionContainer className="justify-around flex flex-wrap gap-4">
        <InterestButton name={"문화"} src={Culture} value={"Culture"} />
        <InterestButton name={"역사"} src={History} value={"History"} />
        <InterestButton name={"로컬푸드"} src={LocalFood} value={"LocalFood"} />
        <InterestButton name={"액티비티"} src={Activity} value={"Activity"} />
        <InterestButton name={"코워킹"} src={Coworking} value={"Coworking"} />
        <InterestButton name={"쇼핑"} src={Shopping} value={"Shopping"} />
        <InterestButton name={"자연"} src={Nature} value={"Nature"} />
        <InterestButton name={"휴양"} src={Healing} value={"Healing"} />
        <InterestButton name={"사진"} src={Photo} value={"Photo"} />
        <InterestButton name={"축제"} src={Festival} value={"Festival"} />
        <InterestButton name={"종교"} src={Religion} value={"Religion"} />
        <InterestButton name={"관광"} src={Tourism} value={"Tourism"} />
      </SectionContainer>
      <BottomButton isActive={interests?.length !== 0} />
    </>
  )
}