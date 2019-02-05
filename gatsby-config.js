const proxy = require('http-proxy-middleware');

module.exports = {
  siteMetadata: {
    title: 'The Future of Retail',
    description: 'Welcome to the future of retail. Brick & mortar isn’t dying. It’s changing.',
    author: '@BWTechnologies',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'assets',
        path: `${__dirname}/src/assets`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'bw-retail',
        short_name: 'bw-retail',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'standalone',
        icon: 'src/assets/favicon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Poppins:400,700'],
        },
      },
    },
    'gatsby-plugin-styled-components',
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
  developMiddleware: (app) => {
    app.use(
      '/.netlify/functions/',
      proxy({
        target: 'http://localhost:9000',
        pathRewrite: {
          '/.netlify/functions/': '',
        },
      }),
    );
  },
};
