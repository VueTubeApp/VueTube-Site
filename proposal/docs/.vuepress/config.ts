import { ThemeConfig } from "vuepress-theme-vt";
import { defineConfig4CustomTheme } from "vuepress/config";

export = defineConfig4CustomTheme<ThemeConfig>((ctx) => ({
  theme: "vt",
  title: "VueTube",
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
        {
          title: "Reference",
          collapsable: false,
          children: [
            [
              "https://vuepress.vuejs.org/theme/default-theme-config.html",
              "Default Theme Config",
            ],
          ],
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
