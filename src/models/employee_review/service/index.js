import database from "../../../database";
import { UserService } from "../../users/service";
import { TaskService } from "../../tasks/service";
import { ReviewChecklistService } from "../../review_checklist/service";

export class EmplReviewService {
  userService;
  taskService;
  reviewChklistService;

  constructor() {
    this.userService = new UserService();
    this.taskService = new TaskService();
    this.reviewChklistService = new ReviewChecklistService();
  }

  async findEmplReviewById(id) {
    const emplReview = await database.employeeReview.findUnique({
      where: {
        id,
      },
    });

    if (!emplReview)
      throw { status: 404, message: "알바 후기글을 찾을 수 없습니다." };
    return emplReview;
  }

  async findEmplReviews() {
    const emplReviews = await database.employeeReview.findMany();

    const count = await database.employeeReview.count();

    return {
      emplReviews,
      count,
    };
  }

  async createEmplReview(props) {
    const employee = await this.userService.findUserById(props.employeeId);

    const employer = await this.userService.findUserById(props.employerId);

    const task = await this.taskService.findTaskById(props.taskId);

    const reviewChklist = await this.reviewChklistService.findEmplReviewById(
      props.reviewChklistId
    );

    const newEmplReview = await database.employeeReview.create({
      data: {
        title: props.title,
        content: props.content,
        employee: {
          connect: {
            id: employee.id,
          },
        },
        employer: {
          connect: {
            id: employer.id,
          },
        },
        task: {
          connect: {
            id: task.id,
          },
        },
        reviewChecklist: {
          connect: {
            id: reviewChklist.id,
          },
        },
      },
    });

    return newEmplReview.id;
  }
}
