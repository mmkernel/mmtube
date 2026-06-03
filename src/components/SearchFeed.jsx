import { useEffect, useState } from "react";
import { Alert, Box, Typography } from "@mui/material";
import { useParams } from "react-router-dom";

import { Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const SearchFeed = () => {
  const [videos, setVideos] = useState(null);
  const [error, setError] = useState("");
  const { searchTerm = "" } = useParams();
  const decodedSearchTerm = decodeURIComponent(searchTerm);

  useEffect(() => {
    let ignore = false;

    setVideos(null);
    setError("");

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
  }, [decodedSearchTerm]);

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
