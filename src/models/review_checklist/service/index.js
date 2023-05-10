import database from "../../../database";
import { EmplReviewService } from "../../employee_review/service";

export class ReviewChecklistService {
  emplReviewService;
  constructor() {
    this.emplReviewService = new EmplReviewService();
  }

  async createReviewChklist(props) {
    const emplReview = await this.emplReviewService.findEmplReviewById(
      props.emplReviewId
    );

    const newChklist = await database.reviewChecklist.create({
      data: {
        GoodAtWork: props.GoodAtWork,
        GoodManner: props.GoodManner,
        GoodCommunicate: props.GoodCommunicate,
        GoodPromise: props.GoodPromise,
        WantToWorkAgain: props.WantToWorkAgain,
        emplReview: {
          connect: {
            id: emplReview.id,
          },
        },
      },
    });

    return newChklist.id;
  }
}
