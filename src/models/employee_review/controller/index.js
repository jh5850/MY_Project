import { Router } from "express";
import { pagination } from "../../../middleware/pagination";
import { EmplReviewsDTO, CreateEmplReviewDTO } from "../dto";
import { EmplReviewService } from "../service";

class EmplReviewController {
  router;
  path = "/empl-review";
  emplReviewService;

  constructor() {
    this.router = new Router();
    this.init();
    this.emplReviewService = new EmplReviewService();
  }

  init() {
    this.router.get("/", this.getEmplReviews.bind(this));
    this.router.post("/", this.createEmplReview.bind(this));
  }

  async getEmplReviews(req, res, next) {
    try {
      const { emplReviews, count } =
        await this.emplReviewService.findEmplReviews();

      res.status(200).json({ emplReviews, count });
    } catch (err) {
      next(err);
    }
  }

  async createEmplReview(req, res, next) {
    try {
      const Employer = req.user;
      if (!Employer) throw { status: 401, message: "로그인을 진행해주세요." };
      const body = req.body;

      const newEmplReviewId = await this.emplReviewService.createEmplReview(
        new CreateEmplReviewDTO({
          title: body.title,
          content: body.content,
          employerId: Employer.id,
          taskId: body.taskId,
          employeeId: body.employeeId,
          reviewChklistId: body.reviewChklistId,
        })
      );

      res.status(201).json({ id: newEmplReviewId });
    } catch (err) {
      next(err);
    }
  }
}

const emplReviewController = new EmplReviewController();
export default emplReviewController;
