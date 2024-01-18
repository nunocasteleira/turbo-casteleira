import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import Projects from "./components/projects";

export default function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  const t = useTranslations("Index");
  return (
    <main className="page-size min-h-full w-full px-4 sm:px-6">
      <h2 className="sr-only">{t("title")}</h2>
      <Projects />
    </main>
  );
}
