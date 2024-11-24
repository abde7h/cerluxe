import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.css$/,
      include: path.resolve(__dirname, "node_modules/owl.carousel"),
      use: [
        {
          loader: "style-loader",
        },
        {
          loader: "css-loader",
        },
      ],
    });

    return config;
  },
};

export default nextConfig;
