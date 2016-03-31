System.register(['angular2/core', '../services/todo.service', './todo-item.component', '../pipes/by-status.pipe', '../../search/pipes/search.pipe'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, todo_service_1, todo_item_component_1, by_status_pipe_1, search_pipe_1;
    var TodoListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_item_component_1_1) {
                todo_item_component_1 = todo_item_component_1_1;
            },
            function (by_status_pipe_1_1) {
                by_status_pipe_1 = by_status_pipe_1_1;
            },
            function (search_pipe_1_1) {
                search_pipe_1 = search_pipe_1_1;
            }],
        execute: function() {
            TodoListComponent = (function () {
                function TodoListComponent(todoService) {
                    this.todoService = todoService;
                }
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoListComponent.prototype, "status", void 0);
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], TodoListComponent.prototype, "term", void 0);
                TodoListComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-list',
                        template: "\n    <div>\n      <ul>\n        <li *ngFor=\"#todo of todoService.todos\n        |bystatus: status\n        |search: term\" >\n\n          <todo-item\n          [todo]=\"todo\"\n          (toggle)=\"todoService.toggleTodo($event)\"\n          ></todo-item>\n        </li>\n      </ul>\n    </div>\n  ",
                        directives: [todo_item_component_1.TodoItemComponent],
                        // pipes: [StartsWithSFilter, StartedPipe]
                        pipes: [by_status_pipe_1.ByStatusPipe, search_pipe_1.SearchPipe]
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoListComponent);
                return TodoListComponent;
            }());
            exports_1("TodoListComponent", TodoListComponent);
        }
    }
});
//# sourceMappingURL=todo-list.component.js.map