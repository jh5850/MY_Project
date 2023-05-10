export class CreateTodoWorkDTO {
  userId;
  taskId;

  constructor(props) {
    (this.userId = props.userId), (this.taskId = props.taskId);
  }
}
