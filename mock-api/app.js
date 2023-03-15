const express = require('express');
const app = express();
const fs = require('fs');
const {
    readAllTask,
    createTask,
    readDetail,
    updateTask,
    deleteTask
  } = require("./task/task");
const port = 9000;
var bodyParser = require('body-parser');
var cors = require('cors');
app.use(cors({origin: '*'}));

app.use(bodyParser.urlencoded( {extended : true}));
app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});

app.get('/medicines', (req, res) => {
    const tasks = readAllTask();
    res.send(tasks);
});

app.get('/medicines/:id', (req, res) => {
    const {id} = req.params;
    const task = readDetail(id);
    res.send(task);
});

app.post('/medicines', (req, res) => {
    const params = req.params;
    const newTask = createTask(params);
    if (newTask) {console.log("Tạo thành công");}
    else {console.log("Tạo thất bại");}
});

app.post('/login', function(req, res) {
    let user = req.body;
    const userList = JSON.parse(fs.readFileSync(`${__dirname}/data/user.json`).toString());
    let index = userList.findIndex(x => x.username === user.username);
    if (index !== -1) {
        if (user.password !== userList[index].password) {res.json("Sai mật khẩu")}
        else res.json(userList[index]);}
    else res.json('Tài khoản không tồn tại');
})

app.post('/signup', function(req, res) {
    let user = req.body;
    const userList = JSON.parse(fs.readFileSync(`${__dirname}/data/user.json`).toString());
    let index = userList.findIndex(x => x.username === user.username);
    if (index !== -1) res.json('User đã tồn tại')
    else {
        userList.push(user);
        delete user.repass;
        fs.writeFileSync(`${__dirname}/data/user.json`, JSON.stringify(userList));
        res.end('Tạo tài khoản thành công');
    }
})