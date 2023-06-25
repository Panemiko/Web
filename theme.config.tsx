/* eslint-disable react-hooks/rules-of-hooks */
import Image from "next/image";
import { type DocsThemeConfig, useConfig } from "nextra-theme-docs";

import logoAsset from "@/assets/logo.svg";

const configuration: DocsThemeConfig = {
  logo: <Image src={logoAsset} className="w-1/2" alt="Logo do Surredstone" />,
  project: {
    link: "https://github.com/Surredstone",
  },
  docsRepositoryBase: "https://github.com/Surredstone/Web/blob/main/pages",
  darkMode: true,
  useNextSeoProps() {
    return {
      titleTemplate: "%s – Surredstone",
    };
  },
  head: () => {
    const { frontMatter } = useConfig();

    return (
      <>
        <meta
          property="og:title"
          content={frontMatter.title || "Surredstone"}
        />
        <meta property="og:description" content={frontMatter.description} />
      </>
    );
  },
  footer: {
    text: "Surredstone 2023",
  },
};

export default configuration;
