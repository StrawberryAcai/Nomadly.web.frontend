import {getMeBookmarkedPlan} from "@/features/profile/api/queries";
import MainContainer from "@/shared/components/containers/MainContainer";
import PlanList from "@/shared/components/plan/PlanList";

export default async function Page() {
  const data = await getMeBookmarkedPlan();
  return (
    <MainContainer>
      {data && <PlanList data={data} />}
    </MainContainer>
  );
}
