"use client";

import { useState } from "react";
import api from "@/shared/lib/axiosInstance";
import MainContainer from "@/shared/components/containers/MainContainer";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";
import Button from "@/shared/components/inputs/Button";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [message, setMessage] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const router = useRouter();

  const validatePassword = (pwd: string) => {
    // 최소 8자, 영어, 숫자, 특수문자 포함
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*()_+[\]{};':"\\|,.<>/?-]).{8,}$/;
    return regex.test(pwd);
  };

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");
    setPasswordMessage("");

    if (!validatePassword(password)) {
      setPasswordMessage("비밀번호는 최소 8자, 영어/숫자/특수문자를 포함해야 합니다.");
      return;
    }

    if (password !== passwordConfirm) {
      setPasswordMessage("비밀번호 확인이 일치하지 않습니다.");
      return;
    }

    try {
      await api.post("/api/users/signup", { username, password });
      router.push("/login"); // 회원가입 성공 시 로그인 페이지 이동
    } catch (err) {
      setMessage("서버와 연결이 끊김");
    }
  };

  return (
    <form onSubmit={handleSignup} method="POST" className="relative h-screen w-screen py-12 flex flex-col justify-between z-1000 bg-background">
      <SectionContainer className="flex-col">
        <h1 className="text-3xl font-bold">만나서 반가워요!</h1>
        <p className="text-secondary">환영합니다! 새로운 계정을 만들어보세요.</p>
      </SectionContainer>

      <SectionContainer className="flex-col gap-2">
        <div className="gap-1 py-2">
          <span>아이디</span>
          <TextInput placeholder="아이디를 입력해 주세요." onChange={(e) => setUsername(e.target.value)} />
        </div>

        <div className="gap-1 py-2">
          <span>비밀번호</span>
          <TextInput type="password" placeholder="비밀번호를 입력해 주세요." onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="gap-1 py-2">
          <span>비밀번호 확인</span>
          <TextInput type="password" placeholder="비밀번호를 다시 입력해 주세요." onChange={(e) => setPasswordConfirm(e.target.value)} />
          <span className="text-caption">{passwordMessage}</span>
        </div>

        <div className="flex items-center gap-2 text-[#A1A1A1] text-body-md">
          <div className="flex-1 border-t-[1px] border-[#A1A1A1]" />
          또는
          <div className="flex-1 border-t-[1px] border-[#A1A1A1]" />
        </div>

        <span className="text-body-md mx-auto">
          이미 계정이 있으신가요? <Link href="/login" className="text-secondary underline">로그인하기</Link>
        </span>
      </SectionContainer>

      <SectionContainer className="flex-col">
        <Button type="submit">
          회원가입하기
        </Button>
      </SectionContainer>
    </form>
  );
}
