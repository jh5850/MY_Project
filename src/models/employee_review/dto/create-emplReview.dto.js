export class CreateEmplReviewDTO {
  title;
  content;
  employeeId;
  employerId;
  taskId;
  reviewChklistId;

  constructor(props) {
    (this.title = props.title),
      (this.content = props.content),
      (this.employeeId = props.employeeId),
      (this.employerId = props.employerId),
      (this.taskId = props.taskId),
      (this.reviewChklistId = props.reviewChklistId);
  }
}
