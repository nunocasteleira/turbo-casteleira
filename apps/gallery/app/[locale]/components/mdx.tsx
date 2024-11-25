import React from "react";
import * as runtime from "react/jsx-runtime";
import { compile, run } from "@mdx-js/mdx";
import { MDXProvider } from "@mdx-js/react";
import Photo from "@/app/[locale]/(markdown-pages)/photo";

const Mdx = async ({
  source,
}: {
  source: string;
  components?: React.ComponentProps<typeof MDXProvider>["components"];
}) => {
  const code = String(await compile(source, { outputFormat: "function-body" }));

  const { default: MDXContent } = await run(code, {
    ...runtime,
    baseUrl: import.meta.url,
  });

  return <MDXContent components={{ Photo }} />;
};

export { Mdx };
