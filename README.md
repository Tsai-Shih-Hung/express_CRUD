# myapp
express GET POST

# 連接資料庫

# GET 
html 前端渲染畫面
```
<table>
        <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Phone</th>
        </tr>
            <% for(var i=0; i<student.length; i++) { %>
            <tr>
            <td><%= student[i].Id %></td>
            <td><%= student[i].Name %></td>
            <td><%= student[i].Phone %></td>
            </tr>
            <%}%>
</table>
```

express 後端處理
  
```
app.get('/', (req, res) => {
  connection.query('select * from school.student', function(err, rows, fields) {
    if (err) throw err;
    console.log('The solution is: ', rows);
    var data = rows;
    res.render('index',{student: data});
  });
})
```

# POST

html  前端設定表單
```
<P>新增</P>
    <form  action="/upload" method="POST">
        <input type="text" name="id" />
        <input type="text" name="name" />
        <input type="text" name="phone" />
        <button>Submit</button>
    </form>
```
express 後端處理

```
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
```



