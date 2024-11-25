import React, { use } from "react";
import pick from "lodash.pick";
import { NextIntlClientProvider, useMessages } from "next-intl";
import { setRequestLocale } from "next-intl/server";

export default function MdxLayout(props: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const params = use(props.params);

  const { locale } = params;

  const { children } = props;

  setRequestLocale(locale);
  const messages = useMessages();

  return (
    <NextIntlClientProvider messages={pick(messages, "Captions")}>
      <main className="page-size min-h-full w-full px-4 sm:px-6">
        <div className="prose prose-slate dark:prose-invert prose-img:m-0 prose-figure:m-0 h-full max-w-none [&>:not(img,figure,.footer-nav)]:max-w-prose">
          {children}
        </div>
      </main>
    </NextIntlClientProvider>
  );
}
