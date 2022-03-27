import { User } from "../types/user.interface";

export const filterFollowed = (users: User[]) =>
  users.filter((user: User) => user.follow);

export const filterUnfollowed = (users: User[]) =>
  users.filter((user: User) => !user.follow);
