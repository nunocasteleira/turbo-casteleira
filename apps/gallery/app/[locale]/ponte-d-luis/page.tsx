import React from "react";
import { promises as fs } from "fs";
import { unstable_setRequestLocale } from "next-intl/server";
import { MDXRemote } from "next-mdx-remote/rsc";
import Photo from "@/app/[locale]/components/photo";

const components = { Photo };

export default async function MdxPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const file = await fs.readFile(
    process.cwd() + `/app/[locale]/ponte-d-luis/text/${locale}.mdx`,
    "utf8",
  );

  return <MDXRemote source={file} components={components} />;
}
