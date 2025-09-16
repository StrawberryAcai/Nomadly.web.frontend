"use client";
import { useTravelStore } from "@/shared/store/useTravelStore";

export default function Page() {
	const store = useTravelStore();
	return (
		<div style={{ whiteSpace: "pre-wrap", fontFamily: "monospace", fontSize: 14 }}>
			{JSON.stringify(store, null, 2)}
		</div>
	);
}
