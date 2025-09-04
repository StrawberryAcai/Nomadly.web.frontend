import React from 'react';
import Link from "next/link";

const NavBar = () => (
  <nav>
    <Link href="/profile">저장된 일정</Link>
    <Link href="/profile/bookmark">북마크한 장소</Link>
    <Link href="/profile/reservation">예약 내역</Link>
    <Link href="/profile/community">커뮤니티 활동</Link>
  </nav>
)

export default NavBar;