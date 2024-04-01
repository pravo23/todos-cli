#! /usr/bin/env node
const { program } = require('commander');
const list = require('./commands/list');
const add = require('./commands/add');
const markDone = require('./commands/markDone');

program
    .command('list')
    .description('List all the TODO tasks')
    .action(list)

program
    .command('add <task>')
    .description('Add a new todo task')
    .action(add);

program
    .command('mark-done')
    .description('Mark Task to be done')
    .option('-t --tasks <tasks...>', 'The tasks to mark done. If not specified, all tasks will be marked done.')
    .action(markDone);

program.parse();