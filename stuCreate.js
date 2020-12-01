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
    const sql = 'INSERT INTO students (stu_id, stu_name, sub_id) VALUES ("", "shanaya", 5)'
    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(`${res.affectedRows} row inserted.`)
    })
})