import { Injectable } from 'angular2/core';

import {TodoModel} from '../models/todo-model';

@Injectable()
export class TodoService {
  todos = [
    new TodoModel("eat"),
    new TodoModel("sleep"),
    new TodoModel("code", "completed"),
  ];
  addTodo(todo: TodoModel){
    this.todos = [...this.todos, todo];
  }
  toggleTodo(todo:TodoModel){
    // todo.toggle();

    const status = todo.status === 'started' ? 'completed' : 'started';
    const toggledTodo = Object.assign({}, todo, {status});

    const i = this.todos.indexOf(todo);
    this.todos = [
      ...this.todos.slice(0, i),
      toggledTodo,
      ...this.todos.slice(i+1)
    ];
  }
}
