// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PyRAT',
    tagline: 'Reachability Analysis Toolbox for  dynamic systems in Python',
    url: 'https://your-docusaurus-test-site.com',
    baseUrl: '/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ASAG-ISCAS', // Usually your GitHub org/user name.
    projectName: 'PyRAT', // Usually your repo name.

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en', locales: ['en'],
    },

    presets: [['classic', /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: {
                remarkPlugins: [require('mdx-mermaid')], sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
                // Remove this to remove the "edit this page" links.
                editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            }, theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
        }),],],

    themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'PyRAT', logo: {
                    alt: 'My Site Logo', src: 'img/logo.svg',
                }, items: [{
                    type: 'doc', docId: 'overview', position: 'left', label: 'Tutorial',
                }, {to: '/api', label: 'API', position: "left"}, {
                    href: 'https://github.com/ASAG-ISCAS/PyRAT', label: 'GitHub', position: 'right',
                },],
            }, footer: {
                style: 'dark', links: [{
                    title: 'Docs', items: [{
                        label: 'Overview', to: '/docs/overview',
                    }, {label: 'Related Tools', to: '/docs/related_tools'}],
                }, {
                    title: 'Contact', items: [{
                        label: 'ASAG-ISCAS', href: 'https://github.com/facebook/docusaurus',
                    }, {label: 'Email', href: 'mailto:dingjianqiang0x@gmail.com'}],
                },], copyright: `Copyright © ${new Date().getFullYear()} PyRAT Developers. Built with Docusaurus.`,
            }, prism: {
                theme: lightCodeTheme, darkTheme: darkCodeTheme,
            },
        }),
};

module.exports = config;
