const mysql = require('mysql')

const pool = mysql.createPool({
    host: '23.105.202.137',
    user: 'koa_test',
    password: 's88557339',
    database: 'koa_test'
})

let query = (sql, values) => {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if (err) {
                reject(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject(err)
                    } else {
                        resolve(rows)
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = {
    query
}
