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

* Navigate to the cloned repo folder in terminal or Open terminal in the cloned repo folder

## Features

* ### Adding a new task
  `node index add <task name>`


* ### Updating an already existing task
  `node index update <task id> <new task name>`


* ### Deleting an already existing task
  `node index delete <task id>`


* ### Changing task status
  * #### Changing task status to in progress
    `node index mark-in-progress <task id>`

  * #### Changing task status to done
    `node index mark-done <task id>`

* ### List tasks

  * #### Listing all existing tasks
    `node index list`

  * #### Listing all existing tasks with status "todo"
    `node index list todo`

  * #### Listing all existing tasks with status "in-progress"
    `node index list in-progress`

  * #### Listing all existing tasks with status "done"
    `node index list done`

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
