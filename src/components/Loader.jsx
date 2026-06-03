import { Box, CircularProgress, Stack } from '@mui/material';

const Loader = ({ compact = false }) => (
  <Box minHeight={compact ? 240 : '95vh'}>
    <Stack direction='row' justifyContent='center' alignItems='center' height={compact ? 240 : '80vh'}>
      <CircularProgress sx={{ color: '#66FCF1' }} />
    </Stack>
  </Box>
);

export default Loader;
