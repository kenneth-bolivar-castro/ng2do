import {Component} from 'angular2/core';

import {TodoInputComponent} from './todo/components/todo-input.component';
import {TodoListComponent} from './todo/components/todo-list.component';
import {StatusSelectorComponent} from './todo/components/status-selector.component';
import {SearchComponent} from './search/components/search.component';

@Component({
    selector: 'app',
    template: `
      <div>
        <search (update)="term = $event"></search>
        <todo-input></todo-input>
        <status-selector (select)="status = $event"></status-selector>
        <todo-list
        [status]="status"
        [term]="term"
        ></todo-list>
      </div>
    `,
    directives: [
      TodoInputComponent,
      TodoListComponent,
      StatusSelectorComponent,
      SearchComponent
    ]
})
export class AppComponent { }
