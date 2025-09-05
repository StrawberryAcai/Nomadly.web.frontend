import React from 'react';
import SectionContainer from "@/shared/components/containers/SectionContainer";

interface PlanContextProps {
  title: string;
  content: string;
  avg_rate: number;
  comment: number;
}
const PlanContext: React.FC<PlanContextProps> = ({title, content, comment, avg_rate}) => {
  return (
    <SectionContainer className="flex-col gap-2">
      <div className="flex flex-col">
        <h3>{title}</h3>
        <p className="text-caption text-secondary">{avg_rate} · 리뷰 {comment}</p>
      </div>
      <p className="text-body-md">{content}</p>
    </SectionContainer>
  )
}

export default PlanContext;