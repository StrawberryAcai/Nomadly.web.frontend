'use client';
import React from 'react';
import Link from "next/link";
import { usePathname } from 'next/navigation';

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
const CustomLink: React.FC<CustomLinkProps> = ({href, children}) => {
  const pathname = usePathname();
  const active = pathname.endsWith(href);
  return (
    <Link href={href} className={`py-1 text-body-md ${active?"underline underline-offset-4 text-[var(--primary)]":""}`}>{children}</Link>
  )
}
const NavBar: React.FC = () => {
  
  return (
    <nav className="px-4 flex justify-around">
      <CustomLink href="/profile">저장된 일정</CustomLink>
      <CustomLink href="/profile/bookmark/plans">북마크한 일정</CustomLink>
      <CustomLink href="/profile/bookmark/places">북마크한 장소</CustomLink>
      <CustomLink href="/profile/community">커뮤니티 활동</CustomLink>
    </nav>
  )
}

export default NavBar;