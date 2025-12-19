/** @type {import('@docusaurus/types').Config} */
const organizationName = process.env.DOCUSAURUS_ORG || 't3chnicallyinclined';
const repoName = process.env.DOCUSAURUS_REPO || 'vidkosha-cortex-docs';
const siteUrl = process.env.DOCUSAURUS_URL || 'https://t3chnicallyinclined.github.io';
const baseUrl = process.env.DOCUSAURUS_BASE_URL || '/';
const repoUrl = process.env.DOCUSAURUS_REPO_URL || `https://github.com/${organizationName}/${repoName}`;

const config = {
  title: 'Vidkosha Cortex',
  tagline: 'Operator-first DRAG (Decentralized RAG) + knowledge fabric',

  url: siteUrl,
  baseUrl,

  organizationName,
  projectName: repoName,

  onBrokenLinks: 'warn',

  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

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
          routeBasePath: 'docs',
          sidebarPath: './sidebars.js',
          editUrl: `${repoUrl}/tree/main/`,
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          { from: '/docs/wal-first', to: '/docs/thinking-fabric-wal#wal-first-operator-checklist' },
          { from: '/docs/nats-operator-auth', to: '/docs/operator-kit#4-secure-the-fabric-nats-nkeys' },
          { from: '/docs/project-context', to: '/docs/vidkosha-cortex' },
          { from: '/docs/training-lane', to: '/docs/roadmap' },
          { from: '/docs/operator-marketplace', to: '/docs/payouts-accounting' },
        ],
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      colorMode: {
        defaultMode: 'dark',
        respectPrefersColorScheme: false,
      },
      navbar: {
        title: 'Vidkosha Cortex',
        items: [
          { to: '/docs/drag-tour', label: 'Docs', position: 'left' },
          {
            href: repoUrl,
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
              { label: 'Start here', to: '/docs/drag-tour' },
              { label: 'Vidkosha Cortex', to: '/docs/vidkosha-cortex' },
              { label: 'Operator kit', to: '/docs/operator-kit' },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Vidkosha Cortex`,
      },
      prism: {
        // Keep defaults (theme-classic already provides sensible Prism themes)
      },
    }),
};

module.exports = config;
