import { Link } from 'react-router-dom';
import { Avatar, Box, CardContent, Stack, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

import { demoProfilePicture } from '../utils/constants';

const ChannelCard = ({ channelDetail, marginTop }) => {
  const channelId = channelDetail?.id?.channelId || channelDetail?.id;
  const title = channelDetail?.snippet?.title || 'Channel';
  const avatar = channelDetail?.snippet?.thumbnails?.high?.url || demoProfilePicture;
  const subscribers = channelDetail?.statistics?.subscriberCount;

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
        marginTop,
        width: '100%',
      }}
    >
      <Link to={channelId ? `/channel/${channelId}` : '/'}>
        <CardContent
          sx={{
            alignItems: 'center',
            backgroundColor: 'rgba(17, 25, 35, 0.86)',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 3,
            boxShadow: '0 22px 60px rgba(0,0,0,0.28)',
            color: '#fff',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 286,
            p: 3,
            textAlign: 'center',
            width: { xs: 300, sm: 330 },
          }}
        >
          <Avatar
            src={avatar}
            alt={title}
            sx={{
              border: '3px solid rgba(102,252,241,0.55)',
              height: 156,
              mb: 2,
              width: 156,
            }}
          />
          <Stack direction="row" alignItems="center" justifyContent="center" gap={0.75}>
            <Typography variant="h6" fontWeight={900}>
              {title}
            </Typography>
            <CheckCircleIcon sx={{ fontSize: 16, color: '#66FCF1' }} />
          </Stack>
          {subscribers && (
            <Typography sx={{ color: '#8F9AA7', fontSize: 14, fontWeight: 700, mt: 0.5 }}>
              {Number(subscribers).toLocaleString('en-US')} subscribers
            </Typography>
          )}
        </CardContent>
      </Link>
    </Box>
  );
};

export default ChannelCard;
