const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove
// Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '59776e005842faa33e4c0031'}).then((todo) => {
  console.log(todo);
});

Todo.findByIdAndRemove('59776e005842faa33e4c0031').then((todo) => {
  console.log(todo);
});
