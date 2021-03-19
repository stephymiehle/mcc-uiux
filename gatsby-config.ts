/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable global-require */
import { GatsbyConfig } from 'gatsby';
import {
  siteMetadata,
  manifestOptions,
  googleAnalytics,
  pathPrefix,
  instagramAccessToken,
} from './config/SiteConfig';

const remarkPlugins = [
  {
    resolve: `gatsby-remark-embedder`,
    options: {
      services: {
        Instagram: {
          accessToken: instagramAccessToken,
        },
      },
    },
  },
  {
    resolve: 'gatsby-remark-autolink-headers',
    options: {
      icon:
        '<svg xmlns="http://www.w3.org/2000/svg" class="header-jump-link transform translate-y-1 ml-1 opacity-0 group-hover:opacity-100 transition-opacity" viewBox="0 0 491.44 491.44" width="1em" height="1em"><path d="M352.273 130.042c6.389 17.893 10.172 36.918 11.035 56.655 44.408 16.591 76.168 59.313 76.168 109.429 0 64.473-52.438 116.913-116.902 116.913-64.465 0-116.92-52.44-116.92-116.913 0-41.284 21.572-77.549 53.959-98.362.029-.823.188-1.622.188-2.452 0-18.004-5.441-34.835-14.643-49.103-54.242 28.129-91.465 84.712-91.465 149.917 0 93.111 75.771 168.873 168.881 168.873 93.113 0 168.865-75.762 168.865-168.873.001-82.961-60.203-151.992-139.166-166.084z" fill="currentColor"/><path d="M51.959 195.312c0-64.472 52.459-116.911 116.904-116.911 5.063 0 9.996.432 14.896 1.054 57.441 7.354 102.022 56.447 102.022 115.858 0 61.102-44.149 92.049-53.891 98.316-.014.854-.256 1.645-.256 2.498 0 18.117 5.461 34.916 14.643 49.103 17.887-9.277 44.447-27.439 63.363-56.927 18.359-28.62 28.104-59.617 28.104-92.991 0-85.828-64.434-156.761-147.422-167.355-7.041-.902-14.178-1.517-21.459-1.517C75.754 26.44 0 102.202 0 195.312c0 82.979 60.215 152.018 139.209 166.095-6.387-17.846-10.17-36.848-11.047-56.641-44.426-16.59-76.203-59.322-76.203-109.454z" fill="currentColor" class="opacity-50" /></svg>',
      isIconAfterHeader: true,
    },
  },
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 960,
      withWebp: true,
      linkImagesToOriginal: false,
    },
  },
  'gatsby-remark-external-links',
  'gatsby-remark-gifs',
];

const config: GatsbyConfig = {
  siteMetadata,
  pathPrefix,
  plugins: [
    {
      resolve: 'gatsby-plugin-typescript',
    },
    /* For embeds */
    'gatsby-plugin-instagram-embed',
    'gatsby-plugin-twitter',
    /* end for embeds */
    '@dream-bit-de/gatsby-plugin-better-page-tree',
    {
      resolve: 'gatsby-plugin-typegen',
      options: {
        outputPath: 'src/types/gatsby-types.d.ts',
        emitSchema: {
          'src/__generated__/gatsby-introspection.json': true,
          'src/__generated__/gatsby-schema.graphql': true,
        },
        emitPluginDocuments: {
          'src/__generated__/gatsby-plugin-documents.graphql': true,
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/assets/images/`,
        name: 'images',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'topics',
        path: `${__dirname}/src/topics`,
      },
    },
    {
      resolve: 'gatsby-transformer-yaml',
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'topics',
        path: `${__dirname}/src/config`,
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: remarkPlugins,
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: manifestOptions,
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: googleAnalytics,
    },
    {
      resolve: 'gatsby-plugin-netlify',
      options: {
        mergeSecurityHeaders: true,
        mergeLinkHeaders: true,
        mergeCachingHeaders: true,
      },
    },
    'gatsby-plugin-catch-links',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        postCssPlugins: [require('tailwindcss')()],
      },
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-sitemap',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-draft',
      options: {
        nodeType: 'Mdx',
      },
    },
  ],
};

export default config;
