const express = require('express');
const res = require('express/lib/response');
const app = express()
const port = 3000
app.set('view engine','ejs');
app.use(express.urlencoded({extended: false }))
var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '123456',
  port:3306
  
});

connection.connect();

app.get('/', (req, res) => {
  connection.query('select * from school.student', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
    var data = rows;
    res.render('index',{student: data});
  });
})

app.post('/upload',(req,res) =>{
  var id = req.body.id;
  var name = req.body.name;
  var phone =req.body.phone; 
  console.log(id,name,phone);
  connection.query(`INSERT INTO school.student(id, name, phone) VALUES ('${id}','${name}', '${phone}')`, function(err,row,fields){
   if(err) throw err;
 });
 res.redirect('/');
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})