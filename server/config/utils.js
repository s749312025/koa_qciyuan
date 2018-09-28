const rp = require('request-promise')

const request = async () => {
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
}
