# myapp
express GET POST

# 連接資料庫
```
CREATE DATABASE school;

CREATE TABLE `student`(
`ID` INT,
`Name` VARCHAR(10),
`Phone` varchar(10)
)

INSERT INTO student(`Id`,`Name`,school`Phone`) VALUES (1,'Brian','12345789'),(2,'Cindy','987654321');

```
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

說明: form  表單如上學期所說的，裡面有欄位跟button。使用者點擊button後，上方action會導向url=/upload，然後到後端。
      新增資料的時候我們會使用POST來新增。
      
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

1.資料到後端之後。可以使用req.body.xxx來搭配form表單的name，然後設變數存取起來。在傳資料庫之前可以先console.log出來看看資料的內容。
2.確認之後搭配資料庫指令insert into把資料給資料庫做儲存的動作。
3.最後的res.redirect('/')代表url回到"/"，重新抓取get資料，前端畫面會馬上看到剛剛所新增的內容。

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



