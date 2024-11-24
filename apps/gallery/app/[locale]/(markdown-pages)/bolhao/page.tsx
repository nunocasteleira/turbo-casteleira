import React from "react";
import { setRequestLocale } from "next-intl/server";
import MdxPage from "@/app/[locale]/(markdown-pages)/mdx-page";

export default async function BolhaoPage(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);

  return <MdxPage slug="bolhao" locale={locale} />;
}
