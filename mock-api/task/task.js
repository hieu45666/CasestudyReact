const fs = require("fs");

const readAllTask = () => {
  const buffer = fs.readFileSync("data/medicineList.json");
  const taskString = buffer.toString();
  const taskJSON = JSON.parse(taskString);
  return taskJSON;
};

const createTask = (params) => {
  const newTask = params;
  let taskList = readAllTask();
  taskList = [...taskList, newTask];
  fs.writeFileSync("data/medicineList.json", JSON.stringify(taskList));
  return newTask;
};

const readDetail = (id) => {
    const taskList = readAllTask();
    const task = taskList.find((task) => id === task.id);
    return task;
};

const updateTask = (id, ...params) => {
    let taskList = readAllTask();
    let index = taskList.findIndex((task) => id === task.id);
    if (index != -1) {
    let oldTask = taskList[index];
    let newTask = {...oldTask, ...params};
    taskList[index] = newTask;
    fs.writeFileSync("data/medicineList.json", JSON.stringify(taskList));
    return newTask;
}
    else {
    return null;
}};


const deleteTask = (id) => {
    let taskList = readAllTask();
    let index = taskList.findIndex((task) => id === task.id);
    if (index!= -1) {
        let task = taskList[index];
        taskList = taskList.filter((task) => id!== task.id);
        fs.writeFileSync("data/medicineList.json", JSON.stringify(taskList));
        return task;
    } 
    else {
        return false;
}
}

module.exports = {
  readAllTask,
  createTask,
  readDetail,
  updateTask,
  deleteTask
};
