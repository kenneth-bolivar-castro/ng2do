import { Component, Input } from 'angular2/core';

import {TodoService} from '../services/todo.service';
import {TodoItemComponent} from './todo-item.component';
// import {StartsWithSFilter} from './starts-with-s.pipe';
// import {StartedPipe} from './started.pipe';
import {ByStatusPipe} from '../pipes/by-status.pipe';
import {SearchPipe} from '../../search/pipes/search.pipe';

@Component({
  selector: 'todo-list',
  template: `
    <div>
      <ul>
        <li *ngFor="#todo of todoService.todos
        |bystatus: status
        |search: term" >

          <todo-item
          [todo]="todo"
          (toggle)="todoService.toggleTodo($event)"
          ></todo-item>
        </li>
      </ul>
    </div>
  `,
  directives: [TodoItemComponent],
  // pipes: [StartsWithSFilter, StartedPipe]
  pipes: [ByStatusPipe, SearchPipe]
})
export class TodoListComponent {
  @Input() status;
  @Input() term;
  constructor(public todoService: TodoService) { }
}
