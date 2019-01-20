const autoprefixer = require('autoprefixer');

module.exports = {
  siteMetadata: {
    title: 'Web Portfolio',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    // 'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-postcss-sass`,
      options: {
        postCssPlugins: [autoprefixer()],
        precision: 8, // SASS default: 5
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: "Waleed-bs",
        short_name: "Waleed-bs",
        start_url: "/",
        background_color: "#262626",
        theme_color: "#262626",
        // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
        // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
        display: "standalone",
        icon: "src/assets/images/icons/icon.png", // This path is relative to the root of the site.
        icons: [
          {
            src: "/icons/icon-48x48.png",
            sizes: "48x48",
            type: "image/png",
          },
          {
            src: "/icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "/icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "/icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "/icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icons/icon-256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ]
      },
    },
    'gatsby-plugin-offline',  
  ],
}
