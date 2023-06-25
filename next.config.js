/** @type {import('nextra').NextraConfig} */
const nextraConfig = {
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.tsx",
};

const withNextra = require("nextra")(nextraConfig);

module.exports = withNextra({ reactStrictMode: true });
