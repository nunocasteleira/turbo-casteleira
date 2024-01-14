import React from "react";
import { GeistSans } from "geist/font/sans";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const size = {
  width: 180,
  height: 180,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element

      <div
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "20%",
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          backgroundColor: "#0f172a",
          position: "relative",
        }}
      >
        <div
          style={{
            fontFamily: GeistSans.className,
            fontSize: 100,
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#e5e7eb",
          }}
        >
          NC
        </div>
      </div>
    ),
    // ImageResponse options
    {
      // For convenience, we can re-use the exported icons size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  );
}
