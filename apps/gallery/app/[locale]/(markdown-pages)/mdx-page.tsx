import React from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { promises as fs } from "fs";
import { Mdx } from "@/app/[locale]/components/mdx";
import { Project, projects } from "@/app/[locale]/projects";
import { Link } from "@/i18n/routing";
import Photo from "./photo";

const components = { Photo };

export default async function MdxPage({
  slug,
  locale,
}: {
  slug: string;
  locale: string;
}) {
  const file = await fs.readFile(
    process.cwd() + `/app/[locale]/(markdown-pages)/${slug}/text/${locale}.mdx`,
    "utf8",
  );

  return (
    <>
      <Mdx source={file} components={components} />
      <ProjectsFooter slug={slug} />
    </>
  );
}

const MIN_PROJECT_LENGTH = 0;
const DEFAULT_INCREMENT = 1;
function ProjectsFooter({ slug }: { slug: string }) {
  const currentProjectIndex = projects.findIndex(
    (project) => project.slug === slug,
  );
  const previousProject =
    currentProjectIndex > MIN_PROJECT_LENGTH
      ? projects.at(currentProjectIndex - DEFAULT_INCREMENT)
      : undefined;
  const nextProject =
    currentProjectIndex < projects.length
      ? projects.at(currentProjectIndex + DEFAULT_INCREMENT)
      : undefined;

  return (
    <div className="footer-nav grid w-full grid-cols-[auto_1fr_auto] items-center py-8 text-2xl">
      {previousProject ? (
        <ProjectLink
          project={previousProject}
          direction="previous"
          className="col-start-1"
        />
      ) : null}
      {nextProject ? (
        <ProjectLink
          project={nextProject}
          direction="next"
          className="col-start-3"
        />
      ) : null}
    </div>
  );
}

function ProjectLink({
  project,
  direction,
  className,
}: {
  project: Project;
  direction: "previous" | "next";
  className?: string;
}) {
  const iconClassName = "w-6 h-6";
  return (
    <div
      className={clsx(
        "flex flex-none flex-row items-center justify-center gap-2",
        className,
      )}
    >
      {direction === "previous" ? (
        <ChevronLeftIcon className={iconClassName} />
      ) : null}
      <Link href={project.slug} className="no-underline">
        {project.title}
      </Link>
      {direction === "next" ? (
        <ChevronRightIcon className={iconClassName} />
      ) : null}
    </div>
  );
}
