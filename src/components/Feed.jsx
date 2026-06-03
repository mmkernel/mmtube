"use client";

import { useEffect, useState } from "react";
import { Alert, Box, Stack, Typography } from "@mui/material";

import { Videos, Sidebar } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("Frontend Tutorial");
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    let ignore = false;

    setVideos(null);
    setError("");

    fetchFromAPI(`search?part=snippet&q=${encodeURIComponent(selectedCategory)}`)
      .then((data) => {
        if (!ignore) {
          setVideos(data?.items ?? []);
        }
      })
      .catch(() => {
        if (!ignore) {
          setVideos([]);
          setError("Could not load videos right now. Check your API key or try again later.");
        }
      });

    return () => {
      ignore = true;
    };
  }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { xs: "column", md: "row" }, minHeight: "calc(100vh - 77px)" }}>
      <Box
        sx={{
          borderBottom: { xs: "1px solid rgba(255,255,255,0.08)", md: "none" },
          borderRight: { md: "1px solid rgba(255,255,255,0.08)" },
          display: { xs: "none", md: "block" },
          px: { xs: 2, md: 2.5 },
          py: 2,
        }}
      >
        <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

        <Typography className="copyright" variant="body2" sx={{ mt: 3, color: "#8F9AA7", fontSize: 12 }}>
          Copyright 2026 <a target="_blank" rel="noreferrer" href="https://mmkernel.com">MMkernel.com</a>
        </Typography>
      </Box>

      <Box component="main" sx={{ flex: 1, overflowY: "auto", p: { xs: 2, md: 3 } }}>
        <Stack direction={{ xs: "column", sm: "row" }} justifyContent="space-between" gap={1.5} mb={3}>
          <Box>
            <Typography variant="overline" sx={{ color: "#66FCF1", fontWeight: 800 }}>
              Explore
            </Typography>
            <Typography variant="h4" fontWeight={900} sx={{ color: "white" }}>
              {selectedCategory}
            </Typography>
          </Box>
          <Typography sx={{ color: "#8F9AA7", maxWidth: 420 }}>
            Fresh tutorials and videos pulled from YouTube for the selected topic.
          </Typography>
        </Stack>

        {error && <Alert severity="warning" sx={{ mb: 2 }}>{error}</Alert>}
        <Videos videos={videos} />
      </Box>
    </Stack>
  );
};

export default Feed;
