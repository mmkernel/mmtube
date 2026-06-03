import { SearchFeed } from "../../../components";
import { fetchFromAPI } from "../../../utils/fetchFromAPI";

const decodeParam = (value) => decodeURIComponent(value || "");

export async function generateMetadata({ params }) {
  const { searchTerm } = await params;
  const decodedSearchTerm = decodeParam(searchTerm);

  return {
    title: `${decodedSearchTerm} Videos`,
    description: `Watch curated ${decodedSearchTerm} videos and tutorials on MMTube.`,
    openGraph: {
      title: `${decodedSearchTerm} Videos | MMTube`,
      description: `Watch curated ${decodedSearchTerm} videos and tutorials on MMTube.`,
      url: `/search/${encodeURIComponent(decodedSearchTerm)}`,
    },
  };
}

const SearchPage = async ({ params }) => {
  const { searchTerm } = await params;
  const decodedSearchTerm = decodeParam(searchTerm);
  let initialVideos = [];

  try {
    const data = await fetchFromAPI(`search?part=snippet&q=${encodeURIComponent(decodedSearchTerm)}`);
    initialVideos = data?.items ?? [];
  } catch {
    initialVideos = [];
  }

  return <SearchFeed searchTerm={decodedSearchTerm} initialVideos={initialVideos} />;
};

export default SearchPage;
