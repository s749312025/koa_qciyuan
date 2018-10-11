module.exports = {
    /*
     ** Headers of the page
     */
    head: {
        title: 'starter',
        meta: [
            {
                charset: 'utf-8'
            },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1'
            },
            {
                hid: 'description',
                name: 'description',
                content: 'Q次元,集合了动画，动画，动漫大全的导航网站。'
            }
        ],
        script: [
            {src: 'https://hm.baidu.com/hm.js?a503b5a0d174fa01fdb7401977789953'}, /*引入百度统计的js*/
        ],
        link: [
            {
                rel: 'icon',
                type: 'image/x-icon',
                href: '/favicon.ico'
            }
        ]
    },
    /*
     ** Global CSS
     */
    css: ['~assets/css/main.css', { src: '~assets/styles/scss/index.scss', lang: 'scss' }],
    /*
     ** Customize the progress-bar color
     */
    loading: {
        color: '#3B8070'
    },
    /*
     ** Build configuration
     */
    // modules: [
    //     '@nuxtjs/axios'
    // ],
    build: {
        vendor: ['axios'],
        /*
         ** Run ESLINT on save
         */
        extend(config, ctx) {
            if (ctx.isClient) {
                config.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /(node_modules)/
                })
            }
        }
    }
}
