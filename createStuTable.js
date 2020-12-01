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
    const sql = 'CREATE TABLE students(stu_id INT AUTO_INCREMENT PRIMARY KEY, stu_name VARCHAR(255), sub_id INT)'
    con.query(sql, (err,res) => {
        if(err) throw err
        console.log('Table created.')
        console.log(res)
    })
})