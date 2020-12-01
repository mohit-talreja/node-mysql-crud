const mysql = require('mysql')

const con = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '',
    database : 'students_database'
})

con.connect((err) => {
    if(err) throw err
    console.log('Connected to MySQL DB.')
    const stu_name = 'shanaya'
    const updated_name = 'scarlet'
    const sql = 'UPDATE students SET stu_name = ? WHERE stu_name = ?'
    con.query(sql, [updated_name,stu_name], (err,res) => {
        if(err) throw err
        console.log(`${res.affectedRows} row updated.`)
    })
})