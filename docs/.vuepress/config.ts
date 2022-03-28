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
    nav: [{ text: "Download", link: "/install/" }],


    sidebar: {
      "/": [
        {
          title: "Install",
          collapsable: false,
          children: ["/install/", "/install/android-system-webview"],
        },
        {
          title: "Supported Devices",
          collapsable: false,
          children: [ "/support/android", "/support/ios"],
        },
        {
          title: "Devlopment",
          collapsable: false,
          children: [ "/contributing"],
        }
      ]
    },


    codeSwitcher: {
      groups: {
        default: { ts: "TypeScript", js: "JavaScript" },
        "plugin-usage": { tuple: "Tuple", object: "Object" },
      },
    },
  },
}));
