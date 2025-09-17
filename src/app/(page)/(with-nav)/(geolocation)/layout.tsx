'use client';

export default function Layout({ children }: { children: React.ReactNode }) {
  if (typeof window !== "undefined" && navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      () => {},
      () => {}
    );
  }

  return <>{children}</>;
}