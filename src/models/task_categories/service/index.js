import database from "../../../database";

export class CategoryService {
  async findCategoryById(id) {
    const category = await database.taskCategory.findUnique({
      where: {
        id,
      },
    });

    if (!category)
      throw { status: 404, message: "카테고리를 찾을 수 없습니다." };
    return category;
  }

  async findCategories() {
    const taskCategories = await database.taskCategory.findMany();

    const count = await database.taskCategory.count();

    return {
      taskCategories,
      count,
    };
  }

  async createCategory(props) {
    const newCategory = await database.taskCategory.create({
      data: {
        category: props.category,
      },
    });

    return newCategory.id;
  }
}

// async updateUser(id, props) {
//   const isExist = await database.user.findUnique({
//     where: {
//       id,
//     },
//   });

//   if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };

//   await database.user.update({
//     where: {
//       id: isExist.id,
//     },
//     data: {
//       nickname: props.nickname,
//       phonenum: props.phonenum,
//       selfIntroduce: props.selfIntroduce,
//       address: props.address,
//       password: props.password,
//     },
//   });
// }

// async deleteUser(id) {
//   const isExist = await database.user.findUnique({
//     where: {
//       id,
//     },
//   });

//   if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };

//   await database.user.delete({
//     where: {
//       id: isExist.id,
//     },
//   });
// }
