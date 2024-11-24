import clsx from "clsx";
import { GeistSans } from "geist/font/sans";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function NotFound() {
  const t = useTranslations("NotFoundPage");

  return (
    <div
      className={clsx(
        GeistSans.className,
        "app-background",
        "text-slate-900 dark:text-slate-300",
        "grid min-h-screen grid-rows-[auto_1fr_auto]",
      )}
    >
      <div className="page-size">
        <div className="flex flex-col-reverse">
          <h2 className="py-4 text-4xl">{t("title")}</h2>
          <h3 className="py-4 text-9xl">404</h3>
        </div>
        <p className="py-2">{t("description")}</p>

        <Link
          href="/"
          className="shadow-xs inline-block rounded-md px-3 py-2 text-sm font-semibold ring-1 ring-inset ring-slate-300 hover:bg-slate-50"
        >
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
