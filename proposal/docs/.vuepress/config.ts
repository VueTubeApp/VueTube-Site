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
    nav: [{ text: "Guide", link: "/guide/" }],
    sidebar: {
      "/guide/": [
        {
          title: "Introduction",
          collapsable: false,
          children: ["/guide/", "/guide/getting-started"],
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
