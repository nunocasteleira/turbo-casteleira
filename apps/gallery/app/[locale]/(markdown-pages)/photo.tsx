"use client";

import React from "react";
import clsx from "clsx";
import Image from "next/image";
import cloudinaryLoader from "@/app/cloudinary-loader";

type Props = {
  alt: string;
  className?: string;
  priority?: boolean;
  src: string;
  children?: React.ReactNode;
};

const Photo = ({ alt, className, children, src, priority }: Props) => {
  return (
    <figure>
      <div
        className={clsx("relative block overflow-hidden rounded-lg", className)}
      >
        <Image
          alt={(children as string) ?? alt}
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
