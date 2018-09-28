import {searchArticel} from '../../mysql/query/index'
import fetch from '../../client/plugins/api.js'
const router = require('koa-router')()

let pixiv = []
let pixivTime = new Date().getTime()

router.post('/ceshi', async (ctx, next) => {
    ctx.body = {
        name: 'Q次元'
    }
})

router.post('/api/info', async (ctx, next) => {
    const info = await searchArticel()
    ctx.body = {
        info
    }
})

router.post('/api/pixiv', async (ctx, next) => {
    const now = new Date().getTime()
    if (pixiv.length > 0) {
        if (now - pixivTime > 12 * 60 * 60 * 1000) {
            fetch('https://cloud.mokeyjay.com/pixiv/pixiv.json', {}, 'get')
                .then(({image}) => {
                    pixiv = image
                    pixivTime = new Date().getTime()
                })
        }
        ctx.body = {
            image: pixiv
        }
        return
    }
    const {image} = await fetch('https://cloud.mokeyjay.com/pixiv/pixiv.json', {}, 'get')
    pixiv = image
    pixivTime = new Date().getTime()
    ctx.body = {
        image
    }
})

module.exports = router
