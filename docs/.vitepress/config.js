import { withMermaid } from "vitepress-plugin-mermaid";

export default withMermaid({
  title: "Vitepress",
  description: "Just playing around.",
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
});
