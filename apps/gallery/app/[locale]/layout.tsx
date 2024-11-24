import React from "react";
import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { locales } from "@/i18n/routing";
import Footer from "./components/footer";
import Header from "./components/header";

export const generateMetadata = async (props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> => {
  const params = await props.params;

  const { locale } = params;

  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    authors: { name: t("author") },
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
      <body
        className={clsx(
          GeistSans.className,
          "app-background",
          "text-slate-900 dark:text-slate-300",
          "grid min-h-screen grid-rows-[auto_1fr_auto]",
        )}
      >
        <Header />
        {children}
        <Footer locale={locale} />
      </body>
    </html>
  );
}
