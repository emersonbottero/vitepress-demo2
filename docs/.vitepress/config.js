// import { withMermaid } from "vitepress-plugin-mermaid";
import { defineConfig } from "vitepress"

export default defineConfig({
  title: "Vitepress",
  description: "Just playing around.",
  // mermaid: {
  //   theme: "forest",
  //   gantt: {
  //     titleTopMargin: 25,
  //     barHeight: 10,
  //     barGap: 40,
  //     topPadding: 75,
  //     sidePadding: 75,
  //   }
  // },
  themeConfig: {
    siteTitle: false,
    sidebar: [
      {
        text: "Getting started",
        collapsible: true,
        collapsed: true,
        items: [{ text: "Introduction", link: "/" }],
      },
      {
        text: "Forms",
        collapsible: true,
        collapsed: true,
        items: [{ text: "Get forms", link: "/forms/" }],
      },
    ],
  }
});
