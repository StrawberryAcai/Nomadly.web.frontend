'use client'
import dayjs from 'dayjs';
import MonthCalendar from "@/features/schedule/user/components/MonthCalendar";
import BottomButton from "@/features/schedule/user/components/BottomButton";
import {useTravelStore} from "@/shared/store/useTravelStore";
import Title from "@/features/schedule/user/components/Title";
import {useEffect, useState} from "react";

export default function Page() {
  const [day, setDay] = useState<number|null>(null);
  const {start_date, end_date} = useTravelStore();
  useEffect(() => {
    if(start_date && end_date){
      const start = dayjs(start_date);
      const end = dayjs(end_date);
      setDay(end.diff(start, "day")+1);
    }else setDay(null);
  },[start_date, end_date]);
  return (
    <>
      <Title title="워케이션 일정을 알려주세요" caption="도착 날짜를 선택해 주세요." day={day} />
      <MonthCalendar />
      <BottomButton isActive={!((start_date==="")||(end_date===""))} />
    </>
  )
}