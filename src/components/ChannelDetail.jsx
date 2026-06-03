"use client";

import { useEffect, useState } from "react";
import { Alert, Box } from "@mui/material";

import { Videos, ChannelCard } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ChannelDetail = ({ id, initialChannelDetail = null, initialVideos = null }) => {
  const [channelDetail, setChannelDetail] = useState(initialChannelDetail);
  const [videos, setVideos] = useState(initialVideos);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    setChannelDetail(initialChannelDetail);
    setVideos(initialVideos);
    setError("");

    if (initialChannelDetail || initialVideos !== null) {
      return () => {
        ignore = true;
      };
    }

    const fetchResults = async () => {
      try {
        const data = await fetchFromAPI(`channels?part=snippet,statistics&id=${id}`);
        const videosData = await fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`);

        if (!ignore) {
          setChannelDetail(data?.items?.[0] ?? null);
          setVideos(videosData?.items ?? []);
        }
      } catch {
        if (!ignore) {
          setVideos([]);
          setError("Could not load this channel. Check your API key or try again later.");
        }
      }
    };

    fetchResults();

    return () => {
      ignore = true;
    };
  }, [id, initialChannelDetail, initialVideos]);

  return (
    <Box component="main" sx={{ minHeight: "95vh" }}>
      <Box
        sx={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(102,252,241,0.24), transparent 30%), linear-gradient(135deg, #101820 0%, #182433 45%, #0B0C10 100%)",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          height: { xs: 230, md: 300 },
        }}
      />
      <Box sx={{ mt: { xs: -10, md: -12 }, px: 2 }}>
        <ChannelCard channelDetail={channelDetail} />
      </Box>
      <Box sx={{ p: { xs: 2, md: 3 } }}>
        {error && <Alert severity="warning" sx={{ mb: 2 }}>{error}</Alert>}
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
