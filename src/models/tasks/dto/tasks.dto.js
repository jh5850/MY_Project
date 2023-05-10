import { UsersDTO } from "../../users/dto/users.dto";
import { CategoriesDTO } from "../../task_categories/dto/categories.dto";

export class TasksDTO {
  id;
  title;
  time;
  cost;
  description;
  address;
  detailAddress;
  isFinished;
  createdAt;
  TaskEmployee;
  user;
  taskCategory;

  constructor(props) {
    (this.id = props.id),
      (this.title = props.title),
      (this.time = props.time),
      (this.cost = props.cost),
      (this.description = props.description),
      (this.address = props.address),
      (this.detailAddress = props.detailAddress),
      (this.isFinished = props.isFinished),
      (this.createdAt = props.createdAt),
      (this.TaskEmployee = props.TaskEmployee);
    this.user = new UsersDTO(props.user);
    this.taskCategory = new CategoriesDTO(props.taskCategory);
  }
}
