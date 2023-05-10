import database from "../../../database";

export class UserService {
  //findById, findMany, create, update, delete

  async checkUserByloginID(loginID) {
    const user = await database.user.findUnique({
      where: {
        loginID,
      },
    });

    if (!user) return false;

    return user;
  }

  async findUserById(id) {
    const user = await database.user.findUnique({
      where: {
        id,
      },
    });

    if (!user) throw { status: 404, message: "유저를 찾을 수 없습니다." };
    return user;
  }

  async findUsers({ skip, take }) {
    const users = await database.user.findMany({
      skip,
      take,
    });

    const count = await database.user.count();

    return {
      users,
      count,
    };
  }

  async createUser(props) {
    const newUser = await database.user.create({
      data: {
        loginID: props.loginID,
        password: props.password,
        nickname: props.nickname,
        name: props.name,
        phonenum: props.phonenum,
        selfIntroduce: props.selfIntroduce,
        birthday: props.birthday,
        address: props.address,
      },
    });

    return newUser.id;
  }

  async updateUser(id, props) {
    const isExist = await database.user.findUnique({
      where: {
        id,
      },
    });

    if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };

    await database.user.update({
      where: {
        id: isExist.id,
      },
      data: {
        nickname: props.nickname,
        phonenum: props.phonenum,
        selfIntroduce: props.selfIntroduce,
        address: props.address,
        password: props.password,
      },
    });
  }

  async deleteUser(id) {
    const isExist = await database.user.findUnique({
      where: {
        id,
      },
    });

    if (!isExist) throw { status: 404, message: "유저를 찾을 수 없습니다." };

    await database.user.delete({
      where: {
        id: isExist.id,
      },
    });
  }
}
