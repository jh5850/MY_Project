import database from "../../../database";
import { UserService } from "../../users/service";
import { CategoryService } from "../../task_categories/service";

export class TaskService {
  userService;
  categoryService;
  constructor() {
    this.userService = new UserService();
    this.categoryService = new CategoryService();
  }
  //findById, findMany, create, update, delete
  //

  async findTaskById(id) {
    const task = await database.task.findUnique({
      where: {
        id,
      },
    });

    if (!task)
      throw { status: 404, message: "알바 모집글을 찾을 수 없습니다." };
    return task;
  }

  async findTasks({ skip, take }) {
    const tasks = await database.task.findMany({
      skip,
      take,
    });

    const count = await database.task.count();

    return {
      tasks,
      count,
    };
  }

  // props : CreateTaskDTO
  async createTask(props) {
    const user = await this.userService.findUserById(props.userId);

    const taskCategory = await this.categoryService.findCategoryById(
      props.taskCategoryId
    );

    const newTask = await database.task.create({
      data: {
        title: props.title,
        time: props.time,
        cost: props.cost,
        description: props.description,
        address: props.address,
        detailAddress: props.detailAddress,
        isFinished: props.isFinished,
        TaskEmployee: props.TaskEmployee,
        user: {
          connect: {
            id: user.id,
          },
        },
        taskCategory: {
          connect: {
            id: taskCategory.id,
          },
        },
      },
    });

    return newTask.id;
  }

  async updateTask(id, props) {
    const isExist = await database.task.findUnique({
      where: {
        id,
      },
    });

    if (!isExist)
      throw { status: 404, message: "알바 모집글을 찾을 수 없습니다." };

    await database.task.update({
      where: {
        id: isExist.id,
      },
      data: {
        title: props.title,
        time: props.time,
        cost: props.cost,
        description: props.description,
        isFinished: props.isFinished,
        TaskEmployee: props.TaskEmployee,
      },
    });
  }

  async deleteTask(id) {
    const isExist = await database.task.findUnique({
      where: {
        id,
      },
    });

    if (!isExist)
      throw { status: 404, message: "알바 모집글을 찾을 수 없습니다." };

    await database.task.delete({
      where: {
        id: isExist.id,
      },
    });
  }
}
