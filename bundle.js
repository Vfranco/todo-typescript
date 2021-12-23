(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/core/app.ts":
/*!*************************!*\
  !*** ./src/core/app.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.App = void 0;
const messages_enum_1 = __webpack_require__(/*! ./domain/messages.enum */ "./src/core/domain/messages.enum.ts");
const menu_1 = __webpack_require__(/*! ./domain/menu */ "./src/core/domain/menu.ts");
const task_controller_enum_1 = __webpack_require__(/*! ./domain/task.controller.enum */ "./src/core/domain/task.controller.enum.ts");
class App {
    constructor(tasks, prompt, error) {
        this.tasks = tasks;
        this.prompt = prompt;
        this.error = error;
    }
    build() {
        menu_1.options.forEach((option, index) => console.log(`${(index + 1)} - ${option}`));
        this.selectedOption(this.prompt.selectOption());
    }
    selectedOption(option) {
        //mejorar a una estructura polimorfica
        switch (option) {
            case task_controller_enum_1.ControllerOption.create:
                this.tasks.create({ taskName: this.prompt.getTask(), isComplete: false });
                this.build();
                break;
            case task_controller_enum_1.ControllerOption.read:
                this.tasks.read();
                this.build();
                break;
            case task_controller_enum_1.ControllerOption.update:
                this.tasks.update(Number(this.prompt.getUpdateTask()), this.prompt.getTask());
                this.build();
                break;
            case task_controller_enum_1.ControllerOption.delete:
                this.tasks.delete(Number(this.prompt.getUpdateTask()));
                this.build();
                break;
            case task_controller_enum_1.ControllerOption.change:
                this.tasks.change(Number(this.prompt.getUpdateTask()));
                this.build();
                break;
            default:
                this.error.showErrorMessage(messages_enum_1.PromptMessages.emptyState);
                break;
        }
    }
}
exports.App = App;


/***/ }),

/***/ "./src/core/controller/task.controller.ts":
/*!************************************************!*\
  !*** ./src/core/controller/task.controller.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TaskController = void 0;
class TaskController {
    constructor(todoService) {
        this.todoService = todoService;
    }
    create(task) {
        return this.todoService.createTask(task);
    }
    read() {
        return this.todoService.readAllTasks();
    }
    update(index, taskName) {
        return this.todoService.updateTask(index, taskName);
    }
    delete(index) {
        this.todoService.deleteTask(index);
    }
    change(index) {
        this.todoService.changeStatusTask(index);
    }
}
exports.TaskController = TaskController;


/***/ }),

/***/ "./src/core/domain/menu.ts":
/*!*********************************!*\
  !*** ./src/core/domain/menu.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.options = void 0;
exports.options = [
    'Crear Tarea',
    'Listar Tareas',
    'Actualizar Tarea',
    'Eliminar Tarea',
    'Cambiar Estado Tarea'
];


/***/ }),

/***/ "./src/core/domain/messages.enum.ts":
/*!******************************************!*\
  !*** ./src/core/domain/messages.enum.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PromptMessages = void 0;
var PromptMessages;
(function (PromptMessages) {
    PromptMessages["select"] = "Selecciona una opci\u00F3n del menu";
    PromptMessages["getTask"] = "Ingresa el nombre de la tarea";
    PromptMessages["getUpdateTask"] = "Ingresa el ID de la tarea que deseas actualizar";
    PromptMessages["getRemoveTask"] = "Ingrese el ID de la tarea que desea remover";
    PromptMessages["getChangeStatus"] = "Ingresa el ID de la tarea que deseas completar";
    PromptMessages["emptyState"] = "No existe la opci\u00F3n";
})(PromptMessages = exports.PromptMessages || (exports.PromptMessages = {}));


/***/ }),

/***/ "./src/core/domain/task.controller.enum.ts":
/*!*************************************************!*\
  !*** ./src/core/domain/task.controller.enum.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ControllerOption = void 0;
var ControllerOption;
(function (ControllerOption) {
    ControllerOption["create"] = "1";
    ControllerOption["read"] = "2";
    ControllerOption["update"] = "3";
    ControllerOption["delete"] = "4";
    ControllerOption["change"] = "5";
})(ControllerOption = exports.ControllerOption || (exports.ControllerOption = {}));


/***/ }),

/***/ "./src/core/services/errors.service.ts":
/*!*********************************************!*\
  !*** ./src/core/services/errors.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorServices = void 0;
class ErrorServices {
    showErrorMessage(message) {
        alert(message);
    }
}
exports.ErrorServices = ErrorServices;


/***/ }),

/***/ "./src/core/services/prompt.service.ts":
/*!*********************************************!*\
  !*** ./src/core/services/prompt.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PromptServices = void 0;
const messages_enum_1 = __webpack_require__(/*! ./../domain/messages.enum */ "./src/core/domain/messages.enum.ts");
class PromptServices {
    selectOption() {
        return window.prompt(messages_enum_1.PromptMessages.select);
    }
    getTask() {
        return window.prompt(messages_enum_1.PromptMessages.getTask);
    }
    getUpdateTask() {
        return window.prompt(messages_enum_1.PromptMessages.getUpdateTask);
    }
    getRemoveTask() {
        return window.prompt(messages_enum_1.PromptMessages.getRemoveTask);
    }
    getChangeStatus() {
        return window.prompt(messages_enum_1.PromptMessages.getChangeStatus);
    }
}
exports.PromptServices = PromptServices;


/***/ }),

/***/ "./src/core/services/todo.service.ts":
/*!*******************************************!*\
  !*** ./src/core/services/todo.service.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Todo = void 0;
class Todo {
    constructor() {
        this.myListasks = [];
    }
    createTask(task) {
        this.myListasks.push(task);
    }
    readAllTasks() {
        this.myListasks.forEach((task, index) => console.log(`ID: ${index + 1} - ${task.taskName} | ${(!task.isComplete) ? 'No Completada' : 'Completada'}`));
    }
    updateTask(index, taskNameUpdate) {
        this.myListasks[index - 1].taskName = taskNameUpdate;
    }
    deleteTask(index) {
        this.myListasks.splice((index - 1), 1);
    }
    changeStatusTask(index) {
        this.myListasks[index - 1].isComplete = true;
    }
}
exports.Todo = Todo;


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const app_1 = __webpack_require__(/*! ./src/core/app */ "./src/core/app.ts");
const task_controller_1 = __webpack_require__(/*! ./src/core/controller/task.controller */ "./src/core/controller/task.controller.ts");
const errors_service_1 = __webpack_require__(/*! ./src/core/services/errors.service */ "./src/core/services/errors.service.ts");
const prompt_service_1 = __webpack_require__(/*! ./src/core/services/prompt.service */ "./src/core/services/prompt.service.ts");
const todo_service_1 = __webpack_require__(/*! ./src/core/services/todo.service */ "./src/core/services/todo.service.ts");
class ApplicationStart {
    static main(app) {
        var _a;
        app.build();
        (_a = document.querySelector('#btn-start')) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => app.build());
    }
}
ApplicationStart.main(new app_1.App(new task_controller_1.TaskController(new todo_service_1.Todo), new prompt_service_1.PromptServices, new errors_service_1.ErrorServices));

})();

/******/ })()
;

},{}]},{},[1]);
