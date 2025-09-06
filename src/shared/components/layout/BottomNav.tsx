'use client';
import React from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Image from "next/image";

import Home from "@public/icons/nav/home.svg";
import Explore from "@public/icons/nav/explore.svg";
import Tour from "@public/icons/nav/tour.svg";
import Community from "@public/icons/nav/community.svg";
import Profile from "@public/icons/nav/profile.svg";

interface BottomNavIconProps {
  href: string;
  src: string | StaticImport;
  alt: string;
}

const BottomNavIcon: React.FC<BottomNavIconProps> = ({href, src, alt}) => (
  <Link href={href} className="flex-1 flex flex-col items-center min-h-12" scroll={true}>
    <Image src={src} alt={alt} height={24} width={24} />
    <span className="text-body-md text-secondary">{alt}</span>
  </Link>
)

const BottomNav: React.FC = () => {
  return (
    <nav className="w-full fixed bottom-0 z-999 border-outline border-t-1 flex justify-around px-4 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] bg-background">
      <BottomNavIcon href="/" src={Home} alt="홈" />
      <BottomNavIcon href="/explore" src={Explore} alt="지역체험" />
      <BottomNavIcon href="/tour" src={Tour} alt="관광" />
      <BottomNavIcon href="/community" src={Community} alt="커뮤니티" />
      <BottomNavIcon href="/profile" src={Profile} alt="마이" />
    </nav>
  )
}

export default BottomNav;