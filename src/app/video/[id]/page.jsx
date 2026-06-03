import { VideoDetail } from "../../../components";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";

export async function generateMetadata({ params }) {
  const { id } = await params;

  try {
    const data = await fetchFromAPI(`videos?part=snippet,statistics&id=${id}`);
    const video = data?.items?.[0];
    const title = video?.snippet?.title || "Video";
    const description = video?.snippet?.description || `Watch ${title} on MMTube.`;
    const image = video?.snippet?.thumbnails?.high?.url;

    return {
      title,
      description,
      openGraph: {
        title,
        description,
        type: "video.other",
        url: `/video/${id}`,
        images: image ? [{ url: image, alt: title }] : undefined,
      },
    };
  } catch {
    return {
      title: "Video",
      description: "Watch developer videos and tutorials on MMTube.",
    };
  }
}

const VideoPage = async ({ params }) => {
  const { id } = await params;
  let initialVideoDetail = null;
  let initialVideos = [];

  try {
    const [detailData, relatedData] = await Promise.all([
      fetchFromAPI(`videos?part=snippet,statistics&id=${id}`),
      fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`),
    ]);

    initialVideoDetail = detailData?.items?.[0] ?? null;
    initialVideos = relatedData?.items ?? [];
  } catch {
    initialVideoDetail = null;
    initialVideos = [];
  }

  return <VideoDetail id={id} initialVideoDetail={initialVideoDetail} initialVideos={initialVideos} />;
};

export default VideoPage;
