"use client";

import { useState } from "react";
import api, { setAccessToken } from "@/shared/lib/axiosInstance";
import MainContainer from "@/shared/components/containers/MainContainer";
import SectionContainer from "@/shared/components/containers/SectionContainer";
import TextInput from "@/shared/components/inputs/TextInput";
import Button from "@/shared/components/inputs/Button";
import axios, {AxiosError} from "axios";
import {useRouter} from "next/navigation";
import Link from "next/link";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { username, password });
      console.log(res);
      const token = res.headers["authorization"]?.replace("Bearer ", "");
      if (token) {
        setAccessToken(token);
        router.push("/profile");
      }
    } catch (err) {
      if (axios.isAxiosError(err) && err.response?.status === 401) setMessage("아이디 또는 비밀번호가 올바르지 않아요.");
    }
  };
  return (
    <form onSubmit={handleLogin} method="POST" className="py-12 h-screen w-screen relative z-1000 flex flex-col justify-between bg-background box-border overflow-hidden">
      <SectionContainer className="flex-col">
        <h1 className="text-3xl font-bold">만나서 반가워요!</h1>
        <p className="text-secondary">다시 돌아오셨군요!</p>
      </SectionContainer>
      <SectionContainer className="flex-col gap-2">
        <div className="gap-1 py-2">
          <span>아이디</span>
          <TextInput placeholder="아이디를 입력해 주세요." onChange={(e)=>setUsername(e.target.value)} />
        </div>
        <div className="gap-1 py-2">
          <span>비밀번호</span>
          <TextInput type={"password"} placeholder="비밀번호를 입력해 주세요." onChange={(e)=>setPassword(e.target.value)} />
          <span className="text-caption">{message}</span>
        </div>
        <div className="flex items-center gap-2 text-[#A1A1A1] text-body-md">
          <div className="flex-1 border-t-[1px] border-[#A1A1A1]"/>
          또는
          <div className="flex-1 border-t-[1px] border-[#A1A1A1]"/>
        </div>
        <span className="text-body-md mx-auto">회원이 아니신가요? <Link href="/signup" className="text-secondary underline">회원가입하기</Link></span>
      </SectionContainer>
      <SectionContainer className="flex-col">
        <Button type="submit">
          로그인하기
        </Button>
      </SectionContainer>
    </form>
  );
}
