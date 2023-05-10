import { UsersDTO } from "../../users/dto/users.dto";
import { TasksDTO } from "../../tasks/dto/tasks.dto";

export class TodoWorkDTO {
  user;
  task;

  constructor(props) {
    this.user = new UsersDTO(props.user);
    this.task = new TasksDTO(props.task);
  }
}
