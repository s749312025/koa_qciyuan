import {
    searchArticel,
    searchArticelById
} from '../../mysql/query/index'
import fetch from '../../client/plugins/api.js'
const router = require('koa-router')()

let pixiv = []
let pixivTime = new Date().getTime()
let music = []
let musicTime = new Date().getTime()
let cartoon = {}
let cartoonTime = new Date().getTime()
let year // 新番年份
let Month // 新番月份

router.post('/ceshi', async (ctx, next) => {
    ctx.body = {
        name: 'Q次元'
    }
})

router.post('/api/infoById', async (ctx, next) => {
    // console.log(ctx.request.body);
    // ctx.body = {
    //     info: 1
    // }
    const id = ctx.request.body.id
    console.log('ser' + id)
    const info = await searchArticelById(id)
    ctx.body = {
        info
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
                .then(({
                    image
                }) => {
                    pixiv = image
                    pixivTime = new Date().getTime()
                })
        }
        ctx.body = {
            image: pixiv
        }
        return
    }
    const {
        image
    } = await fetch('https://cloud.mokeyjay.com/pixiv/pixiv.json', {}, 'get')
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
            fetch('http://music.163.com/api/playlist/detail?id=71385702', {}, 'get')
                .then(({
                    playlist
                }) => {
                    music = playlist.tracks
                    musicTime = new Date().getTime()
                })
        }
        ctx.body = {
            playlist: music
        }
        return
    }
    const {
        result
    } = await fetch('http://music.163.com/api/playlist/detail?id=71385702', {}, 'get')
    music = result.tracks
    musicTime = new Date().getTime()
    ctx.body = {
        playlist: music
    }
})

router.post('/api/cartoon', async (ctx, next) => {
    const now = new Date().getTime()
    if (cartoon.data && Object.keys(cartoon.data).length > 0) {
        if (now - cartoonTime > 12 * 60 * 60 * 1000) {
            fetch('https://bgmlist.com/tempapi/archive.json?_t=' + now, {}, 'get')
                .then(({
                    data
                }) => {
                    year = Math.max(...Object.keys(data))
                    Month = Math.max(...Object.keys(data[year]))
                    fetch(data[year][Month].path, {}, 'get')
                        .then(cartoons => {
                            cartoon.data = cartoons
                        })
                })
        }
        ctx.body = {
            year,
            Month,
            cartoon: cartoon.data
        }
        return
    }
    const {
        data
    } = await fetch('https://bgmlist.com/tempapi/archive.json?_t=' + now, {}, 'get')
    year = Math.max(...Object.keys(data))
    Month = Math.max(...Object.keys(data[year]))
    cartoon.data = await fetch(data[year][Month].path, {}, 'get')
    cartoonTime = new Date().getTime()
    ctx.body = {
        year,
        Month,
        cartoon: cartoon.data
    }
})

module.exports = router
