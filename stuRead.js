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
    /*
    const sql = 'SELECT * FROM students'
    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(res)
    })
    */
   /*
    const sql = 'SELECT stu_id,stu_name FROM students'
    con.query(sql, (err,res) => {
        if(err) throw err
        console.log(res)
    })
    */
   /*
   const stu_name = 'mohit'
   const sql = 'SELECT * FROM students WHERE stu_name = ' + mysql.escape(stu_name)
   con.query(sql, (err,res) => {
       if(err) throw err
       console.log(res)
   })
   */
  /*
  const sql = 'SELECT * FROM students LIMIT 2'
  con.query(sql, (err,res) => {
      if(err) throw err
      console.log(res)
  })
  */
 /*
 const sql = 'SELECT * FROM students LIMIT 2 OFFSET 2'
  con.query(sql, (err,res) => {
      if(err) throw err
      console.log(res)
  })
  */
 const sql = 'SELECT * FROM students LIMIT 2,3'
  con.query(sql, (err,res) => {
      if(err) throw err
      console.log(res)
  })
})
