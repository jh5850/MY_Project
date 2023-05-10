import bcrypt from "bcrypt";

export class LoginDTO {
  loginID;
  password;

  constructor(props) {
    this.loginID = props.loginID;
    this.password = props.password;
  }

  async comparePassword(password) {
    const isCorrect = await bcrypt.compare(this.password, password);
    return isCorrect;
  }
}
