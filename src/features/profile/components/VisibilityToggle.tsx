import api from "@/shared/lib/axiosInstance";
import React, { useEffect, useState } from "react";
interface VisibilityToggleProps {
  board_id: string;
}

const VisibilityToggle: React.FC<VisibilityToggleProps> = ({ board_id }) => {
  const [visibility, setVisibility] = useState<"public" | "private">("private");
  const [loading, setLoading] = useState(true);

  // 초기 가시성 확인
  useEffect(() => {
    const fetchVisibility = async () => {
      try {
        const response = await api.get(`/api/board/${board_id}`);
        if (response.status === 200) {
          setVisibility("public");
        }
      } catch (error) {
      } finally {
        setLoading(false);
      }
    };

    fetchVisibility();
  }, [board_id]);

  // 토글 핸들러
  const handleToggle = async () => {
    if (loading) return;
    const newVisibility = visibility === "public" ? "private" : "public";
    setLoading(true);

    try {
      const response = await api.patch("/api/plan/visibility", {
        plan_id: board_id,
        visibility: newVisibility,
      });

      if (response.status === 200) {
        setVisibility(newVisibility);
      }
    } catch (error) {
      console.error("가시성 전환 실패:", error);
      alert("전환 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center space-x-3 justify-end mb-3">
      <span className="text-sm font-medium">
        {visibility === "public" ? "공개" : "비공개"}
      </span>
      <button
        onClick={handleToggle}
        disabled={loading}
        className={`relative inline-flex h-6 w-12 items-center rounded-full transition-colors ${
          visibility === "public" ? "bg-green-500" : "bg-gray-400"
        } ${loading ? "opacity-50 cursor-not-allowed" : "cursor-pointer"}`}
      >
        <span
          className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${
            visibility === "public" ? "translate-x-6" : "translate-x-1"
          }`}
        />
      </button>
    </div>
  );
};

export default VisibilityToggle;
