const express = require('express');
const app = express();
const cors = require("cors");
const {
    readAllTask,
    createTask,
    readDetail,
    updateTask,
    deleteTask
  } = require("./task/task");
const port = 9000;

app.use(cors({ origin: true, credentials: true }));

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