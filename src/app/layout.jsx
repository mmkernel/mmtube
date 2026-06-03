import { CssBaseline } from "@mui/material";

import Providers from "./providers";
import { Navbar } from "../components";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://mmtube.netlify.app"),
  title: {
    default: "MMTube - Developer Videos and Tutorials",
    template: "%s | MMTube",
  },
  description:
    "Explore curated programming, cloud, data, AI, cybersecurity, and career videos from YouTube.",
  openGraph: {
    title: "MMTube - Developer Videos and Tutorials",
    description:
      "Explore curated programming, cloud, data, AI, cybersecurity, and career videos from YouTube.",
    type: "website",
    url: "/",
    siteName: "MMTube",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "MMTube",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "MMTube - Developer Videos and Tutorials",
    description:
      "Explore curated programming, cloud, data, AI, cybersecurity, and career videos from YouTube.",
    images: ["/logo.png"],
  },
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <body>
      <Providers>
        <CssBaseline />
        <Navbar />
        {children}
      </Providers>
    </body>
  </html>
);

export default RootLayout;
