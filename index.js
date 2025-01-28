#!/usr/bin/env node
const checker = require('./checker.js');
const myTasks = require('./tasks.model.js');
const { setup,
        invalidCommand,
        helpCommandMessage } = require('./util.js');

const { COMMAND_ADD,
        COMMAND_UPDATE,
        COMMAND_DELETE,
        COMMAND_LIST,
        COMMAND_MARK_IN_PROGRESS,
        COMMAND_MARK_DONE,
        COMMAND_HELP,
        STATUS_IN_PROGRESS, 
        STATUS_DONE } = require('./constants.js');


const args = process.argv.slice(2);

setup();

if(args.length == 0)
{
    invalidCommand();
}
else if(args[0] == COMMAND_ADD && checker.checkAddArguments())
{
    const taskName = args[1];

    myTasks.addNewTask(taskName);
}
else if(args[0] == COMMAND_UPDATE && checker.checkUpdateArguments())
{
    const taskId = args[1];
    const taskName = args[2];

    myTasks.updateTask(taskId, taskName);
}
else if(args[0] == COMMAND_DELETE && checker.checkDeleteArguments())
{
    const taskId = args[1];
    myTasks.deleteTask(taskId);
}
else if(args[0] == COMMAND_LIST && checker.checkListArguments())
{
    if(args.length == 1)
    {
        myTasks.printAllTasks();
    }
    else
    {
        const listType = args[1];
        myTasks.printAllTasks(listType);
    }
}
else if(args[0] == COMMAND_MARK_IN_PROGRESS && checker.checkMarkInProgressArguments())
{
    const taskId = args[1];
    
    myTasks.markTask(taskId, STATUS_IN_PROGRESS);
}
else if(args[0] == COMMAND_MARK_DONE && checker.checkMarkDoneArguments())
{
    const taskId = args[1];
    
    myTasks.markTask(taskId, STATUS_DONE);
}
else if(args[0] == COMMAND_HELP && checker.checkHelpArguments())
{
    helpCommandMessage();
}
else 
{
    invalidCommand();   
}

myTasks.saveToFile();