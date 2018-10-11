// const {query} = require('../util/db')

import {
    query
} from '../util/db'
// articel

export const searchArticel = async () => {
    let sql = 'select * from `article` order by `pubDate` desc limit 10'
    let a = await query(sql)
    return a
}

export const searchArticelById = async (id) => {
    let sql = 'select * from `article` where `id` = ' + id
    let a = await query(sql)
    return a
}
