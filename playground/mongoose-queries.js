const {mongoose} = require ('./../server/db/mongoose');
const {Todo} = require ('./../server/models/todo');

var id = '5a5a823ce4c50018116d6dfd';

Todo.find({
	_id : id

}).then((todos)=> {
	console.log('Todos', todos);
});

Todo.findOne({
	_id : id

}).then((todos)=> {
	console.log('Todo', todos);
});


