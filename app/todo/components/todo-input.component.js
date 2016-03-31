System.register(['angular2/core', '../services/todo.service', '../models/todo-model'], function(exports_1, context_1) {
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
    var core_1, todo_service_1, todo_model_1;
    var TodoInputComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (todo_service_1_1) {
                todo_service_1 = todo_service_1_1;
            },
            function (todo_model_1_1) {
                todo_model_1 = todo_model_1_1;
            }],
        execute: function() {
            TodoInputComponent = (function () {
                // constructor(@Inject('whatever') private todoService){}
                // constructor(@Inject(TodoService) private todoService){}
                function TodoInputComponent(todoService) {
                    this.todoService = todoService;
                    this.todoModel = new todo_model_1.TodoModel();
                }
                TodoInputComponent.prototype.onSubmit = function () {
                    // this.todoService.todos.push(this.todoModel);
                    this.todoService.addTodo(this.todoModel);
                    console.log(this.todoService);
                    this.todoModel = new todo_model_1.TodoModel();
                };
                TodoInputComponent = __decorate([
                    core_1.Component({
                        selector: 'todo-input',
                        template: "<div>\n    <form (submit)=\"onSubmit()\">\n      <input type=\"text\" [(ngModel)]=\"todoModel.title\" />\n    </form>\n  </div>",
                    }), 
                    __metadata('design:paramtypes', [todo_service_1.TodoService])
                ], TodoInputComponent);
                return TodoInputComponent;
            }());
            exports_1("TodoInputComponent", TodoInputComponent);
        }
    }
});
//# sourceMappingURL=todo-input.component.js.map