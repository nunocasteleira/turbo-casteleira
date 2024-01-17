import React from "react";
import { unstable_setRequestLocale } from "next-intl/server";
import { locales } from "@/locale-config";
import Header from "./components/header";

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
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
