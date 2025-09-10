// app/error.tsx
"use client"

import { useEffect } from "react"

export default function GlobalError({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <html>
    <body className="flex flex-col items-center justify-center h-screen bg-gray-50 text-gray-800">
    <h1 className="text-2xl font-bold mb-2">문제가 발생했습니다 😢</h1>
    <p className="mb-4 text-gray-600">{error.message}</p>
    <button
      onClick={() => reset()}
      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
    >
      다시 시도하기
    </button>
    </body>
    </html>
  )
}
