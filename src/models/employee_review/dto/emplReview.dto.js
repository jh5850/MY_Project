import { UsersDTO } from "../../users/dto";
import { TasksDTO } from "../../tasks/dto";
import { ReviewChecklistDTO } from "../../review_checklist/dto";

export class EmplReviewDTO {
  id;
  title;
  content;
  employee;
  employer;
  task;
  reviewChklist;

  constructor(props) {
    (this.id = props.id),
      (this.title = props.title),
      (this.content = props.content),
      (this.employee = new UsersDTO(props.employee)),
      (this.employer = new UsersDTO(props.employer)),
      (this.task = new TasksDTO(props.task)),
      (this.reviewChklist = new ReviewChecklistDTO(props.reviewChklist));
  }
}
