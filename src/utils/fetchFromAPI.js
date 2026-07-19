import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

export const fetchFromAPI = async (url) => {
  // 1. Browser Environment (Frontend calls)
  if (typeof window !== "undefined") {
    const { data } = await axios.get(
      `/api/youtube?endpoint=${encodeURIComponent(url)}`,
    );
    return data;
  }

  // 2. Server Environment (Backend Route calls)
  const apiKey = process.env.RAPID_API_KEY;
  if (!apiKey) {
    throw new Error("Missing RAPID_API_KEY environment variable.");
  }

  // Strip any leading slashes to prevent double slashes in the final URL
  const cleanUrl = url.startsWith("/") ? url.slice(1) : url;

  const { data } = await axios.get(`${BASE_URL}/${cleanUrl}`, {
    params: {
      maxResults: 50,
    },
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });

  return data;
};
