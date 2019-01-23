const autoprefixer = require('autoprefixer')

module.exports = {
  siteMetadata: {
    title: 'Waleed-BS',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8,
      }
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Waleed-BS",
        short_name: "Waleed-BS",
        start_url: "/",
        background_color: "#262626",
        theme_color: "#262626",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/images/icons/icon.png", // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline', 
    'gatsby-plugin-netlify', 
  ],
}
