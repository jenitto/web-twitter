import { APIUser } from "../types/api-types/api-user.interface";
import { User } from "../types/user.interface";

export const MapAPIUsers = (data: APIUser[]): User[] => {
  return data.map(MapAPIUser);
};

export const MapAPIUser = (apiUser: APIUser): User => ({
  id: apiUser.id,
  name: apiUser.name,
  follow: apiUser.followed,
  image: apiUser.avatar,
});

export const MapToAPIUser = (user: User): APIUser => ({
  id: user.id,
  name: user.name,
  followed: user.follow,
  avatar: user.image,
});
