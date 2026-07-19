import { NextResponse } from "next/server";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const endpoint = searchParams.get("endpoint");

  if (!endpoint) {
    return NextResponse.json(
      { error: "Missing endpoint query parameter." },
      { status: 400 },
    );
  }

  try {
    const data = await fetchFromAPI(endpoint);
    return NextResponse.json(data);
  } catch (error) {
    const status = error?.response?.status || (error?.message?.includes("Missing RapidAPI key") ? 500 : 502);
    const upstreamMessage =
      error?.response?.data?.message ||
      error?.response?.data?.error ||
      error?.message ||
      "Failed to fetch YouTube data.";

    console.error("YouTube API proxy failed:", {
      endpoint,
      status,
      message: upstreamMessage,
    });

    return NextResponse.json(
      { error: upstreamMessage },
      { status },
    );
  }
}
