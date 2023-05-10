export class CreateTaskDTO {
  title;
  time;
  cost;
  description;
  address;
  detailAddress;
  isFinished;
  TaskEmployee;
  userId;
  taskCategoryId;

  constructor(props) {
    (this.title = props.title),
      (this.time = props.time),
      (this.cost = props.cost),
      (this.description = props.description),
      (this.address = props.address),
      (this.detailAddress = props.detailAddress),
      (this.isFinished = props.isFinished),
      (this.TaskEmployee = undefined),
      (this.userId = props.userId),
      (this.taskCategoryId = props.taskCategoryId);
  }
}
