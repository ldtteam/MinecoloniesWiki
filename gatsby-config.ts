import { GatsbyConfig } from "gatsby"

const config: GatsbyConfig = {
  siteMetadata: {
    title: "MineColonies",
    siteUrl: "https://minecolonies.com/",
  },
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "GTM-KKZDTMP",
      },
    },
    `gatsby-plugin-emotion`,
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Minecolonies",
        short_name: "Mineco",
        start_url: "/",
        background_color: "#ffffff",
        icon: "src/images/icon.png",
        display: "standalone",
      },
    },
    {
      resolve: "gatsby-plugin-use-dark-mode",
      options: {
        classNameDark: "dark-mode",
        classNameLight: "light-mode",
        storageKey: "darkMode",
        minify: true,
      },
    },
    {
      resolve: "gatsby-transformer-remark",
      options: {
        footnotes: true,
        gfm: true,
        plugins: [],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "wiki_buildings",
        path: "./src/pages/wiki/buildings",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "wiki_workers",
        path: "./src/pages/wiki/workers",
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: "./src/pages",
      },
    },
    "gatsby-theme-material-ui",
  ],
}

export default config
