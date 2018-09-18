const router = require('koa-router')()

router.post('/ceshi', async (ctx, next) => {
    ctx.body = {
        name: 'Q次元'
    }
})

module.exports = router
