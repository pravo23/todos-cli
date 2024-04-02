const conf = new (require("conf"))();
const chalk = require("chalk");
const constants = require('../constants');

const updateDoneStatus = (options) => {
  const { tasks, undone } = options;

  let todoLists = conf.get(constants.todoLists);
  const doneStatus = !undone ? true : false;

  if (todoLists) {
    todoLists.map((task, index) => {
      if (tasks) {
        if (tasks.indexOf((index + 1).toString()) != -1) {
          task.done = doneStatus;
        }
      } else {
        task.done = doneStatus;
      }

      return task;
    });

    conf.set(constants.todoLists, todoLists);
  }

  console.log(
    chalk.green.bold(
      `Tasks have been marked as ${doneStatus ? "done" : "undone"} successfully`,
    ),
  );
};

module.exports = updateDoneStatus;
