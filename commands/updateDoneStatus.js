const conf = new (require("conf"))();
const chalk = require("chalk");

const updateDoneStatus = (options) => {
  const { tasks, undone } = options;

  console.log(`tasks :: ${tasks}, undone :: ${undone}`);
  let todosList = conf.get("todo-list");
  const doneStatus = !undone ? true : false;

  if (todosList) {
    todosList.map((task, index) => {
      if (tasks) {
        if (tasks.indexOf((index + 1).toString()) != -1) {
          task.done = doneStatus;
        }
      } else {
        task.done = doneStatus;
      }

      return task;
    });

    conf.set("todo-list", todosList);
  }

  console.log(
    chalk.green.bold(
      `Tasks have been marked as ${doneStatus ? "done" : "undone"} successfully`,
    ),
  );
};

module.exports = updateDoneStatus;
