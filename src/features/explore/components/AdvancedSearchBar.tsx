import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";

import Search from "@public/icons/search.svg";
import Select from "@/shared/components/inputs/Select";

const AdvancedSearchBar = () => {
  const Category: string[] = ["a", "b", "c", "d"];
  return (
    <SectionContainer className="flex-wrap gap-3">
      <TextInput src={Search} alt={"Place"} placeholder={"장소를 검색해보세요"} />
      <div className="flex gap-3">
        <Select placeholder="카테고리" items={Category}/>
        <Select placeholder="가격대" items={Category}/>
        <Select placeholder="지역" items={Category}/>
      </div>
    </SectionContainer>
  )
}

export default AdvancedSearchBar;