import { PromptMessages } from './../domain/messages.enum';

export class PromptServices {

    selectOption(): string | null {
        return window.prompt(PromptMessages.select);
    }

    getTask(): string | null {
        return window.prompt(PromptMessages.getTask);
    }

    getUpdateTaskName(): string | null {
        return window.prompt(PromptMessages.getUpdateTaskName);
    }

    getUpdateTask(): string | null {
        return window.prompt(PromptMessages.getUpdateTask);
    }

    getRemoveTask(): string | null {
        return window.prompt(PromptMessages.getRemoveTask);
    }

    getChangeStatus(): string | null {
        return window.prompt(PromptMessages.getChangeStatus);
    }
}
