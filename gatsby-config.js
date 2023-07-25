/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Epsan Crafts`,
    author: `OpenArchitex`,
    description: `Epsan Crafts - Handmade Crafts`,
    siteUrl: `https://www.epsancrafts.lk`,
  },
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "portfolio-images",
        path: `${__dirname}/src/images/portfolio-images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Epsan Crafts",
        short_name: "Epsan Crafts",
        start_url: "/",
        icon: "src/images/favicon.svg", // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `Roboto`,
            file: `https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;500&display=swap`,
          },
          {
            name: `Dancing Script`,
            file: `https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400;700&display=swap`,
          },
        ],
      },
    },
  ],
};
