import axios from "axios";

export const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const API_KEY_NAMES = ["RAPID_API_KEY", "NEXT_PUBLIC_RAPID_API_KEY", "REACT_APP_RAPID_API_KEY"];
const ALLOWED_ENDPOINTS = new Set(["search", "videos", "channels"]);

const getRapidApiKey = () => API_KEY_NAMES.map((name) => process.env[name]).find(Boolean);

const buildYoutubeUrl = (endpoint) => {
  const normalizedEndpoint = endpoint.startsWith("/") ? endpoint.slice(1) : endpoint;
  const parsedUrl = new URL(normalizedEndpoint, `${BASE_URL}/`);
  const resource = parsedUrl.pathname.replace(/^\/+/, "");

  if (!ALLOWED_ENDPOINTS.has(resource)) {
    throw new Error("Unsupported YouTube API endpoint.");
  }

  if (!parsedUrl.searchParams.has("maxResults")) {
    parsedUrl.searchParams.set("maxResults", "50");
  }

  return `${BASE_URL}/${resource}?${parsedUrl.searchParams.toString()}`;
};

export const fetchFromAPI = async (url) => {
  if (typeof window !== "undefined") {
    const { data } = await axios.get(
      `/api/youtube?endpoint=${encodeURIComponent(url)}`,
    );
    return data;
  }

  const apiKey = getRapidApiKey();
  if (!apiKey) {
    throw new Error(`Missing RapidAPI key. Set one of: ${API_KEY_NAMES.join(", ")}.`);
  }

  const { data } = await axios.get(buildYoutubeUrl(url), {
    headers: {
      "X-RapidAPI-Key": apiKey,
      "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
    },
  });

  return data;
};
