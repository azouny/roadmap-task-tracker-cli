const path = require('path');

const FILE_PATH = path.join(__dirname, 'myTasks.json');

const COMMAND_ADD = "add";
const COMMAND_UPDATE = "update";
const COMMAND_DELETE = "delete";
const COMMAND_LIST = "list";
const COMMAND_MARK_IN_PROGRESS = "mark-in-progress";
const COMMAND_MARK_DONE = "mark-done";
const COMMAND_HELP = "help";

const STATUS_TODO = "todo";
const STATUS_IN_PROGRESS = "in-progress";
const STATUS_DONE = "done";

module.exports =
{
    FILE_PATH,
    COMMAND_ADD,
    COMMAND_UPDATE,
    COMMAND_DELETE,
    COMMAND_LIST,
    COMMAND_MARK_IN_PROGRESS,
    COMMAND_MARK_DONE,
    COMMAND_HELP,
    STATUS_TODO,
    STATUS_IN_PROGRESS,
    STATUS_DONE
}