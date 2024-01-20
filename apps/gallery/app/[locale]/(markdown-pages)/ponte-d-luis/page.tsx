import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import MdxPage from "@/app/[locale]/(markdown-pages)/components/mdx-page";
import Photo from "@/app/[locale]/components/photo";

const components = { Photo };

export default async function PonteDLuisPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <MdxPage folder="ponte-d-luis" locale={locale} />;
}
