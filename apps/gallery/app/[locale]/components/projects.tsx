import React from "react";
import { getTranslations } from "next-intl/server";
import { Project as ProjectType, projects } from "@/app/[locale]/projects";
import Project from "./project";

export default async function Projects() {
  const t = await getTranslations("Projects");
  function translateAlt(project: ProjectType): string {
    return project.alt
      ? t("coverAlt", {
          projectName: project.title,
          alt: project.alt,
        })
      : t("cover", { projectName: project.title });
  }

  const translatedProjects = projects.map(
    (project): ProjectType => ({
      ...project,
      alt: translateAlt(project),
    }),
  );

  return (
    <section className="py-8">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        {translatedProjects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </ul>
    </section>
  );
}
