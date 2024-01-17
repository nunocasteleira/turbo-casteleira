import React from "react";
import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import type { Metadata } from "next";
import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/locale-config";
import Header from "./components/header";

export const generateMetadata = async ({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> => {
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: "Nuno João Casteleira",
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
          "bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-300",
        )}
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
