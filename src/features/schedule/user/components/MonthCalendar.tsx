"use client";
import React from "react";
import dayjs, { Dayjs } from "dayjs";
import "dayjs/locale/ko";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import { useTravelStore } from "@/shared/store/useTravelStore";

dayjs.locale("ko");

const MonthCalendar: React.FC = () => {
  const today = dayjs();
  const { start_date, end_date, setField } = useTravelStore();

  // Dayjs 타입으로 변환
  const start = start_date ? dayjs(start_date) : null;
  const end = end_date ? dayjs(end_date) : null;

  const months = [today.startOf("month"), today.add(1, "month").startOf("month")];

  const handleClick = (day: Dayjs) => {
    if (!day.isValid()) return;

    if (!start || (start && end)) {
      setField("start_date", day.format("YYYY-MM-DD"));
      setField("end_date", "");
    } else {
      if (day.isBefore(start)) {
        setField("end_date", start.format("YYYY-MM-DD"));
        setField("start_date", day.format("YYYY-MM-DD"));
      } else {
        setField("end_date", day.format("YYYY-MM-DD"));
      }
    }
  };

  const inRange = (d: Dayjs) =>
    start &&
    end &&
    d.isValid() &&
    (d.isSame(start, "day") ||
      d.isSame(end, "day") ||
      (d.isAfter(start) && d.isBefore(end)));

  const genMonth = (m: Dayjs) => {
    const days: Dayjs[] = [];
    const first = m.startOf("month"),
      last = m.endOf("month");
    for (let i = 0; i < first.day(); i++) days.push(dayjs(null));
    for (let d = 1; d <= last.date(); d++) days.push(first.date(d));
    return days;
  };

  return (
    <div className="flex flex-col gap-4">
      {months.map((m, i) => (
        <SectionContainer key={i} className="p-4 flex-col">
          <h4 className="mb-2.5">{m.format("YYYY년 MM월")}</h4>
          <div className="flex mb-2.5">
            {["일", "월", "화", "수", "목", "금", "토"].map((w) => (
              <div key={w} className="flex-1 text-center font-semibold">
                {w}
              </div>
            ))}
          </div>
          <div className="flex flex-wrap">
            {genMonth(m).map((d, j) => {
              const isStart = start?.isSame(d, "day");
              const isEnd = end?.isSame(d, "day");
              return (
                <div key={j} className="w-1/7 flex justify-center">
                  <div
                    onClick={() => handleClick(d)}
                    className={`flex flex-col items-center gap-1 h-8.5 relative cursor-pointer ${
                      !d.isValid() && "invisible"
                    }`}
                  >
                    {(isStart || isEnd || inRange(d)) && (
                      <span
                        className={`absolute top-0 right-1/2 translate-x-1/2 -translate-y-1 w-7 h-7 z-0 rounded-full ${
                          isStart ? "bg-primary" : isEnd ? "bg-primary" : "bg-[#B3D0FF]"
                        }`}
                      />
                    )}
                    <span className={`z-10 text-body-md ${(isStart || isEnd) && "text-white"}`}>
                      {d.format("D")}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionContainer>
      ))}
    </div>
  );
};

export default MonthCalendar;
