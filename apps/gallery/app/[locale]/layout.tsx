import React from "react";
import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/locale-config";
import Footer from "./components/footer";
import Header from "./components/header";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
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
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

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
