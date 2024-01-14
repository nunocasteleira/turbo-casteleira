import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { promises as fs } from "fs";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import { links, SocialLink } from "@/app/links";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/text.mdx", "utf8");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 [&_*]:min-w-0">
      <div className="flex flex-col bg-slate-200 dark:bg-slate-800 text-slate-900 max-w-md rounded-lg overflow-hidden">
        <div className="flex-auto w-full h-full">
          <div className="aspect-[4/3] relative w-full h-full">
            <Image
              className="object-cover w-full h-full"
              fill
              src={"/me.jpg"}
              alt="Headshot of Nuno João Casteleira"
            />
          </div>
        </div>
        <div className="flex-auto w-full min-h-full py-8 px-8">
          <div className="markdown">
            {/* @ts-ignore */}
            <MDXRemote source={file} />
          </div>
          <div className="p-4" />
          <ul className="flex flex-row gap-6 justify-between">
            {links.map((link) => (
              <SocialLink link={link} key={link.alt} />
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}

function SocialLink({ link }: { link: SocialLink }) {
  return (
    <li className="rounded-full dark:text-slate-200">
      <div className={clsx("w-6 h-6", link.className)}>
        <FontAwesomeIcon icon={link.icon} />
      </div>
      <span className="sr-only">{link.alt}</span>
    </li>
  );
}
