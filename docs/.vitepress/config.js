import { withMermaid } from "vitepress-plugin-mermaid";
import { SearchPlugin } from "vitepress-plugin-search";

export default withMermaid({
  title: "Vitepress",
  description: "Just playing around.",
  mermaid: {
    externalDiagrams: [await import("@mermaid-js/mermaid-zenuml")],
    theme: "forest",
    gantt: {
      titleTopMargin: 25,
      barHeight: 10,
      barGap: 40,
      topPadding: 75,
      sidePadding: 75,
    }
  },
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
  },
  vite: {
    plugins: [SearchPlugin()]
  }
});
