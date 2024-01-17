import React from "react";
import clsx from "clsx";
import { Project } from "../projects";

function ProjectComponent({ project }: { project: Project }) {
  return (
    <li key={project.title} className="relative flex flex-col items-center">
      <div className="group block aspect-square w-full overflow-hidden rounded-lg bg-gray-100 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
        {/*<img*/}
        {/*  src={file.source}*/}
        {/*  alt=""*/}
        {/*  className="pointer-events-none object-cover group-hover:opacity-75"*/}
        {/*/>*/}
        <div
          className={clsx(
            "pointer-events-none group-hover:opacity-75",
            "h-full w-full",
            project.className,
          )}
        />
        <button type="button" className="absolute inset-0 focus:outline-none">
          <span className="sr-only">View details for {project.title}</span>
        </button>
      </div>
      <h3 className="pointer-events-none mt-2 block truncate text-xl font-medium text-gray-900">
        {project.title}
      </h3>
      {/*<p className="pointer-events-none block text-sm font-medium text-gray-500">*/}
      {/*  {file.size}*/}
      {/*</p>*/}
    </li>
  );
}

export default ProjectComponent;
