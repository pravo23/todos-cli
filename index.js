#! /usr/bin/env node
const { program } = require("commander");
const list = require("./commands/list");
const add = require("./commands/add");
const updateDoneStatus = require("./commands/updateDoneStatus");
const removeTasks = require("./commands/remove");

program.command("list").description("List all the TODO tasks").action(list);

program.command("add <task>").description("Add a new todo task").action(add);

program
  .command("rm")
  .description("Remove the set of tasks")
  .requiredOption("-t --tasks <tasks...>", "The specified task to be removed")
  .action((options) => {
    removeTasks(options.tasks);
  });

program
  .command("mark-done")
  .description("Mark Task to be done")
  .option(
    "-t --tasks <tasks...>",
    "The tasks to mark done. If not specified, all tasks will be marked done.",
  )
  .option("-u, --undone", "Revert the task status")
  .action((options) => {
    updateDoneStatus(options);
  });

program.parse(process.argv);
