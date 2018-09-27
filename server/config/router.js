import {searchArticel} from '../../mysql/query/index'
const router = require('koa-router')()

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

module.exports = router
