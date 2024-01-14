import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { promises as fs } from "fs";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import { links, SocialLink } from "@/app/links";

export default async function Home() {
  const file = await fs.readFile(process.cwd() + "/app/text.mdx", "utf8");

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8 md:p-20 lg:p-24 [&_*]:min-w-0">
      <div className="flex max-w-md flex-col overflow-hidden rounded-lg bg-slate-200 text-slate-900 dark:bg-slate-800">
        <div className="h-full w-full flex-auto">
          <div className="relative aspect-[4/3] h-full w-full">
            <Image
              className="h-full w-full object-cover"
              fill
              src={"/me.jpg"}
              alt="Headshot of Nuno João Casteleira"
            />
          </div>
        </div>
        <div className="min-h-full w-full flex-auto px-8 py-8">
          <div className="markdown">
            {/* @ts-ignore */}
            <MDXRemote source={file} />
          </div>
          <div className="p-4" />
          <ul className="flex flex-row justify-between gap-6">
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
  function Inside({ link }: { link: SocialLink }) {
    return (
      <>
        <div className={clsx("h-6 w-6", link.className)}>
          <FontAwesomeIcon icon={link.icon} />
        </div>
        <span className="sr-only">{link.alt}</span>
      </>
    );
  }

  return (
    <li className="rounded-full dark:text-slate-200">
      {link.href ? (
        <Link href={link.href}>
          <Inside link={link} />
        </Link>
      ) : (
        <Inside link={link} />
      )}
    </li>
  );
}
