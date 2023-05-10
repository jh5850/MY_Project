export class UpdateCategoryDTO {
  category;

  constructor(taskCategory) {
    this.category = taskCategory.category;
  }
}
