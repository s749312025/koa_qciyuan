let Parser = require('rss-parser')
let parser = new Parser()
const iconv = require('iconv-lite')

const { query } = require('../../util/db')

const req = async () => {
    let feed = await parser.parseURL('http://news.qq.com/newsgn/rss_newsgn.xml')

    feed.items.forEach(async item => {
        // console.log(item)
        let bufs = iconv.decode(item.title, 'gb2312')
        console.log(bufs.toString('utf8'))
        // console.log(iconv.decode(item.title, 'utf-8').toString())
        let _sql = 'insert into article set title=?,link=?,pubDate=?,content=?'
        // await query(_sql, [iconv.decode(item.title, 'utf-8') + '', item.link, item.pubDate, iconv.decode(item.content, 'utf-8') + ''])
        // console.log(item.title + ':' + item.link)
    })
}

req()
