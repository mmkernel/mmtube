"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { Alert, Box, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

const formatCount = (value) => {
  const number = Number(value);
  return Number.isFinite(number) ? number.toLocaleString("en-US") : "0";
};

const VideoDetail = ({ id, initialVideoDetail = null, initialVideos = null }) => {
  const [videoDetail, setVideoDetail] = useState(initialVideoDetail);
  const [videos, setVideos] = useState(initialVideos);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    setVideoDetail(initialVideoDetail);
    setVideos(initialVideos);
    setError("");

    if (initialVideoDetail || initialVideos !== null) {
      return () => {
        ignore = true;
      };
    }

    const fetchVideo = async () => {
      try {
        const [detailData, relatedData] = await Promise.all([
          fetchFromAPI(`videos?part=snippet,statistics&id=${id}`),
          fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`),
        ]);

        if (!ignore) {
          setVideoDetail(detailData?.items?.[0] ?? null);
          setVideos(relatedData?.items ?? []);
        }
      } catch {
        if (!ignore) {
          setVideos([]);
          setError("Could not load this video. Check your API key or try again later.");
        }
      }
    };

    fetchVideo();

    return () => {
      ignore = true;
    };
  }, [id, initialVideoDetail, initialVideos]);

  if (!videoDetail?.snippet && !error) return <Loader />;

  const { snippet = {}, statistics = {} } = videoDetail ?? {};
  const { title, channelId, channelTitle } = snippet;

  return (
    <Box component="main" sx={{ minHeight: "95vh", p: { xs: 0, md: 2 } }}>
      {error && <Alert severity="warning" sx={{ m: 2 }}>{error}</Alert>}
      <Stack direction={{ xs: "column", lg: "row" }} gap={{ xs: 2, md: 3 }}>
        <Box flex={1} minWidth={0}>
          <Box
            sx={{
              backgroundColor: "#111923",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: { xs: 0, md: 3 },
              overflow: "hidden",
            }}
          >
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Box sx={{ p: { xs: 2, md: 3 } }}>
              <Typography color="#fff" variant="h5" fontWeight={900} lineHeight={1.35}>
                {title}
              </Typography>
              <Stack
                direction={{ xs: "column", sm: "row" }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", sm: "center" }}
                gap={1.5}
                mt={2}
              >
                <Link href={channelId ? `/channel/${channelId}` : "/"}>
                  <Stack direction="row" alignItems="center" gap={0.75}>
                    <Typography variant="subtitle1" color="#fff" fontWeight={800}>
                      {channelTitle}
                    </Typography>
                    <CheckCircleIcon sx={{ fontSize: 15, color: "#66FCF1" }} />
                  </Stack>
                </Link>
                <Stack direction="row" gap={2} alignItems="center">
                  <Typography variant="body2" sx={{ color: "#8F9AA7", fontWeight: 700 }}>
                    {formatCount(statistics.viewCount)} views
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#8F9AA7", fontWeight: 700 }}>
                    {formatCount(statistics.likeCount)} likes
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>
        </Box>
        <Box sx={{ px: { xs: 2, md: 0 }, pb: 3, width: { lg: 360 } }}>
          <Typography variant="h6" color="white" fontWeight={900} mb={2}>
            Related videos
          </Typography>
          <Videos videos={videos} direction="column" />
        </Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
