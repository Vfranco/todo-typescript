import { App } from './src/core/app';
import { TaskController } from './src/core/controller/task.controller';
import { ErrorServices } from './src/core/services/errors.service';
import { PromptServices } from './src/core/services/prompt.service';
import { Todo } from './src/core/services/todo.service';

class ApplicationStart {

    static main(app: App): void {
        app.build();
        document.querySelector('#btn-start')?.addEventListener('click', () => app.build());
    }
}

ApplicationStart.main(
    new App(new TaskController(new Todo),
        new PromptServices,
        new ErrorServices)
);