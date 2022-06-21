module.exports = {
  siteMetadata: {
    title: `Captivate Synth`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "G-VMSWCN1TN1",
      },
    },
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          // `limelight`,
          // `source sans pro\:300,400,400i,700`, // you can also specify font weights and styles
          // `Montserrat\:100,200,300,400`,
          `Raleway\:100,200,300,400`,
          // `Quicksand\:300,400`,
        ],
        display: "swap",
      },
    },
    "gatsby-plugin-robots-txt",
    // 'gatsby-plugin-webpack-bundle-analyser-v2',
  ],
}
