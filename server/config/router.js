import {searchArticel} from '../../mysql/query/index'
import fetch from '../../client/plugins/api.js'
const router = require('koa-router')()

let pixiv = []
let pixivTime = new Date().getTime()
let music = []
let musicTime = new Date().getTime()

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

router.post('/api/music', async (ctx, next) => {
    const now = new Date().getTime()
    console.log(music.length, now - musicTime > 12 * 60 * 60 * 1000)
    if (music.length > 0) {
        if (now - musicTime > 12 * 60 * 60 * 1000) {
            fetch('https://api.imjad.cn/cloudmusic/?type=playlist&id=71385702', {}, 'get')
                .then(({playlist}) => {
                    music = playlist.tracks
                    musicTime = new Date().getTime()
                })
        }
        ctx.body = {
            playlist: music
        }
        return
    }
    const {playlist} = await fetch('https://api.imjad.cn/cloudmusic/?type=playlist&id=71385702', {}, 'get')
    music = playlist.tracks
    musicTime = new Date().getTime()
    ctx.body = {
        playlist: music
    }
})

module.exports = router
