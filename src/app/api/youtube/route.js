import { NextResponse } from "next/server";

import { fetchFromAPI } from "../../../utils/fetchFromAPI";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint");

  if (!endpoint) {
    return NextResponse.json({ error: "Missing endpoint query parameter." }, { status: 400 });
  }

  try {
    const data = await fetchFromAPI(endpoint);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Failed to fetch YouTube data." },
      { status: 500 }
    );
  }
}
