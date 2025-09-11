import React from 'react';
import PlanItem from "@/shared/components/plan/PlanItem";
import {PlanListResponse} from "@/features/community/api/dto";

interface PlanListProps {
  data: PlanListResponse[]
}
const PlanList: React.FC<PlanListProps> = ({data}) => {
  return (
    <section className="flex flex-col gap-4">
      {data?.map((plan) => <PlanItem key={plan.board_id} {...plan} />)}
    </section>
  )
}

export default PlanList;