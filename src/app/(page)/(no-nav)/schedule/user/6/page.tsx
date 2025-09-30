"use client";
import { useTravelStore } from "@/shared/store/useTravelStore";
import { usePlanQuery } from "@/features/schedule/user/hooks/usePlanQuery";
import { PlanItem, PlanResponse } from "@/features/schedule/user/api/queries";

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

				<div className="space-y-8">
					{data.plan.map((day, i) => (
						<div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">
							<div className="bg-indigo-50 px-6 py-4">
								<h2 className="text-xl font-semibold text-indigo-700">Day {i + 1}</h2>
							</div>

							<div className="divide-y divide-gray-100">
								{day.map((item, j) => (
									<div key={j} className="px-6 py-5 flex items-start gap-6">
										<div className="w-20 shrink-0">
											<div className="text-indigo-600 font-medium">{item.time}</div>
										</div>

										<div className="flex-1">
											<div className="font-medium text-gray-900 mb-1">{item.todo}</div>
											<div className="text-gray-500 text-sm flex items-center gap-1">
												<svg
													className="w-4 h-4"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
													/>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth={2}
														d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
													/>
												</svg>
												{item.place}
											</div>
										</div>
									</div>
								))}
							</div>
						</div>
					))}
				</div>
			</section>
		</main>
	);
}
