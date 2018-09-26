const fs = require('fs')
const { query } = require('./db')

// 获取所有sql文件夹下的初始化表
function getAllSql() {
    let sqlContentMap = {}
    let basePath = __dirname
    let pathArr = basePath.split('/')
    pathArr = pathArr.splice(0, pathArr.length - 1)
    basePath = pathArr.join('/') + '/sql/'

    let files = fs.readdirSync(basePath)
    for (let item of files) {
        sqlContentMap[item] = fs.readFileSync(basePath + item, 'utf8')
    }
    return sqlContentMap
}

// 初始化表

const initTable = async () => {
    const allSql = getAllSql()
    for (let sql in allSql) {
        await query(allSql[sql], [])
    }
}

module.exports = initTable
