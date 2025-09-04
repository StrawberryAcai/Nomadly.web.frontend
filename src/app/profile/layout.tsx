import TopBar from "@/shared/components/TopBar";
import Image from "next/image";
import Setting from "@public/icons/button/setting.svg";
import ProfileCard from "@/features/profile/components/ProfileCard";
import MainContainer from "@/shared/components/containers/MainContainer";
import NavBar from "@/features/profile/components/NavBar";


export default function layout({children}) {
  return (
    <MainContainer>
      <TopBar>
        <Image src={Setting} alt="setting" />
      </TopBar>
      <ProfileCard />
      <NavBar />
      {children}
    </MainContainer>
  )
}