"use client";

import Link from "next/link";
import { Card, CardContent, CardMedia, Stack, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";

import { demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants";

const VideoCard = ({ video }) => {
  const videoId = video?.id?.videoId;
  const snippet = video?.snippet ?? {};
  const title = snippet?.title || demoVideoTitle;
  const channelTitle = snippet?.channelTitle || demoChannelTitle;

  return (
    <Card
      sx={{
        backgroundColor: "#111923",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 2,
        boxShadow: "0 18px 45px rgba(0,0,0,0.24)",
        height: "100%",
        overflow: "hidden",
        transition: "transform 180ms ease, border-color 180ms ease",
        width: { xs: "100%", sm: 330 },
        "&:hover": {
          borderColor: "rgba(102,252,241,0.38)",
          transform: "translateY(-3px)",
        },
      }}
    >
      <Link className="media-link" href={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <CardMedia
          image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
          alt={title}
          sx={{ aspectRatio: "16 / 9", height: "auto", width: "100%" }}
        />
        <PlayCircleFilledWhiteIcon className="play-badge" />
      </Link>

      <CardContent sx={{ minHeight: 128, p: 2 }}>
        <Link href={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography color="white" fontWeight={800} lineHeight={1.35} variant="subtitle1">
            {title.length > 78 ? `${title.slice(0, 78)}...` : title}
          </Typography>
        </Link>

        <Link href={snippet?.channelId ? `/channel/${snippet.channelId}` : demoChannelUrl}>
          <Stack direction="row" alignItems="center" gap={0.75} mt={1.5}>
            <Typography variant="body2" color="#8F9AA7" fontWeight={600}>
              {channelTitle}
            </Typography>
            <CheckCircleIcon sx={{ fontSize: 14, color: "#66FCF1" }} />
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
