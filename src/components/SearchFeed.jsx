"use client";

import { useEffect, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = ({ searchTerm, initialVideos = null }) => {
  const [videos, setVideos] = useState(initialVideos);
  const [error, setError] = useState("");
  const decodedSearchTerm = searchTerm;

  useEffect(() => {
    let ignore = false;

    setVideos(initialVideos);
    setError("");

    if (initialVideos !== null) {
      return () => {
        ignore = true;
      };
    }

    fetchFromAPI(`search?part=snippet&q=${encodeURIComponent(decodedSearchTerm)}`)
      .then((data) => {
        if (!ignore) {
          setVideos(data?.items ?? []);
        }
      })
      .catch(() => {
        if (!ignore) {
          setVideos([]);
          setError("Search failed. Check your API key or try another term.");
        }
      });

    return () => {
      ignore = true;
    };
  }, [decodedSearchTerm, initialVideos]);

  return (
    <Box component="main" sx={{ minHeight: "95vh", p: { xs: 2, md: 3 } }}>
      <Typography variant="overline" sx={{ color: "#66FCF1", fontWeight: 800 }}>
        Search results
      </Typography>
      <Typography variant="h4" fontWeight={900} color="white" mb={3}>
        {decodedSearchTerm}
      </Typography>
      {error && <Alert severity="warning" sx={{ mb: 2 }}>{error}</Alert>}
      <Videos videos={videos} />
    </Box>
  );
};

export default SearchFeed;
