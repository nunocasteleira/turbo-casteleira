"use client";

import React from "react";
import { GlobeEuropeAfricaIcon } from "@heroicons/react/24/outline";
import { Link, locales, usePathname } from "@/i18n/routing";

export function LocaleLink({
  locale,
  label,
}: {
  locale: string;
  label: string;
}) {
  const otherLocale = locales.find((l) => l !== locale);
  const pathname = usePathname();

  return (
    <Link
      href={pathname}
      locale={otherLocale}
      className="flex items-center justify-end gap-2 text-sm leading-6"
    >
      {label}
      <span>
        <GlobeEuropeAfricaIcon className="h-6 w-6" aria-hidden="true" />
      </span>
    </Link>
  );
}
