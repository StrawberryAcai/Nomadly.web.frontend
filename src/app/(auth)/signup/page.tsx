"use client";

import { useState } from "react";
import api from "@/shared/lib/axiosInstance";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await api.post("/api/users/signup", { username, password });
      setMessage("✅ 회원가입 성공! 이제 로그인하세요.");
    } catch (err) {
      setMessage("❌ 회원가입 실패: " + (err || "알 수 없는 오류"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">회원가입</h1>
      <form onSubmit={handleSignup} className="flex flex-col gap-2 w-64">
        <input
          type="text"
          placeholder="아이디"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white py-2 rounded">
          회원가입
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
