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
    const sql = 'SELECT students.stu_name, subjects.sub_name FROM students INNER JOIN subjects ON students.sub_id = subjects.sub_id'
    // const sql = 'SELECT students.stu_name, subjects.sub_name FROM students JOIN subjects ON students.sub_id = subjects.sub_id'
    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(res)
    })
})
