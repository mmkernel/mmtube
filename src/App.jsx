import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box, CssBaseline } from '@mui/material';
import { Navbar, Feed, VideoDetail, ChannelDetail, SearchFeed } from './components';

const App = () => (
  <BrowserRouter>
    <CssBaseline />
    <Box sx={{ minHeight: '100vh', backgroundColor: '#0B0C10' }}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="video/:id" element={<VideoDetail />} />
        <Route path="channel/:id" element={<ChannelDetail />} />
        <Route path="search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
