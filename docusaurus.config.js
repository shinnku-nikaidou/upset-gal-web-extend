// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'upset gal',
  tagline: 'Visual Novel Site, You only need one',
  favicon: 'img/favicon.ico',

  url: 'https://shinnku.com',
  baseUrl: '/extend/',

  organizationName: 'shinnku-nikaidou',
  projectName: 'upset-gal-web',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shinnku-nikaidou/upset-gal-web-extend',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/shinnku-nikaidou/upset-gal-web-extend',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/upsetgal-logo.png',
      navbar: {
        title: 'Upset gal',
        logo: {
          alt: 'My Site Logo',
          src: 'img/shinnku.jpg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'docsSidebar',
            position: 'left',
            label: 'Docs',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          {
            href: 'https://github.com/shinnku-nikaidou/upset-gal-web-extend',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: '文档',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Github',
                href: 'https://github.com/shinnku-nikaidou/upset-gal-web',
              },
              {
                label: 'QQ',
                href: 'https://qm.qq.com/q/EKWa8Vo9Dq',
              },
              {
                label: 'Telegram',
                href: 'https://t.me/+zSeDKU3Heis4ZWE1',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              }, {
                label: 'Docs',
                to: '/docs',
              }, {
                label: 'GitHub',
                href: 'https://github.com/shinnku-nikaidou/upset-gal-web',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Upset-gal blogs and docs, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
