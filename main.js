import inquirer from "inquirer";
import chalk from "chalk";
let loop = true;
let toDoList = [];
async function toDo(arr) {
    do {
        let ans = await inquirer.prompt({
            name: 'operation',
            type: 'list',
            message: chalk.yellow('Create To-Do List:'),
            choices: ['Add', 'Update', 'View', 'Delete', 'Exit']
        });
        if (ans.operation === 'Add') {
            let add = await inquirer.prompt({
                type: 'input',
                name: 'addItem',
                message: 'Add Item:'
            });
            arr.push(add.addItem);
            console.log(toDoList);
        }
        if (ans.operation === 'Update') {
            let updateList = await inquirer.prompt({
                name: 'ulist',
                type: 'list',
                message: 'Update Item:',
                choices: toDoList.map(item => item)
            });
            let newUpdateList = await inquirer.prompt({
                name: 'newlist',
                type: 'input',
                message: 'Add new Item:'
            });
            let newArray = toDoList.filter(value => value !== updateList.ulist);
            toDoList = [...newArray, newUpdateList.newlist];
            console.log(toDoList);
        }
        if (ans.operation === 'View') {
            console.log(toDoList);
        }
        if (ans.operation === 'Delete') {
            let deleteToDo = await inquirer.prompt({
                name: 'delete',
                type: 'list',
                message: 'Select Item to Delete:',
                choices: toDoList.map(item => item),
            });
            let newToDoList = toDoList.filter(value => value !== deleteToDo.delete);
            toDoList = [...newToDoList];
            console.log(toDoList);
        }
        if (ans.operation === 'Exit') {
            loop = false;
        }
    } while (loop);
}
toDo(toDoList);
