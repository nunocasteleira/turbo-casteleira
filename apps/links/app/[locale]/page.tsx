import React from "react";
import { faGlobeEurope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SocialLink as SocialLinkType, socials } from "socials";
import { Mdx } from "@/components/mdx";
import { locales } from "@/i18n/routing";

export default async function Home(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;

  const { locale } = params;

  setRequestLocale(locale);
  const file = await fs.readFile(
    process.cwd() + `/app/[locale]/text/${locale}.mdx`,
    "utf8",
  );

  return (
    <main className="**:min-w-0 flex min-h-screen flex-col items-center justify-between p-8">
      <div className="flex max-w-md flex-col overflow-hidden rounded-lg bg-slate-200 text-slate-900 shadow-xl dark:bg-slate-800">
        <div className="h-full w-full flex-auto">
          <div className="aspect-4/3 relative h-full w-full">
            <Image
              alt="Headshot of Nuno João Casteleira"
              className="h-full w-full object-cover"
              fill
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              src="/me.jpg"
            />
          </div>
        </div>
        <div className="min-h-full w-full flex-auto px-8 py-8">
          <div className="markdown">
            <Mdx source={file} />
          </div>
          <ul className="flex flex-row justify-between gap-6">
            {socials.map((link) => (
              <SocialLink link={link} key={link.social} />
            ))}
          </ul>
          <div className="p-4" />
          <LocaleLink locale={locale} />
        </div>
      </div>
    </main>
  );
}

async function SocialLink({ link }: { link: SocialLinkType }) {
  const t = await getTranslations("Links");
  const Comp = typeof "href" !== "undefined" ? Link : "div";

  return (
    <li className="rounded-full dark:text-slate-200">
      <Comp
        href={link.href ?? "/"}
        className={clsx("flex h-6 w-6", link.className)}
        aria-labelledby={`${link.social}-alt`}
      >
        <FontAwesomeIcon icon={link.icon} />
        <span className="sr-only" id={`${link.social}-alt`}>
          {t(link.social)}
        </span>
      </Comp>
    </li>
  );
}

async function LocaleLink({ locale }: { locale: string }) {
  const otherLocale = locales.find((l) => l !== locale);
  const t = await getTranslations("Index");

  return (
    <Link
      href="/"
      locale={otherLocale}
      className="flex items-center justify-end gap-2 dark:text-slate-200"
    >
      {t("translate")}
      <span className={clsx("flex h-4 w-4")}>
        <FontAwesomeIcon icon={faGlobeEurope} />
      </span>
    </Link>
  );
}
