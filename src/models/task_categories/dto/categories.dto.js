export class CategoriesDTO {
  id;
  category;

  constructor(taskCategory) {
    this.id = taskCategory.id;
    this.category = taskCategory.category;
  }
}
