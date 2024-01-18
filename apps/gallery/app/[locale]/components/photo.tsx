"use client";

import clsx from "clsx";
import Image from "next/image";
import { useTranslations } from "next-intl";
import cloudinaryLoader from "@/app/cloudinary-loader";

type Props = {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
};

const Photo = ({ alt, className, src, priority }: Props) => {
  const t = useTranslations("Captions");
  const caption = t(src as any);

  return (
    <figure>
      <div
        className={clsx("relative block overflow-hidden rounded-lg", className)}
      >
        <Image
          alt={alt ?? caption}
          fill
          loader={cloudinaryLoader}
          sizes="80vw"
          src={src}
          className={clsx("pointer-events-none h-full w-full object-fill")}
          priority={priority}
        />
      </div>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
};

export default Photo;
