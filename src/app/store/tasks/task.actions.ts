import { Task } from "@app/domain/tasks/task.model";

export class GetTasks {
  static readonly type: string = '[GET TASKS] Get All Tasks';
}

export class AddTask {

  static readonly type: string = '[POSTS] Add Task';

  constructor(public payload: Task) { }
}

export class UpdateTask {

  static readonly type: string = '[UPDATA] Update Task';

  constructor(public id: number, public taskName: string) { }
}

export class RemoveTask {

  static readonly type: string = '[POSTS] Remove';

  constructor(public id: number) { }
}

export class ChangeStatusTask {

  static readonly type: string = '[CHANGE_STATUS] Complete Task';

  constructor(public id: number) { }
}
