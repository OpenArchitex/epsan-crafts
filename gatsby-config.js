/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Epsan Crafts`,
    author: `OpenArchitex`,
    description: `Epsan Crafts - Handmade Crafts`,
    siteUrl: `https://www.epsancrafts.lk`
  },
  plugins: ["gatsby-plugin-theme-ui", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  },
  {
    resolve: `gatsby-plugin-manifest`,
    options: {
      name: "Epsan Crafts",
      short_name: "Epsan Crafts",
      start_url: "/",
      icon: "src/images/favicon.svg", // This path is relative to the root of the site.
    },
  }]
};