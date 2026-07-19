const fallbackThumbnailUrl = "https://i.ibb.co/G2L2Gwp/API-Course.png";

export const getThumbnailUrl = (thumbnails, fallback = fallbackThumbnailUrl) => {
  const thumbnail =
    thumbnails?.maxres ||
    thumbnails?.standard ||
    thumbnails?.high ||
    thumbnails?.medium ||
    thumbnails?.default;

  if (typeof thumbnail === "string") return thumbnail;
  if (typeof thumbnail?.url === "string") return thumbnail.url;

  return fallback;
};
