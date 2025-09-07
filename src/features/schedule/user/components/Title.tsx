import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";

interface TitleProps {
  title: string;
  caption: string;
  day?: number | null;
  children?: React.ReactNode;
}
const Title: React.FC<TitleProps> = ({title, caption, day, children}) => {
  return (
    <SectionContainer className="flex-col">
      <div className="flex justify-between"><h3>{title}</h3>{day && <h3>D-{day}</h3>}</div>
      <span className="text-caption text-secondary">{caption}</span>
      {children}
    </SectionContainer>
  )
}

export default Title;