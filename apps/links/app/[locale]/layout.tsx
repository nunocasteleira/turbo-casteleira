import React from "react";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/routing";

export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: "Nuno João Casteleira",
    description: t("description"),
  };
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  const { children } = props;

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body className={GeistSans.className}>{children}</body>
    </html>
  );
}
