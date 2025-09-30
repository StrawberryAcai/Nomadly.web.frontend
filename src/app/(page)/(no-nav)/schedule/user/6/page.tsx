"use client";
import { useTravelStore } from "@/shared/store/useTravelStore";
import { usePlanQuery } from "@/features/schedule/user/hooks/usePlanQuery";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import ToggleSpan from "@/features/plan/components/ToggleSpan";

function formatTo12Hour(dateStr: string): string {
  const isoStr = dateStr.replace(/-/g, (m, i) => (i < 10 ? m : ":"))
    .replace(":", "T")
    .replace(":", ":") + ":00";

  const date = new Date(
    dateStr.replace(/-/g, (m, i) => (i < 10 ? m : ":"))
      .replace(":", "T")
      .replace(":", ":") + ":00"
  );

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const ampm = hours >= 12 ? "오후" : "오전";

  hours = hours % 12;
  hours = hours ? hours : 12; // 0시는 12로 표시

  const minuteStr = minutes.toString().padStart(2, "0");

  return `${ampm} ${hours}:${minuteStr}`;
}

export default function Page() {
	const store = useTravelStore();
	const { data, isLoading, isError, error } = usePlanQuery(store);

	if (isLoading) return <div className="py-20 text-center text-lg">Loading...</div>;
	if (isError) return <div className="py-20 text-red-500 text-center">Error: {String(error)}</div>;
	if (!data) return null;

	return (
		<main className="bg-[#FAFAFA] min-h-screen py-12 px-4 font-sans">
			<section className="max-w-3xl mx-auto">
				<header className="mb-10 text-center">
					<h1 className="text-3xl font-bold text-gray-900 mb-3">여행 일정</h1>
					<div className="text-gray-600 text-lg">
						{data.start_date} ~ {data.end_date}
					</div>
				</header>

        <SectionContainer className="flex-col">
          <div className="flex flex-col">
            {data.plan.map((plans, index1) => (
              <ToggleSpan key={index1} day={index1+1}>
                <section className="flex flex-col gap-5">
                  {plans.map((item, index2)=> {
                    const globalIndex = data.plan
                        .slice(0, index1)
                        .reduce((acc, cur) => acc + cur.length, 0)
                      + index2 + 1;
                    return (
                      <div key={index2} className="flex gap-3">
                        <span className="w-18">{formatTo12Hour(item.time)}</span>
                        <div className="w-6 h-6 rounded-full bg-primary text-white flex justify-center items-center">
                          {globalIndex}
                        </div>
                        <div className="border-1 flex-1 border-outline flex flex-col px-6 py-4 rounded-2xl">
                          <span className="text-body-md">{item.todo}</span>
                          <span className="text-caption text-secondary">{item.place}</span>
                        </div>
                      </div>
                    )
                  })}
                </section>
              </ToggleSpan>
            ))}
          </div>
        </SectionContainer>
			</section>
		</main>
	);
}
