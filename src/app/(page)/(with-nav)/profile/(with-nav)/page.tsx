// src/app/(page)/(with-nav)/myplans/page.tsx
"use client";

import { useMyPlansQuery } from "@/features/profile/hooks/useMyPlanQuery";
import MainContainer from "@/shared/components/containers/MainContainer";
import MyPlanToggle from "@/features/profile/components/MyPlanToggle";

export default function Page() {
  const { data, isLoading, isError } = useMyPlansQuery();

  if (isLoading)
    return (
      <MainContainer className="px-4 py-10 text-center text-gray-500">
        불러오는 중...
      </MainContainer>
    );

  if (isError)
    return (
      <MainContainer className="px-4 py-10 text-center text-red-500">
        데이터를 불러오지 못했습니다.
      </MainContainer>
    );

  if (!data || data.length === 0)
    return (
      <MainContainer className="px-4 py-10 text-center text-gray-400">
        등록된 플랜이 없습니다.
      </MainContainer>
    );

  return (
    <MainContainer className="px-4 py-6 overflow-y-auto">
      <div>
      {data.map((plan) => (
        <MyPlanToggle key={plan.plan_id} plan={plan} />
      ))}
      </div>
    </MainContainer>
  );
}
