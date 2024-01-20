import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import MdxPage from "@/app/[locale]/(markdown-pages)/components/mdx-page";

export default async function TelhadosPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <MdxPage folder="telhados" locale={locale} />;
}
