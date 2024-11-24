import { use } from "react";
import { useTranslations } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Projects from "./components/projects";

export default function Home(props: { params: Promise<{ locale: string }> }) {
  const params = use(props.params);

  const { locale } = params;

  setRequestLocale(locale);

  const t = useTranslations("Index");
  return (
    <main className="page-size min-h-full w-full px-4 sm:px-6">
      <h2 className="sr-only">{t("title")}</h2>
      <Projects />
    </main>
  );
}
