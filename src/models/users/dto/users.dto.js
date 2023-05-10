export class UsersDTO {
  id;
  loginID;
  password;
  nickname;
  name;
  phonenum;
  selfIntroduce;
  birthday;
  address;

  constructor(user) {
    this.id = user.id;
    this.loginID = user.loginID;
    this.password = user.password;
    this.nickname = user.nickname;
    this.name = user.name;
    this.phonenum = user.phonenum;
    this.selfIntroduce = user.selfIntroduce;
    this.birthday = user.birthday;
    this.address = user.address;
  }
}
