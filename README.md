# Task Tracker CLI

Task Tracker CLI is simple command-line interface application to manage tasks.
Solution to the backend project from [roadmap.sh](https://roadmap.sh/projects/task-tracker).

---

## prerequisite

* Node.js installed on your system.

---

## How to install

* Clone repo  
  ` git clone https://github.com/azouny/roadmap-task-tracker-cli.git `

## Features

* ### Adding a new task
  `task-cli add <task name>`


* ### Updating an already existing task
  `task-cli update <task id> <new task name>`


* ### Deleting an already existing task
  `task-cli delete <task id>`


* ### Changing task status
  * #### Changing task status to in progress
    `task-cli mark-in-progress <task id>`

  * #### Changing task status to done
    `task-cli mark-done <task id>`

* ### List tasks

  * #### Listing all existing tasks
    `task-cli list`

  * #### Listing all existing tasks with status "todo"
    `task-cli list todo`

  * #### Listing all existing tasks with status "in-progress"
    `task-cli list in-progress`

  * #### Listing all existing tasks with status "done"
    `task-cli list done`

---

## JSON Task Structure
```javascript
{
  name: "Task Name",
  id: "Task Id",
  status: "Task Status",
  createdAt: "Date task created at",
  updatedAt: "Date task was last modified"
}
```
