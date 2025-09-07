'use client';
import Title from "@/features/schedule/user/components/Title";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import PurposeButton from "@/features/schedule/user/components/PurposeButton";

import Workation from '@public/icons/button/purpose/workation.svg';
import BottomButton from "@/features/schedule/user/components/BottomButton";
import {useTravelStore} from "@/shared/store/useTravelStore";

export default function Page() {
  const {purpose} = useTravelStore();
  return (
    <>
      <Title title={"여행의 목적을 알려주세요"} caption={"최대 1개까지 선택해 주세요."} />
      <SectionContainer className="flex-col h-full gap-3">
      <section className="flex flex-1 gap-3">
        <PurposeButton name={"워케이션"} value={"workation1"} src={Workation} />
        <PurposeButton name={"워케이션"} value={"workation2"} src={Workation} />
      </section>
      <section className="flex flex-1 gap-3">
        <PurposeButton name={"워케이션"} value={"workation3"} src={Workation} />
        <PurposeButton name={"워케이션"} value={"workation4x"} src={Workation} />
      </section>
      </SectionContainer>
      <BottomButton isActive={purpose!==""} />
    </>
  )
}