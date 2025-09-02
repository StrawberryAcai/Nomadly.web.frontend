import { NextResponse } from "next/server";
import { getRegion } from "@/server/services/kakao/service";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const lat = searchParams.get("lat");
  const lon = searchParams.get("lon");

  if (!lat || !lon) return NextResponse.json({ error: "lat/lon required" }, { status: 400 });

  try {
    const addressName = await getRegion(Number(lat), Number(lon));
    return NextResponse.json({ addressName });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}
