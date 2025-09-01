"use client";

import { useState } from "react";
import api, { setAccessToken } from "@/shared/lib/axiosInstance";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await api.post("/api/auth/login", { username, password });
      console.log(res);
      const token = res.headers["authorization"]?.replace("Bearer ", "");
      if (token) {
        setAccessToken(token);
        setMessage("✅ 로그인 성공!");
      }
    } catch (err) {
      setMessage("❌ 로그인 실패: " + (err || "알 수 없는 오류"));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <h1 className="text-2xl font-bold">로그인</h1>
      <form onSubmit={handleLogin} className="flex flex-col gap-2 w-64">
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
        <button type="submit" className="bg-green-500 text-white py-2 rounded">
          로그인
        </button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}
