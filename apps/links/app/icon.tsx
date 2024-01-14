import { GeistSans } from "geist/font/sans";
import { ImageResponse } from "next/og";

// Route segment config
export const runtime = "nodejs";

// Image metadata
export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

// Image generation
export default function Icon() {
  return new ImageResponse(
    (
      // ImageResponse JSX element
      <div
        // className={clsx(
        //   GeistSans.className,
        //   "text-2xl bg-slate-900 w-full h-full flex items-center justify-center text-slate-200 rounded-full"
        // )}
        style={{
          fontFamily: GeistSans.className,
          fontSize: 18,
          background: "#0f172a",
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#e5e7eb",
          borderRadius: 9999,
        }}
      >
        NC
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
