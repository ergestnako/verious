module.exports = {
  plugins: [
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "The Narrow Sea",
        short_name: "The Narrow Sea",
        start_url: "/",
        background_color: "#FFFFFF",
        theme_color: "#000000",
        display: "minimal-ui",
        icon: "static/img/favicon-32x32.png"
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`
  ]
};
