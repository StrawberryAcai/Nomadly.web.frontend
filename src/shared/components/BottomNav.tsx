'use client';
import React from "react";
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Link from "next/link";
import Image from "next/image";
import {Home, Explore, Tour, Community, Profile} from "@/shared/lib/assets/navIcons";

interface BottomNavIconProps {
  href: string;
  src: string | StaticImport;
  alt: string;
}

const BottomNavIcon: React.FC<BottomNavIconProps> = ({href, src, alt}) => (
  <Link href={href} className="flex-1 flex flex-col items-center">
    <Image src={src} alt={alt} className="h-6 w-6" />
    <span className="text-body-md text-[#AAAAAA]">{alt}</span>
  </Link>
)

const BottomNav: React.FC = () => {
  return (
    <nav className="h-16 w-full fixed bottom-0 border-outline border-t-1 flex justify-around px-4 py-2">
      <BottomNavIcon href="/" src={Home} alt="홈" />
      <BottomNavIcon href="/explore" src={Explore} alt="지역체험" />
      <BottomNavIcon href="/tour" src={Tour} alt="관광" />
      <BottomNavIcon href="/community" src={Community} alt="커뮤니티" />
      <BottomNavIcon href="/profile" src={Profile} alt="마이" />
    </nav>
  )
}

export default BottomNav;