
import { TestBed } from "@angular/core/testing";
import { TASKDATA } from "@app/core/mock/task.mock";
import { Task } from "@app/domain/task.model";
import { TaskService } from "./tasks.service";

describe('TaskService', () => {

  let taskService: TaskService, taskList: Task[];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskService]
    });

    taskService = TestBed.inject(TaskService);
  })

  it('Should add Tasks', () => {
    expect(taskService.createTask(TASKDATA.task)).toBeTrue();
  });

  it('Should list the tasks', () => {
    taskService.createTask(TASKDATA.task);
    expect(taskService.readAllTasks().length).toBeGreaterThan(0);
  })

  it('Should delete a task', () => {
    taskService.createTask(TASKDATA.task);
    taskService.deleteTask(0);
    expect(taskService.tasks.length).toBe(0);
  })

  it('Should update the taskName', () => {
    taskService.createTask(TASKDATA.task);
    taskService.updateTask(0, 'Tarea Actualizada');

    expect(taskService.tasks[0].taskName).toBe('Tarea Actualizada');
  })

  it('Should change the status of a task', () => {
    taskService.createTask(TASKDATA.task);
    taskService.changeStateTask(0);

    expect(taskService.tasks[0].isComplete).toBeTrue();
  });
});
