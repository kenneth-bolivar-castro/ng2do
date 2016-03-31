import { Component } from 'angular2/core';
// import { Inject } from 'angular2/core';

import {TodoService} from '../services/todo.service';
import {TodoModel} from '../models/todo-model';

@Component({
  selector: 'todo-input',
  template: `<div>
    <form (submit)="onSubmit()">
      <input type="text" [(ngModel)]="todoModel.title" />
    </form>
  </div>`,
})
export class TodoInputComponent {
  todoModel:TodoModel = new TodoModel();

  // constructor(@Inject('whatever') private todoService){}
  // constructor(@Inject(TodoService) private todoService){}
  constructor(private todoService: TodoService){}

  onSubmit(){
    // this.todoService.todos.push(this.todoModel);
    this.todoService.addTodo(this.todoModel);
    console.log(this.todoService);
    this.todoModel = new TodoModel();
  }
}
