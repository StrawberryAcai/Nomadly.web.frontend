"use client";

import { useEffect } from "react";
import api from "@/shared/lib/axiosInstance"; // 방금 만든 인스턴스 import

export default function ProfilePage() {
  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const { data } = await api.get("/api/users/profile");
        console.log("Profile data:", data);
      } catch (err: any) {
        if (err.response) {
          console.error("Error response:", err.response.status, err.response.data);
        } else {
          console.error("Error:", err.message);
        }
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Profile Page</h1>
      <p>콘솔에서 프로필 데이터를 확인하세요.</p>
    </div>
  );
}
