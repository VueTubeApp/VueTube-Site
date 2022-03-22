import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export = defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "VueTube",
  head: [["link", { rel: "icon", href: "/logo.svg" }]],
  themeConfig: {
    enableDarkMode: true,
    repo: "https://github.com/Frontesque/VueTube",
    logo: "/logo.svg",
    nav: [{ text: "Download", link: "/download/" }],
    sidebar: {
      "/download/": [
        {
          title: "Download",
          collapsable: false,
          children: ["/download/", "/download/nightly-install", "/download/unstable-install"],
        },
      ],
    },
    codeSwitcher: {
      groups: {
        default: { ts: "TypeScript", js: "JavaScript" },
        "plugin-usage": { tuple: "Tuple", object: "Object" },
      },
    },
  },
}));
