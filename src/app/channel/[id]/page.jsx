import { ChannelDetail } from "../../../components";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const data = await fetchFromAPI(`channels?part=snippet,statistics&id=${id}`);
    const channel = data?.items?.[0];
    const title = channel?.snippet?.title || "Channel";
    const description = channel?.snippet?.description || `Watch ${title} videos on MMTube.`;
    const image = channel?.snippet?.thumbnails?.high?.url;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        url: `/channel/${id}`,
        images: image ? [{ url: image, alt: title }] : undefined,
      },
    };
  } catch {
    return {
      title: "Channel",
      description: "Watch channel videos and tutorials on MMTube.",
    };
  }
}

const ChannelPage = async ({ params }) => {
  const { id } = await params;
  let initialChannelDetail = null;
  let initialVideos = [];

  try {
    const [channelData, videosData] = await Promise.all([
      fetchFromAPI(`channels?part=snippet,statistics&id=${id}`),
      fetchFromAPI(`search?channelId=${id}&part=snippet%2Cid&order=date`),
    ]);

    initialChannelDetail = channelData?.items?.[0] ?? null;
    initialVideos = videosData?.items ?? [];
  } catch {
    initialChannelDetail = null;
    initialVideos = [];
  }

  return <ChannelDetail id={id} initialChannelDetail={initialChannelDetail} initialVideos={initialVideos} />;
};

export default ChannelPage;
