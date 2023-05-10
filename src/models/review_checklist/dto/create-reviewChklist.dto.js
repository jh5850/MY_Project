export class CreateReviewChecklistDTO {
  GoodAtWork;
  GoodManner;
  GoodPromise;
  GoodCommunicate;
  WantToWorkAgain;
  emplReviewId;

  constructor(props) {
    (this.GoodAtWork = props.GoodAtWork),
      (this.GoodManner = props.GoodManner),
      (this.GoodPromise = props.GoodPromise),
      (this.GoodCommunicate = props.GoodCommunicate),
      (this.WantToWorkAgain = props.WantToWorkAgain),
      (this.emplReviewId = props.emplReviewId);
  }
}
