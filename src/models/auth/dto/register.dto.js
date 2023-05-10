import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export class RegisterDTO {
  loginID;
  password;
  nickname;
  name;
  phonenum;
  selfIntroduce;
  birthday;
  address;

  constructor(props) {
    this.loginID = props.loginID;
    this.password = props.password;
    this.nickname = props.nickname;
    this.name = props.name;
    this.phonenum = props.phonenum;
    this.selfIntroduce = props.selfIntroduce;
    this.birthday = props.birthday;
    this.address = props.address;
  }

  async hashPassword() {
    const hashedPassword = await bcrypt.hash(
      this.password,
      Number(process.env.PASSWORD_SALT)
    );

    return hashedPassword;
  }
}
