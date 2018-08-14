const Todo = require('./Todo');

function Task(title, dueDate, completed) {
    Todo.call(this, title, completed);
    this.dueDate = dueDate;
}
Task.prototype = Object.create(Todo.prototype);
Task.prototype.constructor = Task;

module.exports = Task;