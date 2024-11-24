import { createNavigation } from "next-intl/navigation";
import { defineRouting } from "next-intl/routing";

export const locales = ["en", "pt"] as const;
export const defaultLocale = "en";

export const localePrefixMode = "always"; // Default

export const routing = defineRouting({
  locales,
  defaultLocale,
  localePrefix: {
    mode: localePrefixMode,
  },
});

export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
