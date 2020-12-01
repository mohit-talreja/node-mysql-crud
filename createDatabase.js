const mysql = require('mysql')

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : ''
})

con.connect((err) => {
    if(err) throw err
    console.log('Connected to MySQL DB.')
    const sql = 'CREATE DATABASE students_database'
    con.query(sql, (err,res) => {
        if(err) throw err
        console.log('Database created.')
        console.log(res)
    })
})