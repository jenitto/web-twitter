import { User } from "./user.interface";

export interface Tweet {
  id: string;
  date: Date;
  content: string;
  image: string;
  author: User;
}
