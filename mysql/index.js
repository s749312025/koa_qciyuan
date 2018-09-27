const initTable = require('./util/initTable')
const schedule = require('node-schedule')

const feed = require('./req/index')

const { query } = require('./util/db')

var rule = new schedule.RecurrenceRule()
rule.minute = 40

const feedTime = () => {
    // const j = schedule.scheduleJob(rule, () => {
    schedule.scheduleJob(rule, () => {
        feed()
    })
}
const init = async () => {
    console.log('初始化表开始')
    await initTable()
    console.log('初始化表结束')
    feed()
    feedTime()
}
init()
