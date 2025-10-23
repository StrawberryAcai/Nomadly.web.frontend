// src/features/myplans/components/MyPlanToggle.tsx
"use client";

import { useState } from "react";
import { MyPlan } from "../api/dto";

function formatTo12Hour(timeStr: string): string {
  const date = new Date(timeStr);
  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";
  hours = hours % 12 || 12;
  const minuteStr = minutes.toString().padStart(2, "0");
  return `${timeStr.slice(2,4)}.${timeStr.slice(5,7)}.${timeStr.slice(8,10)}. ${ampm} ${hours}:${minuteStr}`;
}

export default function MyPlanToggle({ plan }: { plan: MyPlan }) {
  const [open, setOpen] = useState(false);

  const firstPlace = plan.plan[0]?.place ?? "장소 없음";

  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden mb-4 shadow-sm overflow-y-auto min-h-19 box-border">
      <button
        className="w-full flex justify-between items-center px-6 py-4 bg-white hover:bg-gray-50 transition sticky top-0"
        onClick={() => setOpen(!open)}
      >
        <div className="flex flex-col text-left">
          <span className="text-gray-800 font-semibold">
            {formatTo12Hour(plan.start_time)} ~ {formatTo12Hour(plan.end_time)}
          </span>
          <span className="text-sm text-gray-500">{firstPlace}</span>
        </div>
        <span className="text-gray-400">{open ? "▲" : "▼"}</span>
      </button>

      {open && (
        <div className="bg-gray-50 border-t border-gray-200 px-6 py-4 h-100">
          <ul className="flex flex-col gap-3 pb-4">
            {plan.plan.map((item, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <span className="text-sm w-20 text-gray-600">
                  {formatTo12Hour(item.time).slice(0,9)}<br />
                  {formatTo12Hour(item.time).slice(9,18)}
                </span>
                <div className="flex-1 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
                  <div className="font-medium">{item.todo}</div>
                  <div className="text-sm text-gray-500">{item.place}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
