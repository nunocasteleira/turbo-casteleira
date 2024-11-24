import React from "react";
import { setRequestLocale } from "next-intl/server";
import MdxPage from "@/app/[locale]/(markdown-pages)/mdx-page";

export default async function PonteDLuisPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);

  return <MdxPage slug="ponte-d-luis" locale={locale} />;
}
