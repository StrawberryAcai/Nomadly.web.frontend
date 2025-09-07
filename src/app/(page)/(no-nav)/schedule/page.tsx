import SectionContainer from "@/shared/components/containers/SectionContainer";
import Link from "next/link";

export default async function Page() {
  return(
    <SectionContainer className="flex-col relative flex-1">
      <h3 className="mx-auto font-semibold">일정을 어떻게 생성하시겠어요?</h3>
      <div className="flex flex-col absolute top-1/4 left-0 right-0 gap-6">
        <Link href="/schedule/ai" className="mx-auto">AI로 빠르게 생성하기</Link>
        <Link href="/schedule/user" className="mx-auto">직접 단계별로 만들기</Link>
      </div>
    </SectionContainer>
  )
}