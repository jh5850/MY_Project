import { Router } from "express";
import { TodoWorkDTO, CreateTodoWorkDTO } from "../dto";
import { TodoWorkService } from "../service";

class TodoWorkController {
  router;
  path = "/todowork";
  todoWorkService;

  constructor() {
    this.router = new Router();
    this.init();
    this.todoWorkService = new TodoWorkService();
  }

  init() {
    this.router.get("/:id", this.getTodoWork.bind(this));
    this.router.post("/", this.createTodoWork.bind(this));
    this.router.delete("/:id", this.deleteTodoWork.bind(this));
  }

  async getTodoWork(req, res, next) {
    try {
      const { id } = req.params;
      const todoWork = await this.todoWorkService.findTodoWorkById(id);

      res.status(200).json({ todoWork: new TodoWorkDTO(todoWork) });
    } catch (err) {
      next(err);
    }
  }

  async createTodoWork(req, res, next) {
    try {
      if (!req.user) throw { status: 401, message: "로그인을 진행해주세요." };
      const body = req.body;

      const newTodoWorkId = await this.todoWorkService.createTodoWork(
        new CreateTodoWorkDTO({
          userId: req.user.i1d,
          taskId: body.taskId,
        })
      );

      res.status(201).json({ id: newTodoWorkId });
    } catch (err) {
      next(err);
    }
  }

  async deleteTodoWork(req, res, next) {
    try {
      const { id } = req.params;

      await this.todoWorkService.deleteTodoWork(id);

      res.status(204).json({});
    } catch (err) {
      next(err);
    }
  }
}

const todoWorkController = new TodoWorkController();
export default todoWorkController;
