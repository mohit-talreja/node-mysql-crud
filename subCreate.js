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
    const sql = 'INSERT INTO subjects(sub_id, sub_name) VALUES ("", "robotics")'
    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(`${res.affectedRows} row inserted.`)
    })
})
