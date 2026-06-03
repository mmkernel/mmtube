import { Box, Stack, Typography } from "@mui/material";

import { ChannelCard, Loader, VideoCard } from "./";

const Videos = ({ videos, direction }) => {
  if (videos === null) return <Loader compact />;

  if (!videos?.length) {
    return (
      <Box sx={{ py: 8, textAlign: "center", width: "100%" }}>
        <Typography color="white" fontWeight={800} variant="h6">
          No videos found
        </Typography>
        <Typography color="#8F9AA7">Try a different category or search term.</Typography>
      </Box>
    );
  }

  return (
    <Stack
      direction={direction || "row"}
      flexWrap="wrap"
      justifyContent={{ xs: "center", sm: "flex-start" }}
      alignItems="stretch"
      gap={2.5}
    >
      {videos.map((item, idx) => (
        <Box key={item?.id?.videoId || item?.id?.channelId || idx}>
          {item?.id?.videoId && <VideoCard video={item} />}
          {item?.id?.channelId && <ChannelCard channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
