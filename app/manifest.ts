import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MD. SHARDUL RAHMAN TURJO - Portfolio",
    short_name: "Turjo Portfolio",
    description:
      "Full-Stack Developer Portfolio - Software Engineering Student",
    start_url: "/",
    display: "standalone",
    background_color: "#08090d",
    theme_color: "#ef4444",
    icons: [
      {
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
