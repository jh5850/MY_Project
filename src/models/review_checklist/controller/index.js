import { Router } from "express";
import { ReviewChecklistDTO, CreateReviewChecklistDTO } from "../dto";
import { EmplReviewService } from "../../employee_review/service";
import { ReviewChecklistService } from "../service";

class ReviewChklistController {
  router;
  path = "/review-chklist";
  emplReviewService;

  constructor() {
    this.router = new Router();
    this.init();
    this.reviewChklistService = new ReviewChecklistService();
  }

  init() {
    this.router.post("/", this.createReviewChklist.bind(this));
  }

  async createReviewChklist(req, res, next) {
    try {
      const body = req.body;

      const newReviewChklist =
        await this.reviewChklistService.createReviewChklist(
          new CreateReviewChecklistDTO({
            GoodAtWork: body.GoodAtWork,
            GoodManner: body.GoodManner,
            GoodPromise: body.GoodPromise,
            GoodCommunicate: body.GoodCommunicate,
            WantToWorkAgain: body.WantToWorkAgain,
            emplReviewId: body.emplReviewId,
          })
        );

      res.status(201).json({ id: newReviewChklist });
    } catch (err) {
      next(err);
    }
  }
}

const reviewChklistController = new ReviewChklistController();
export default reviewChklistController;
