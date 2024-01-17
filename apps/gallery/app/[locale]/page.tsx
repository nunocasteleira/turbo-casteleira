import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");
  return (
    <main className="min-h-full">
      <h1>{t("title")}</h1>
    </main>
  );
}
