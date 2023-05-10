export class UpdateUserDTO {
  nickname;
  phonenum;
  selfIntroduce;
  address;

  constructor(user) {
    (this.nickname = user.nickname ?? undefined),
      (this.phonenum = user.phonenum ?? undefined),
      (this.selfIntroduce = user.selfIntroduce ?? undefined),
      (this.address = user.address ?? undefined);
  }
}
