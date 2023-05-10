import express from "express";
import cors from "cors";
import helmet from "helmet";
import { Controllers } from "./models";
import database from "./database";
import { jwtAuth } from "./middleware";

(async () => {
  const app = express();
  await database.$connect();

  // 미들웨어
  app.use(cors());
  app.use(helmet());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true, limit: "700mb" }));
  app.use(jwtAuth);

  // app.use("/users", UserController.router);

  Controllers.forEach((controller) => {
    app.use(controller.path, controller.router);
  });

  // req: 요청 -> Request
  // res: 응답 -> Response
  app.get("/", (req, res) => {
    res.send("내 근처 손쉬운 알바");
  });

  app.use((err, req, res, next) => {
    console.log(err);

    res
      .status(err.status || 500)
      .json({ message: err.message || "서버에서 에러가 발생하였습니다." });
  });

  app.listen(8000, () => {
    console.log("서버가 시작되었습니다.");
  });
})();
