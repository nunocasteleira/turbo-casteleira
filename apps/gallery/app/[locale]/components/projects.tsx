import React from "react";
import { projects } from "@/app/[locale]/projects";
import Project from "./project";

export default function Projects() {
  return (
    <section className="py-8">
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 xl:gap-x-8"
      >
        {projects.map((project) => (
          <Project project={project} key={project.title} />
        ))}
      </ul>
    </section>
  );
}
