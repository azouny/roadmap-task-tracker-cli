const myTasks = require('./tasks.model.js');
const { invalidTaskInfo } = require('./util.js');
const { STATUS_TODO,
        STATUS_IN_PROGRESS,
        STATUS_DONE } = require('./constants.js');


const args = process.argv.slice(2);

function checkArgsLengthInRange(min, max)
{
    return args.length >= min && args.length <= max;
}

function checkValidId(taskId)
{
    const id = Number(taskId);
    if(isNaN(id))
    {
        invalidTaskInfo("Invalid task id");
        return false;
    }
    
    const index = myTasks.getTaskIndex(id);
    if(index == -1)
    {
        invalidTaskInfo("Invalid task id");
        return false;
    }

    return true
}

function checkValidStatus(status, isMark = false)
{
    if(status == STATUS_IN_PROGRESS || status == STATUS_DONE || (status == STATUS_TODO && !isMark))
    {
        return true;
    }
    
    invalidTaskInfo("Invalid status");
    return false;
}

function checkValidTaskName(taskName)
{
    if(taskName == undefined || taskName == "")
    {
        console.log("Task name is empty");
        return false;
    }

    return true;
}

function checkAddArguments()
{
    // command + task name
    const isValidArgsLength = checkArgsLengthInRange(2, 2);

    const taskName = args[1];
    const isValidTaskName = checkValidTaskName(taskName);

    return isValidArgsLength && isValidTaskName;
}

function checkUpdateArguments()
{
    // command + task id + task name
    const isValidArgsLength = checkArgsLengthInRange(3, 3);

    const taskId = args[1];
    const isValidTaskId = checkValidId(taskId);

    const taskName = args[2];
    const isValidTaskName = checkValidTaskName(taskName);


    return isValidArgsLength && isValidTaskId && isValidTaskName;
}

function checkDeleteArguments()
{
    // command + task id
    const isValidArgsLength = checkArgsLengthInRange(2, 2);

    const taskId = args[1];
    const isValidTaskId = checkValidId(taskId);

    return isValidArgsLength && isValidTaskId;
}

function checkListArguments()
{
    // command + listing type
    // or
    // command
    const isValidArgsLength = checkArgsLengthInRange(1, 2);

    if(args.length == 2)
    {
        const listType = args[1];
        const isValidStatus = checkValidStatus(listType);
    
        return isValidArgsLength && isValidStatus;
    }
    
    return isValidArgsLength;
}

function checkMarkInProgressArguments()
{
    // command + task id
    const isValidArgsLength = checkArgsLengthInRange(2, 2);

    const taskId = args[1];
    const isMark = true;
    const isVallidId = checkValidId(taskId, isMark);

    return isValidArgsLength && isVallidId;
}

function checkMarkDoneArguments()
{
    // command + task id
    const isValidArgsLength = checkArgsLengthInRange(2, 2);

    const taskId = args[1];
    const isMark = true;
    const isValidId = checkValidId(taskId, isMark);

    return isValidArgsLength && isValidId;
}

function checkHelpArguments()
{
    // command
    const isValidArgsLength = checkArgsLengthInRange(1, 1);

    return isValidArgsLength;
}


module.exports = 
{
    checkAddArguments,
    checkUpdateArguments,
    checkDeleteArguments,
    checkListArguments,
    checkMarkInProgressArguments,
    checkMarkDoneArguments,
    checkHelpArguments
};