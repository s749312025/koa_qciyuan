const rp = require('request-promise')
const { query } = require('../../util/db')
const { dateFormat } = require('../../util/utils')

// 过滤重复的数据
const removeSameData = async (items, params) => {
    let sql = "SELECT `pubDate` FROM `koa_test`.`article` WHERE `siteName` = '" + params.siteName + "' ORDER BY `pubDate` DESC LIMIT 1"
    const newest = await query(sql)
    if (newest.length === 0) {
        console.log(params.siteName + ': 所有的')
        return items
    }
    let filterItems = []
    items.forEach((item, index) => {
        if (new Date(item.published_at).getTime() > new Date(newest[0].pubDate).getTime()) {
            filterItems.push(item)
        }
    })
    console.log(params.siteName + ': ' + filterItems.length)
    return filterItems
}

const apiInsert = async () => {
    const url = 'https://gank.io/api/xiandu/data/id/ifanr/count/10/page/1'
    const options = {
        method: 'GET',
        url,
        json: true,
        headers: {
            'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 9_1 like Mac OS X) AppleWebKit/601.1.46 (KHTML, like Gecko) Version/9.0 Mobile/13B143 Safari/601.1',
            Cookie: ''
        }
    }
    const data = await rp(options)
    const params = {
        siteName: '爱范儿(ifanr)',
        icon: 'http://ww3.sinaimg.cn/large/0066P23Wjw1f9rylijz6rj3030030gle.jpg'
    }
    const nextData = await removeSameData(data.results, params)
    if (nextData.length === 0) {
        return
    }
    nextData.forEach(async item => {
        let sql = `insert into article set title=?, link=?, pubDate=?, content=?, icon=?, siteName=?`
        const defaultData = {
            title: item.title,
            link: item.url,
            pubDate: dateFormat(new Date(item.published_at), 'yyyy-MM-dd hh:mm:ss'),
            content: item.content,
            icon: params.icon,
            siteName: params.siteName
        }
        const data = {...defaultData, ...params}
        const val = [data.title, data.link, data.pubDate, data.content, data.icon, data.siteName]
        await query(sql, val)
    })
}

module.exports = apiInsert
