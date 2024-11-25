import React from "react";
import * as runtime from "react/jsx-runtime";
import { compile, run } from "@mdx-js/mdx";

const Mdx = async ({ source }: { source: string }) => {
  const code = String(await compile(source, { outputFormat: "function-body" }));

  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return <MDXContent />;
};

export { Mdx };
