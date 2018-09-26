const initTable = require('./util/initTable')

const { query } = require('./util/db')
// 初始化表
initTable()

// 插入文章
const insertPost = async (value) => {
    let _sql = 'insert into article set title=?,link=?,pubDate=?,content=?'
    await query(_sql, value)
}

// 查找用户
const find = async () => {
    let _sql = `SELECT * FROM article`
    const result = await query(_sql)
    return result
}

const init = async () => {
    await initTable()
}
init()
