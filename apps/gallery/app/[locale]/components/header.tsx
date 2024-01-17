import React from "react";
import { getTranslations } from "next-intl/server";

async function Header() {
  const t = await getTranslations("Header");

  return (
    <header>
      <div>
        <a className="sr-only">{t("skipToContent")}</a>
        <div>
          <h1>Nuno João Casteleira</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
