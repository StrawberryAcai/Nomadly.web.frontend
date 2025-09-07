'use client';
import Title from "@/features/schedule/user/components/Title";
import ActivenessSection from "@/features/schedule/user/components/ActivenessSection";
import ButtonSelect from "@/features/schedule/user/components/ButtonSelect";
import BottomButton from "@/features/schedule/user/components/BottomButton";
import {useTravelStore} from "@/shared/store/useTravelStore";

export default function Page() {
  const {budget_preset, companies, prefered_time, setField} = useTravelStore();
  return (
    <>
      <Title title="선호하는 활동 스타일을 알려주세요" caption="여행 계획에 반영할게요." />
      <ActivenessSection />
      <ButtonSelect title="예산 프리셋"
                    onChange={(item)=>{setField("budget_preset", item)}}
                    items={[{name: "저예산",value: "low"},
                            {name: "평균", value: "middle"},
                            {name: "프리미엄", value: "high"}]}
      />
      <ButtonSelect title="여행 동반자"
                    onChange={(item)=>{setField("companies", item)}}
                    items={[{name: "혼자",value: "alone"},
                            {name: "친구", value: "friend"},
                            {name: "가족", value: "family"}]}
      />
      <ButtonSelect title="선호 시간 여행대"
                    onChange={(item)=>{setField("prefered_time", item)}}
                    items={[{name: "아침",value: "morning"},
                            {name: "저녁", value: "evening"}]}
      />
      <BottomButton isActive={(budget_preset!=="")
        &&(companies!=="")
        &&(prefered_time!=="")} text={"일정 생성하기"} />
    </>
  )
}