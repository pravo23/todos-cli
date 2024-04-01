const conf = new (require('conf'))();
const chalk = require('chalk');

function markDone({tasks}) {

    let todosList = conf.get('todo-list');

    if (todosList) {
        todosList.map((task, index) => {

            if (tasks) {
    
                if (tasks.indexOf((index + 1).toString()) != -1)  {
                    task.done = true;
                }
                
            } else {
                task.done = true;
            }
    
            return task;
        });
    
        conf.set('todo-list', todosList);
    }

    console.log(
        chalk.green.bold('Tasks have been marked as done successfully')
    )

}

module.exports = markDone;