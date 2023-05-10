import { Router } from "express";
import { pagination } from "../../../middleware/pagination";
import { TasksDTO, CreateTaskDTO, UpdateTaskDTO } from "../dto";
import { TaskService } from "../service";

// Router
class TaskController {
  router;
  path = "/tasks";
  taskService;

  constructor() {
    this.router = Router();
    this.init();
    this.taskService = new TaskService();
  }

  init() {
    this.router.get("/", pagination, this.getTasks.bind(this));
    this.router.get("/detail/:id", this.getTask.bind(this));
    this.router.post("/", this.createTask.bind(this));
    this.router.patch("/:id", this.updateTask.bind(this));
    this.router.delete("/:id", this.deleteTask.bind(this));
  }
  async getTasks(req, res, next) {
    try {
      const { tasks, count } = await this.taskService.findTasks({
        skip: req.skip,
        take: req.take,
      });

      res.status(200).json({ tasks, count });
    } catch (err) {
      next(err);
    }
  }

  async getTask(req, res, next) {
    try {
      const { id } = req.params;
      const task = await this.taskService.findTaskById(id);

      res.status(200).json({ task: new TasksDTO(task) });
    } catch (err) {
      next(err);
    }
  }

  async createTask(req, res, next) {
    try {
      if (!req.user) throw { status: 401, message: "로그인을 진행해주세요." };
      const body = req.body;

      const newTaskId = await this.taskService.createTask(
        new CreateTaskDTO({
          title: body.title,
          time: body.time,
          cost: body.cost,
          description: body.description,
          address: body.address,
          detailAddress: body.detailAddress,
          isFinished: body.isFinished,
          TaskEmployee: body.isFinished,
          userId: req.user.id,
          taskCategoryId: body.taskCategoryId,
        })
      );

      res.status(201).json({ id: newTaskId });
    } catch (err) {
      next(err);
    }
  }
  async updateTask(req, res, next) {
    try {
      const { id } = req.params;
      const updateTaskDto = new UpdateTaskDTO(req.body);

      await this.taskService.updateTask(id, updateTaskDto);

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }

  async deleteTask(req, res, next) {
    try {
      const { id } = req.params;

      await this.taskService.deleteTask(id);

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }
}

const taskController = new TaskController();
export default taskController;
