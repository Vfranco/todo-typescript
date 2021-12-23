import { TaskController } from "./controller/task.controller";
import { options } from "./domain/menu";
import { PromptMessages } from './domain/messages.enum';
import { ControllerOption } from './domain/task.controller.enum';
import { ErrorServices } from './services/errors.service';
import { PromptServices } from './services/prompt.service';

export class App {

    constructor(
        private tasks: TaskController,
        private prompt: PromptServices,
        private error: ErrorServices) { }

    build(): void {
        options.forEach((option, index) => console.log(`${(index + 1)} - ${option}`));
        this.selectedOption(this.prompt.selectOption());
    }

    selectedOption(option: string | null): void {
        //mejorar a una estructura polimorfica
        switch (option) {
            case ControllerOption.create:
                this.tasks.create({ taskName: this.prompt.getTask(), isComplete: false });
                this.build();
                break;
            case ControllerOption.read:
                this.tasks.read();
                this.build();
                break;
            case ControllerOption.update:
                this.tasks.update(Number(this.prompt.getUpdateTask()), this.prompt.getUpdateTaskName());
                this.build();
                break;
            case ControllerOption.delete:
                this.tasks.delete(Number(this.prompt.getUpdateTask()));
                this.build();
                break;
            case ControllerOption.change:
                this.tasks.change(Number(this.prompt.getUpdateTask()));
                this.build();
                break;
            default:
                this.error.showErrorMessage(PromptMessages.emptyState);
                break;
        }
    }
}
