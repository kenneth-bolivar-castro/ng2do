import { Component, Input, Output, EventEmitter } from 'angular2/core';

@Component({
  selector: 'todo-item',
  styles: [`
    .completed {
      text-decoration: line-through;
    }
  `],
  template: `<div>
      <span [ngClass]="todo.status">{{todo.title}}</span>
      <button (click)="toggle.emit(todo)">toggle</button>
  </div>`
})
export class TodoItemComponent {
  @Input() todo;
  @Output() toggle = new EventEmitter();
}
