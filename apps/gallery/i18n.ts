import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";
import {
  enSocialTranslations,
  ptSocialTranslations,
} from "../../packages/socials";
import { locales } from "./locale-config";

// @ts-ignore
export default getRequestConfig(async ({ locale }) => {
  // Validates that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: {
      ...(
        await (locale === "en"
          ? // When using Turbopack, this will enable HMR for `en`
            import("./messages/en.json")
          : import(`./messages/${locale}.json`))
      ).default,
      ...{
        Links: locale === "en" ? enSocialTranslations : ptSocialTranslations,
      },
    },
  };
});
