import { Provider } from "@angular/core";
import { RepositoryProvider } from "@app/core/constants/repository";
import { TaskService } from "@app/services/tasks.service";

export const TaskProvider : Provider = {
  provide : RepositoryProvider.taskRepository,
  useClass : TaskService
}
