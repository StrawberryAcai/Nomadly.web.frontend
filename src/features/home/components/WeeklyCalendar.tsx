'use client';

import React, {useState} from 'react';
import dayjs, {Dayjs} from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

interface CalendarDayProps {
  day: Dayjs;
  highlight?: boolean;
}

const CalendarDay: React.FC<CalendarDayProps> = ({day, highlight}) => {
  return (
    <div className="flex-1 flex flex-col items-center relative">
      <span className={`text-body-md z-1 text-${highlight ? "white" :"secondary"}`}>{day.format("ddd")}</span>
      {highlight && <span className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-[0.1875rem] w-7 h-7 bg-red-500 rounded-full z-0" />}
      <span className="text-body-md z-1">{day.format("D")}</span>
    </div>
  )
}

const WeeklyCalendar: React.FC = () => {
  const [today] = useState(dayjs());
  const startOfWeek = today.startOf("week");
  const days = Array.from({ length: 7 }, (_, i) => startOfWeek.add(i, "day"));
  return (
    <section className="w-full h-[4.25rem] flex px-6 py-2">
      {days.map((day, i) => <CalendarDay day={day} key={i} highlight={day.isSame(today, "day")}/>)}
    </section>
  )
}

export default WeeklyCalendar;