import { ImageLoader } from "next/image";

const cloudinaryLoader: ImageLoader = ({ src, width, quality }) => {
  const params = ["f_auto", "c_limit", `w_${width}`, `q_${quality || "auto"}`];
  return `https://res.cloudinary.com/do42dewap/image/upload/${params.join(",")}${src}`;
};

export default cloudinaryLoader;
