import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import MdxPage from "@/app/[locale]/(markdown-pages)/components/mdx-page";

export default async function CamaraPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <MdxPage folder="camara" locale={locale} />;
}
