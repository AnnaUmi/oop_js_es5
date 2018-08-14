const Todo = require('./Todo');
const Task = require('./Task');

const todo = new Todo('Buy a cream');
const task = new Task('Buy a cream', new Date())

console.log(todo);
console.log(task);