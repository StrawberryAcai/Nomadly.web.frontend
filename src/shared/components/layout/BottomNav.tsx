'use client';
import React from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Image from "next/image";
import {usePathname} from "next/navigation";

import Home from "@public/icons/nav/home.svg";
import Explore from "@public/icons/nav/explore.svg";
import Tour from "@public/icons/nav/tour.svg";
import Community from "@public/icons/nav/community.svg";
import Profile from "@public/icons/nav/profile.svg";

import HomePrimary from "@public/icons/nav/home_primary.svg";
import ExplorePrimary from "@public/icons/nav/explore_primary.svg";
import TourPrimary from "@public/icons/nav/tour_primary.svg";
import CommunityPrimary from "@public/icons/nav/community_primary.svg";
import ProfilePrimary from "@public/icons/nav/profile_primary.svg";

interface BottomNavIconProps {
  href: string;
  defaultSrc: string | StaticImport;
  primarySrc: string | StaticImport;
  alt: string;
  active: boolean;
}

const BottomNavIcon: React.FC<BottomNavIconProps> = ({href, defaultSrc, primarySrc, alt, active}) => (
  <Link href={href} className="flex-1 flex flex-col items-center min-h-12" scroll={true}>
    <Image src={active?primarySrc:defaultSrc} alt={alt} height={24} width={24} />
    <span className={`text-body-md ${active?"text-[#0A66FF]":"text-secondary"}`}>{alt}</span>
  </Link>
)

const BottomNav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="w-full fixed bottom-0 z-999 border-outline border-t-1 flex justify-around px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] bg-background">
      <BottomNavIcon href="/" defaultSrc={Home} primarySrc={HomePrimary} alt="홈" active={pathname === '/'} />
      <BottomNavIcon href="/explore" defaultSrc={Explore} primarySrc={ExplorePrimary} alt="지역체험" active={pathname.startsWith("/explore")} />
      <BottomNavIcon href="/tour" defaultSrc={Tour} primarySrc={TourPrimary} alt="관광" active={pathname.startsWith("/tour")} />
      <BottomNavIcon href="/community" defaultSrc={Community} primarySrc={CommunityPrimary} alt="커뮤니티" active={pathname.startsWith("/community")} />
      <BottomNavIcon href="/profile" defaultSrc={Profile} primarySrc={ProfilePrimary} alt="마이" active={pathname.startsWith("/profile")} />
    </nav>
  )
}

export default BottomNav;