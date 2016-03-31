import {bootstrap}    from 'angular2/platform/browser';
// import { provide } from 'angular2/core';

import {AppComponent} from './app.component';
import {TodoService} from './todo/services/todo.service';

// bootstrap(AppComponent, [provide('whatever', {useClass: TodoService})]);
bootstrap(AppComponent, [TodoService]);
