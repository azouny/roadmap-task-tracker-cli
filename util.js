const fs = require('fs');

const myTasks = require('./tasks.model.js');

const { FILE_PATH } = require('./constants.js');

function createFile()
{
    try
    {
        fs.writeFileSync(FILE_PATH, '[]');
    }
    catch(err)
    {
        console.log("File does not exist and failed to create it");
    }
}

function setup()
{
    if(!fs.existsSync(FILE_PATH))
    {
        createFile();
    }

    myTasks.loadAllTasks();
}

function invalidTaskInfo(message)
{
    console.log(message);
    console.log("Available tasks are:");
    myTasks.printAllTasks();
}

function helpCommandMessage()
{
    console.log("Available commands are:");
    console.log("add <task name>");
    console.log("update <task id> <task name>");
    console.log("delete <task id>");
    console.log("list");
    console.log("list <in-progress | done>");
    console.log("mark-in-progress <task id>");
    console.log("mark-done <task id>");
    console.log("help");
}

function invalidCommand()
{
    console.log("Invalid command");

    helpCommandMessage();
}


module.exports = 
{
    setup,
    invalidCommand,
    helpCommandMessage,
    invalidTaskInfo
}