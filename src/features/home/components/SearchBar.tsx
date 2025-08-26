import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";

import Search from "@public/icons/search.svg";

const SearchBar: React.FC = () => {
  return (
    <SectionContainer className="h-16">
      <TextInput src={Search} alt="검색" placeholder="일정을 검색해 보세요." />
    </SectionContainer>
  )
}

export default SearchBar;