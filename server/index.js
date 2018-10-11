import Koa from 'koa'
import proxy from 'koa-server-http-proxy'
const bodyParser = require('koa-bodyparser')
import {
    Nuxt,
    Builder
} from 'nuxt'

import '../mysql/index'

async function start() {
    const app = new Koa()
    app.use(bodyParser())
    const host = process.env.HOST || '0.0.0.0'
    const port = process.env.PORT || 3000

    // Import and Set Nuxt.js options
    const config = require('../nuxt.config.js')
    config.dev = !(app.env === 'production')

    // Instantiate nuxt.js
    const nuxt = new Nuxt(config)

    // Build in development
    if (config.dev) {
        const builder = new Builder(nuxt)
        await builder.build()
    }

    // proxy
    // const proxyTable = {
    //     '/api/xiandu': { target: 'https://gank.io', changeOrigin: true },
    //     '/pixiv': { target: 'https://cloud.mokeyjay.com', changeOrigin: true },
    //     '/cloudmusic': { target: 'https://api.imjad.cn', changeOrigin: true }
    // }
    // Object.keys(proxyTable).forEach(context => {
    //     var options = proxyTable[context]
    //     app.use(proxy(context, options))
    // })

    const router = require('./config/router')

    app.use(router.routes()).use(router.allowedMethods())

    app.use(ctx => {
        ctx.status = 200
        ctx.respond = false // Mark request as handled for Koa
        ctx.req.ctx = ctx // This might be useful later on, e.g. in nuxtServerInit or with nuxt-stash
        nuxt.render(ctx.req, ctx.res)
    })

    app.listen(port, host)
    console.log('Server listening on ' + host + ':' + port) // eslint-disable-line no-console
}

start()
