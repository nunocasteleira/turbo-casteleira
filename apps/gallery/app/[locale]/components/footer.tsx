import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import clsx from "clsx";
import { getTranslations } from "next-intl/server";
import { SocialLink, socials } from "socials";
import { Link } from "@/navigation";

const navigation = {
  main: [{ name: "Links", href: "https://links.casteleira.xyz" }],
};

export default async function Footer() {
  const t = await getTranslations("Footer");
  const tMeta = await getTranslations("Metadata");

  return (
    <footer>
      <div className="page-size overflow-hidden py-20 sm:py-24">
        <nav className="flex justify-center space-x-12" aria-label="Footer">
          {navigation.main.map((item) => (
            <div key={item.name} className="pb-6">
              <a href={item.href} className="text-sm leading-6">
                {item.name}
              </a>
            </div>
          ))}
        </nav>
        <SocialLinks />
        <p className="mt-10 text-center text-xs leading-5 text-gray-500">
          &copy; {new Date().getUTCFullYear()} {tMeta("author")}.{" "}
          {t("allRightsReserved")}
        </p>
      </div>
    </footer>
  );
}

async function SocialLinks() {
  return (
    <div className="mt-10 flex justify-center space-x-10">
      {socials.map((link) => (
        <SocialLinkComponent link={link} key={link.social} />
      ))}
    </div>
  );
}

async function SocialLinkComponent({ link }: { link: SocialLink }) {
  // @ts-expect-error
  const t = await getTranslations("Links");
  const Comp = "href" in link ? Link : "div";

  return (
    <div className="rounded-full">
      <Comp
        href={link.href ?? ""}
        className={clsx("flex h-6 w-6", link.className)}
        aria-labelledby={`${link.social}-alt`}
      >
        <FontAwesomeIcon icon={link.icon} />
        <span className="sr-only" id={`${link.social}-alt`}>
          {/* @ts-expect-error */}
          {t(link.social)}
        </span>
      </Comp>
    </div>
  );
}
