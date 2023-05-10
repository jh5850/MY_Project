import database from "../../../database";
import { UserService } from "../../users/service";
import { TaskService } from "../../tasks/service";

export class TodoWorkService {
  userService;
  taskService;
  constructor() {
    this.userService = new UserService();
    this.taskService = new TaskService();
  }

  async findTodoWorkById(id) {
    const todowork = await database.todoWork.findUnique({
      where: {
        id,
      },
    });

    if (!todowork)
      throw { status: 404, message: "수행해야 할 알바가 없습니다." };
    return todowork;
  }

  async createTodoWork(props) {
    const user = await this.userService.findUserById(props.userId);

    const task = await this.taskService.findTaskById(props.taskId);

    const newTodoWork = await database.todoWork.create({
      data: {
        user: {
          connect: {
            id: user.id,
          },
        },
        task: {
          connect: {
            id: task.id,
          },
        },
      },
    });

    return newTodoWork.id;
  }

  async deleteTodoWork(id) {
    const isExist = await database.todoWork.findUnique({
      where: {
        id,
      },
    });

    if (!Exist) throw { status: 404, message: "수행할 알바가 없습니다." };

    await database.todoWork.delete({
      where: {
        id: isExist.id,
      },
    });
  }
}
