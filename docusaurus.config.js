// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/duotoneLight');
const darkCodeTheme = require('prism-react-renderer/themes/duotoneDark');
const math = require('remark-math')
const katex = require('rehype-katex')

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: 'PyBDR',
    tagline: 'Boundary analysis based Reachability analysis Toolbox for dynamic systems in Python',
    url: 'https://ASAG-ISCAS.github.io/docs.pybdr/',
    baseUrl: '/docs.pybdr/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    favicon: 'img/favicon.ico',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'ASAG-ISCAS', // Usually your GitHub org/user name.
    projectName: 'docs.pybdr', // Usually your repo name.
    trailingSlash: false,
    deploymentBranch: 'gh-pages',

    // Even if you don't use internalization, you can use this field to set useful
    // metadata like html lang. For example, if your site is Chinese, you may want
    // to replace "en" with "zh-Hans".
    i18n: {
        defaultLocale: 'en', locales: ['en'],
    },

    presets: [['classic', /** @type {import('@docusaurus/preset-classic').Options} */
        ({
            docs: {
                remarkPlugins: [require('mdx-mermaid'), math],
                rehypePlugins: [katex],
                sidebarPath: require.resolve('./sidebars.js'), // Please change this to your repo.
                // Remove this to remove the "edit this page" links.
                editUrl: 'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
            }, theme: {
                customCss: require.resolve('./src/css/custom.css'),
            },
        }),],],

    stylesheets: [{
        href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
        type: 'text/css',
        integrity: 'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
        crossorigin: 'anonymous',
    }],

    themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
        ({
            navbar: {
                title: 'PyBDR', logo: {
                    alt: 'My Site Logo', src: 'img/logo.svg',
                }, items: [{
                    type: 'doc', docId: 'overview', position: 'left', label: 'Tutorial',
                }, {
                    href: 'https://github.com/ASAG-ISCAS/PyBDR', label: 'GitHub', position: 'right',
                },],
            }, footer: {
                style: 'dark', links: [{
                    title: 'Docs', items: [{
                        label: 'Overview', to: '/docs/overview',
                    }, {label: 'Related Tools', to: '/docs/related_tools'}],
                }, {
                    title: 'Contact', items: [{label: 'Email', href: 'mailto:dingjianqiang0x@gmail.com'}],
                },], copyright: `Copyright © ${new Date().getFullYear()} PyRAT Developers. Built with Docusaurus.`,
            }, prism: {
                theme: require('prism-react-renderer/themes/shadesOfPurple'),
                darkTheme: require('prism-react-renderer/themes/duotoneDark'),
                defaultLanguage: 'python'
            },
        }),


};

module.exports = config;
