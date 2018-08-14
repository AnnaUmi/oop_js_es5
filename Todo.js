function Todo(title, completed = false){
    this.title = title;
    this.completed = completed;
}
Todo.prototype.complete = function() {
    this.completed = true;
}

module.exports = Todo;