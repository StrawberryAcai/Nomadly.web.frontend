'use client';
import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import {useTravelStore} from "@/shared/store/useTravelStore";

const ActivenessSection: React.FC = () => {
  const {activeness, setField} = useTravelStore();
  const globalStyle = " rounded-[.5rem] flex-1"
  const activateStyle = "border-1 border-[var(--primary)] bg-primary text-white" + globalStyle;
  const deactivateStyle = "border-1 border-outline" + globalStyle;
  return (
    <SectionContainer className="flex-col gap-4">
      <h4>활동성</h4>
      <div className="border-1 border-outline p-2 flex justify-around gap-4 h-[3.625rem] rounded-xl">
        <button className={activeness?activateStyle:deactivateStyle} onClick={()=>{setField("activeness", true)}}>휴식형</button>
        <div className="h-4 my-auto border-1 border-outline" />
        <button className={!activeness?activateStyle:deactivateStyle} onClick={()=>{setField("activeness", false)}}>활동형</button>
      </div>
    </SectionContainer>
  )
}

export default ActivenessSection;