import { EmplReviewsDTO } from "../../employee_review/dto/emplReviews.dto";

export class ReviewChecklistDTO {
  id;
  GoodAtWork;
  GoodManner;
  GoodPromise;
  GoodCommunicate;
  WantToWorkAgain;
  emplReview;

  constructor(props) {
    (this.GoodAtWork = props.GoodAtWork),
      (this.GoodManner = props.GoodManner),
      (this.GoodPromise = props.GoodPromise),
      (this.GoodCommunicate = props.GoodCommunicate),
      (this.WantToWorkAgain = props.WantToWorkAgain),
      (this.emplReview = new EmplReviewsDTO(props.emplReview));
  }
}
