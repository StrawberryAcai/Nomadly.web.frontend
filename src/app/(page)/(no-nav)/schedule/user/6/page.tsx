"use client";
import { useTravelStore } from "@/shared/store/useTravelStore";
import { usePlanQuery } from "@/features/schedule/user/hooks/usePlanQuery";

// PlanItem, PlanResponse 타입 정의
type PlanItem = {
	todo: string;
	place: string;
	time: string;
};

type PlanResponse = {
	start_date: string;
	end_date: string;
	plan: PlanItem[][];
};

export default function Page() {
	const store = useTravelStore();
	const { data, isLoading, isError, error } = usePlanQuery(store);

	if (isLoading) return <div className="py-20 text-center text-lg">Loading...</div>;
	if (isError) return <div className="py-20 text-red-500 text-center">Error: {String(error)}</div>;
	if (!data) return null;

	return (
		<main className="bg-gray-50 min-h-screen py-10 font-sans">
			<section className="max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8">
				<header className="mb-8">
					<h1 className="text-2xl font-bold text-gray-900 mb-2">Trip Schedule</h1>
					<div className="text-gray-500 font-medium">
						{data.start_date} ~ {data.end_date}
					</div>
				</header>
				{data.plan.map((day: PlanItem[], i: number) => (
					<div key={i} className="mb-7 rounded-xl bg-gray-100 p-5">
						<div className="font-semibold text-indigo-600 text-lg mb-3">Day {i + 1}</div>
						<ul>
							{day.map((item: PlanItem, j: number) => (
								<li key={j} className="flex items-center gap-4 py-3 border-b last:border-b-0 border-gray-200">
									<div className="flex-1">
										<div className="font-medium text-gray-900">{item.todo}</div>
										<div className="text-sm text-gray-500">{item.place}</div>
									</div>
									<div className="text-indigo-600 font-semibold text-sm bg-indigo-50 rounded px-3 py-1">
										{item.time}
									</div>
								</li>
							))}
						</ul>
					</div>
				))}
			</section>
		</main>
	);
}
