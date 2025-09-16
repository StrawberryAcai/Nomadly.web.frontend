"use client";

import { useState, useEffect } from "react";
import MainContainer from "@/shared/components/containers/MainContainer";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";
import Search from "@public/icons/search.svg";
import PlanList from "@/shared/components/plan/PlanList";
import { usePlanListQuery } from "@/features/community/hooks/usePlanListQuery";

export default function Page() {
  const [keyword, setKeyword] = useState("");
  const [debouncedKeyword, setDebouncedKeyword] = useState("");

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedKeyword(keyword);
    }, 400); // 400ms 후에만 반영
    return () => clearTimeout(handler);
  }, [keyword]);

  const { data } = usePlanListQuery({ keyword: debouncedKeyword });

  return (
    <MainContainer>
      <SectionContainer>
        <TextInput
          src={Search}
          alt="Search"
          placeholder="글, 작성자를 검색해 보세요."
          onChange={(e) => setKeyword(e.target.value)}
        />
      </SectionContainer>
      {data && <PlanList data={data} />}
    </MainContainer>
  );
}
