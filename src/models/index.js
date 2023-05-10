import { AuthController } from "./auth";
import { UserController, UserSwagger } from "./users";
import { TaskController } from "./tasks";
import { CategoryController } from "./task_categories";
import { TodoWorkController } from "./todoworks";
import { EmplReviewController } from "./employee_review";
import { ReviewChklistController } from "./review_checklist";

export const Controllers = [
  UserController,
  AuthController,
  TaskController,
  CategoryController,
  TodoWorkController,
  EmplReviewController,
  ReviewChklistController,
];
export const Swaggers = {
  // UserSwagger,
};
