const webpack = require('webpack');
const html = require('vuepress-html-webpack-plugin');
const path = require('path');
module.exports = {

    dest: 'vuepress',
    locales: {
        '/': {
            lang: 'zh-CN',
            title: '壹通软件支持',
            description: '壹通堂办公支持系统'
        },
        // '/en/': {
        //     lang: 'en-US',
        //     title: 'YT-soft support',
        //     description: 'YTT OA office collaboration system'
        // }
    },
    head: [
        ['link', {rel: 'icon', href: `/images/logo.png`}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
        ['meta', {name: 'theme-color', content: '#e66a6c'}],
        ['meta', {'http-equiv': 'X-UA-Compatible', content: 'IE=Edge'}],
        ['meta', {name: 'apple-mobile-web-app-capable', content: 'yes'}],
        ['meta', {name: 'apple-mobile-web-app-status-bar-style', content: 'black'}],
        ['link', {rel: 'apple-touch-icon', href: `/icons/apple-touch-icon-152x152.png`}],
        ['link', {rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#e66a6c'}],
        ['meta', {name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png'}],
        ['meta', {name: 'msapplication-TileColor', content: '#000000'}],
        // ['link',{rel: 'stylesheet', href: 'https://static.zhihu.com/heifetz/main.app.a757d29deab2a3334754.css" rel="stylesheet'}]
        ['meta', {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no"
        }]
    ],
    serviceWorker: false,
    // theme: 'yubisaki',
    themeConfig: {
        logo: '/images/logo.png',
        repo: null,
        editLinks: true,
        docsDir: 'docs',
        search: false,
        locales: {
            '/': {
                label: '简体中文',
                selectText: '选择语言',
                editLinkText: '在 GitHub 上编辑此页',
                lastUpdated: '上次更新',
                nav: [
                    {
                        text: '首页',
                        link: '/',
                        fun:function(){this.$emit('clickLink',1)}
                    },
                    {
                        text: '壹通资讯',
                        link: 'https://www.yttys.com/',
                        fun:function(){this.$emit('clickLink',7)}
                    },
                ],
                sidebar: {
                    '/guide/': genSidebarConfig('指南')
                }
            },
            '/en/': {
                label: 'English',
                selectText: 'Languages',
                editLinkText: 'Edit this page on GitHub',
                lastUpdated: 'Last Updated',
                nav: [
                    {
                        text: 'Guide',
                        link: '/en/guide/',
                    },
                    {
                        text: 'Config Reference',
                        link: '/en/config/'
                    },
                    {
                        text: 'Default Theme Config',
                        link: '/en/default-theme-config/'
                    }
                ],
                sidebar: {
                    '/en/guide/': genSidebarConfig('Guide')
                }
            }
        },

    },
    configureWebpack: (config, isServer) => {
        config.module.noParse = /^(vue|vue-router|vuex|vuex-router-sync|fullPage|jquery|self|home)$/;
        if (!isServer) {
            // config.plugins.push(new html({
            //     filename: 'index.html',
            //     // template: './src/index.html',
            //     chunks:['jquery','fullpage','home'],
            //     hash: true,
            //     minify: {
            //         removeAttributeQuotes:true,
            //         removeComments: true,
            //         collapseWhitespace: true,
            //         removeScriptTypeAttributes:true,
            //         removeStyleLinkTypeAttributes:true
            //     }
            // }))
            // console.log(1111,config)
            // if (config.mode !== 'production') {
            //     config.entry = {
            //         app: [path.join(__dirname, '..\\..\\lib\\app\\clientEntry.js')],
            //         // jquery: [path.join(__dirname, '../../static/js/jquery.min.js')],
            //         // fullpage: [path.join(__dirname, '../../static/js/jquery.fullPage.min.js')],
            //         // home: [path.join(__dirname, '../../static/js/home.js')],
            //     }
            // } else {
            //     config.entry = {
            //         // home: [path.join(__dirname, '../../static/js/home.js')],
            //         // fullpage: [path.join(__dirname, '../../static/js/jquery.fullPage.min.js')],
            //         // jquery: [path.join(__dirname, '../../static/js/jquery.min.js')],
            //         app: [path.join(__dirname, '..\\..\\lib\\app\\clientEntry.js')]
            //     }
            // }
        }
    },
};

function genSidebarConfig(title) {
    return [
        {
            title,
            collapsable: false,
            children: [
                '',
                'getting-started',
                'basic-config',
                'assets',
                'markdown',
                'using-vue',
                'custom-themes',
                'i18n',
                'deploy'
            ]
        }
    ]
}
