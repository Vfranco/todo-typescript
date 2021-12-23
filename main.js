"use strict";
exports.__esModule = true;
var task_controller_1 = require("./src/core/controller/task.controller");
var app_1 = require("./src/core/app");
var todo_service_1 = require("./src/core/services/todo.service");
var ApplicationStart = /** @class */ (function () {
    function ApplicationStart() {
    }
    ApplicationStart.main = function (app) {
        app.build();
    };
    return ApplicationStart;
}());
ApplicationStart.main(new app_1.App(new task_controller_1.TaskController(new todo_service_1.Todo)));
