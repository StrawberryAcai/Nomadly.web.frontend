import React from 'react';
import Link from "next/link";

interface CustomLinkProps {
  href: string;
  children: React.ReactNode;
}
const CustomLink: React.FC<CustomLinkProps> = ({href, children}) => <Link href={href} className="py-1 text-body-md">{children}</Link>
const NavBar: React.FC = () => (
  <nav className="px-4 flex justify-around">
    <CustomLink href="/profile">저장된 일정</CustomLink>
    <CustomLink href="/profile/bookmark">북마크한 장소</CustomLink>
    <CustomLink href="/profile/reservation">예약 내역</CustomLink>
    <CustomLink href="/profile/community">커뮤니티 활동</CustomLink>
  </nav>
)

export default NavBar;