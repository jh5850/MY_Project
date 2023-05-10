import { Router } from "express";
// import { pagination } from "../../../middleware/pagination";
import { CategoriesDTO, CreateCategoryDTO } from "../dto";
import { CategoryService } from "../service";

// Router
class CategoryController {
  router;
  path = "/categories";
  categoryService;

  constructor() {
    this.router = Router();
    this.init();
    this.categoryService = new CategoryService();
  }

  init() {
    this.router.post("/", this.createCategory.bind(this));
    this.router.get("/", this.getCategories.bind(this));
    this.router.get("/:id", this.getCategory.bind(this));
  }

  async getCategories(req, res, next) {
    try {
      const { taskCategories, count } =
        await this.categoryService.findCategories();
      res.status(200).json({
        taskCategories: taskCategories.map(
          (taskCategory) => new CategoriesDTO(taskCategory)
        ),
        count,
      });
    } catch (err) {
      next(err);
    }
  }

  async getCategory(req, res, next) {
    try {
      const { id } = req.params;
      const category = await this.categoryService.findCategoryById(id);

      res.status(200).json({ category: new CategoriesDTO(category) });
    } catch (err) {
      next(err);
    }
  }

  async createCategory(req, res, next) {
    try {
      const createCategoryDto = new CreateCategoryDTO(req.body);

      const newCategoryId = await this.categoryService.createCategory(
        createCategoryDto
      );

      res.status(201).json({ id: newCategoryId });
    } catch (err) {
      next(err);
    }
  }
}

const categoryController = new CategoryController();
export default categoryController;
