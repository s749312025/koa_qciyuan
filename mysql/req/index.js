var allInsert = require('./feed/acgdoge')
var apiInsert = require('./api/index')

const feed = () => {
    allInsert()
}
const api = () => {
    apiInsert()
}

module.exports = {
    feed,
    api
}
