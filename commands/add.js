const conf = new (require("conf"))();
const constants = require("../constants");
const logger = require("../config/logger");

const add = (task) => {
  let todoLists = conf.get(constants.todoLists);

  if (!todoLists) {
    todoLists = [];
  }

  todoLists.push({
    text: task,
    done: false,
  });

  conf.set(constants.todoLists, todoLists);
  logger.success("Task has been added successfully!");
};

module.exports = add;
