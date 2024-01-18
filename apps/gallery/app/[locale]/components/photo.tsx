"use client";

import clsx from "clsx";
import Image from "next/image";
import cloudinaryLoader from "@/app/cloudinary-loader";

type Props = {
  alt: string;
  caption?: string;
  className?: string;
  priority?: boolean;
  src: string;
};

const Photo = ({ alt, className, caption, src, priority }: Props) => {
  return (
    <figure>
      <div
        className={clsx(
          "relative block h-full w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100",
          className,
        )}
      >
        <Image
          alt={alt}
          fill
          loader={cloudinaryLoader}
          sizes="80vw"
          src={src}
          className={clsx("pointer-events-none h-full w-full object-fill")}
          priority={priority}
        />
      </div>
    </figure>
  );
};

export default Photo;
