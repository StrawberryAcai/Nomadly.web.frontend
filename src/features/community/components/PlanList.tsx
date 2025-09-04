import React from 'react';
import PlanItem from "@/features/community/components/PlanItem";
import {PlanListResponse} from "@/features/community/api/dto";

interface PlanListProps {
  data: PlanListResponse
}
const PlanList: React.FC<PlanListProps> = ({data}) => {
  return (
    <section className="flex flex-col gap-4">
      {data?.plans.map((plan) => <PlanItem key={plan.plan_id} {...plan} />)}
    </section>
  )
}

export default PlanList;