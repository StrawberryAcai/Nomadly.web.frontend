import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";

import Search from "@public/icons/search.svg";

const AdvancedSearchBar = () => {
  return (
    <SectionContainer>
      <TextInput src={Search} alt={"Place"} placeholder={"장소를 검색해보세요"} />
      <select>
        <option></option>
      </select>
    </SectionContainer>
  )
}

export default AdvancedSearchBar;