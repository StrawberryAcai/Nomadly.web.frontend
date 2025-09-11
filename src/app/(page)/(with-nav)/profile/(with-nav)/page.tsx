import MainContainer from "@/shared/components/containers/MainContainer";
import {getMePlan} from "@/features/profile/api/queries";
import PlanList from "@/shared/components/plan/PlanList";

export default async function Page() {
  const data = await getMePlan();
  return (
    <MainContainer>
      temp
      {/*{data && <PlanList data={data} />}*/}
    </MainContainer>
  );
}
