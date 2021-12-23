import { PromptMessages } from './../domain/messages.enum';

export class PromptServices {

    selectOption(): string | null {
        return window.prompt(PromptMessages.select);
    }

    getTask(): string | null {
        return window.prompt(PromptMessages.getTask);
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