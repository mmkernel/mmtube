import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

export const fetchFromAPI = async (url) => {
  if (typeof window !== 'undefined') {
    const { data } = await axios.get(`/api/youtube?endpoint=${encodeURIComponent(url)}`);

    return data;
  }

  const apiKey = process.env.RAPID_API_KEY;

  if (!apiKey) {
    throw new Error('Missing RAPID_API_KEY environment variable.');
  }

  const { data } = await axios.get(`${BASE_URL}/${url}`, {
    params: {
      maxResults: 50,
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    },
  });

  return data;
};
