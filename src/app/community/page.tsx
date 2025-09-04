"use client";

import { useRef, useState } from "react";
import MainContainer from "@/shared/components/containers/MainContainer";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";
import Search from "@public/icons/search.svg";
import PlanList from "@/features/community/components/PlanList";
import { usePlanListQuery } from "@/features/community/api/queries";

export default function Page() {
  const [keyword, setKeyword] = useState("");
  const { data } = usePlanListQuery({ keyword });

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
