const fs = require('fs');

const { FILE_PATH, STATUS_TODO } = require('./constants.js');

const myTasks = [];

function loadAllTasks() {
    try 
    {
        const data = fs.readFileSync(FILE_PATH, 'utf8');
        const arr = JSON.parse(data);
        
        for(let task of arr)
        {
            myTasks.push(task);
        }

    } catch (err) {
        console.log('Error reading file');
    }
}

function saveToFile() {
    const arr = JSON.stringify(myTasks);
    try 
    {
        fs.writeFileSync(FILE_PATH, arr);
    } catch (err) {
        console.log('Error writing file');
    }
}

function getNewID()
{
    let lastId = 0;
    for(let task of myTasks)
    {
        if(task.id > lastId)
        {
            lastId = task.id;
        }
    }

    return lastId+1;
}

function getTaskIndex(taskId)
{
    for(let i=0; i<myTasks.length; i++)
    {
        if(myTasks[i].id == taskId)
        {
            return i;
        }
    }

    return -1;
}

function createNewTask(taskName, taskId, taskStatus, taskCreatedAt, taskUpdatedAt)
{
    task = 
    {
        name: taskName,
        id: taskId,
        status: taskStatus,
        createdAt: taskCreatedAt,
        updatedAt: taskUpdatedAt
    }

    return task;
}

function getCurTime()
{
    const date = new Date();
    const year = date.getFullYear();
    const month = date.toLocaleString('default', { month: 'short' });
    const day = date.getDate();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedDate = `${month} ${day} ${year} ${hours}:${minutes}:${seconds}`;
    return formattedDate;
}

function addNewTask(taskName)
{
    const curTime = getCurTime();
    const task = createNewTask(taskName, getNewID(), STATUS_TODO, curTime, curTime);
    myTasks.push(task);

    console.log("Task added successfully");
    console.log(task);
}

function printAllTasks(taskStatus)
{
    for(let task of myTasks)
    {
        if(taskStatus === undefined || task.status === taskStatus)
        {
            console.log(task);
        }
    }
}

function updateTask(taskId, newTaskName)
{
    const taskIndex = getTaskIndex(taskId);

    const curTime = getCurTime();

    const task = createNewTask(newTaskName, myTasks[taskIndex].id, myTasks[taskIndex].status, myTasks[taskIndex].createdAt, curTime);

    myTasks[taskIndex] = task;
    
    console.log("Task updated successfully");
    console.log(myTasks[taskIndex]);
}

function deleteTask(taskId)
{
    const taskIndex = getTaskIndex(taskId);

    myTasks.splice(taskIndex, 1);
    console.log("Task deleted successfully");

    printAllTasks();
}

function markTask(taskId, newStatus)
{
    const taskIndex = getTaskIndex(taskId);

    const curTime = getCurTime();

    const task = createNewTask(myTasks[taskIndex].name, myTasks[taskIndex].id, newStatus, myTasks[taskIndex].createdAt, curTime);

    myTasks[taskIndex] = task;

    console.log("Task status updated successfully");
    console.log(myTasks[taskIndex]);
}

module.exports = 
{
    loadAllTasks,
    addNewTask,
    createNewTask,
    getNewID,
    saveToFile,
    printAllTasks,
    updateTask,
    deleteTask,
    markTask,
    getTaskIndex
}
