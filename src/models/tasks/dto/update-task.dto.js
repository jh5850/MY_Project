export class UpdateTaskDTO {
  title;
  time;
  cost;
  description;
  isFinished;
  TaskEmployee;

  constructor(task) {
    (this.title = task.title ?? undefined),
      (this.time = task.time ?? undefined),
      (this.cost = task.cost ?? undefined),
      (this.description = task.description ?? undefined),
      (this.isFinished = task.isFinished ?? undefined),
      (this.TaskEmployee = task.TaskEmployee ?? undefined);
  }
}
