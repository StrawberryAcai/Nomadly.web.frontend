import React from 'react';
import PlanItem from "@/features/community/components/PlanItem";
import {PlanListResponse} from "@/features/community/api/dto";

interface PlanListProps {
  data: PlanListResponse
}
const PlanList: React.FC<PlanListProps> = ({data}) => {
  const tempUrl = "https://i.namu.wiki/i/Z41qK_Jp4TYWr7IaMOcgrRmtTF_F7qWX5ugdrTDjAHZPkvrf8ahJZYmWC-6cmaS1kgPrsV4UgzgxVNigvN9Uml2-5Vq5Oa-LLuNdMqAglZs1pG7ArNSN2Mzsvdewm5KjCTfJdteQyYDGl9njSF6_WQ.webp";
  return (
    <section className="flex flex-col gap-4">
      {data?.plans.map((plan) => <PlanItem key={plan.plan_id} {...plan} url={tempUrl} />)}
    </section>
  )
}

export default PlanList;