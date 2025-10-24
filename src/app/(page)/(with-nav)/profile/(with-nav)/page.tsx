// src/app/(page)/(with-nav)/myplans/page.tsx
"use client";

import { useMyPlansQuery } from "@/features/profile/hooks/useMyPlanQuery";
import MainContainer from "@/shared/components/containers/MainContainer";
import MyPlanToggle from "@/features/profile/components/MyPlanToggle";

export default function Page() {
  const { data, isLoading, isError } = useMyPlansQuery();

  if (isLoading) {
    return (
      <MainContainer className="px-4 pb-4">
        <p className="text-gray-500 text-center mt-10">불러오는 중...</p>
      </MainContainer>
    );
  }

  if (isError) {
    return (
      <MainContainer className="px-4 pb-4">
        <p className="text-red-500 text-center mt-10">
          저장된 일정을 불러오지 못했습니다.
        </p>
      </MainContainer>
    );
  }

  if (!Array.isArray(data) || data.length === 0) {
    return (
      <MainContainer className="px-4 pb-4">
        <p className="text-gray-400 text-center mt-10">
          저장된 일정이 없습니다.
        </p>
      </MainContainer>
    );
  }

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
