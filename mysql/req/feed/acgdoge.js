let Parser = require('rss-parser')
let parser = new Parser()

const { query } = require('../../util/db')
const { dateFormat } = require('../../util/utils')

// 过滤重复的数据
const removeSameData = async (items, params) => {
    let sql = "SELECT `pubDate` FROM `koa_test`.`article` WHERE `siteName` = '" + params.siteName + "' ORDER BY `pubDate` DESC LIMIT 1"
    const newest = await query(sql)
    if (newest.length === 0) {
        return items
    }
    let filterItems = []
    items.forEach((item, index) => {
        if (new Date(item.pubDate).getTime() > new Date(newest[0].pubDate).getTime()) {
            filterItems.push(item)
        }
    })
    console.log(filterItems.length)
    return filterItems
}

const feedInsert = async (url, params) => {
    let feed = await parser.parseURL(url)
    const newItems = await removeSameData(feed.items, params)
    if (newItems.length === 0) {
        return
    }
    console.log(newItems)
    newItems.forEach(async item => {
        let sql = `insert into article set title=?, link=?, pubDate=?, content=?, icon=?, siteName=?`
        const defaultData = {
            title: item.title,
            link: item.link,
            pubDate: dateFormat(new Date(item.pubDate), 'yyyy-MM-dd hh:mm:ss'),
            content: item['content:encoded'],
            icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fvo4776ulbj200g00g0jv.jpg',
            siteName: 'ACG'
        }
        const data = {...defaultData, ...params}
        const val = [data.title, data.link, data.pubDate, data.content, data.icon, data.siteName]
        await query(sql, val)
    })
}

const sites = [
    {
        url: 'https://www.acgdoge.net/feed',
        params: {
            icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fvntn17g41j201c01c745.jpg',
            siteName: 'ACGdoge'
        }
    },
    {
        url: 'http://www.c3acg.com/feed',
        params: {
            icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fvo57zkof1j201c01ct8k.jpg',
            siteName: 'C3acg'
        }
    },
    {
        url: 'http://likeacg.com/?feed=rss2',
        params: {
            icon: 'http://ww1.sinaimg.cn/large/eb8c259egy1fvo4ykzo8nj200g00g04k.jpg',
            siteName: 'likeACG'
        }
    }
]

const allInsert = () => {
    sites.forEach(async item => {
        console.log(item.params.siteName + '开始')
        await feedInsert(item.url, item.params)
        console.log(item.params.siteName + '结束')
    })
}

module.exports = allInsert

// const search = async () => {
//     let sql = 'select * from `article` order by `pubDate` desc'
//     let a = await query(sql)
//     console.log(a)
// }
