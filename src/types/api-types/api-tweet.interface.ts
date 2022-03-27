import { APIUser } from "./api-user.interface";

export interface APITweet {
  createdAt: Date;
  message: string;
  media: string;
  id: string;
  UserId: string;
  author: APIUser;
}
