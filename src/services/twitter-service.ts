import { MapAPITweets } from "../adapters/tweet.adapter";
import { MapAPIUser, MapAPIUsers } from "../adapters/user.adapter";
import { BASE_URL, ENDPOINTS } from "../config/api-config";
import { APITweet } from "../types/api-types/api-tweet.interface";
import { APIUser } from "../types/api-types/api-user.interface";
import { Tweet } from "../types/tweet.interface";
import { User } from "../types/user.interface";
import { httpGet } from "./http-service";

export const getUser = async (id: string): Promise<User> => {
  const url = BASE_URL + ENDPOINTS.USERS + `/${id}`;
  const res: APIUser = await httpGet(url);
  return MapAPIUser(res);
};

export const getUsers = async (): Promise<User[]> => {
  const url = BASE_URL + ENDPOINTS.USERS;
  const res: APIUser[] = await httpGet(url);
  return MapAPIUsers(res);
};

export const getTimeline = async (users: User[]): Promise<Tweet[]> => {
  const requests = users
    .filter((user) => user.follow)
    .map((user) => getUserTweets(user.id));
  const data = await Promise.all(requests);
  return data.flatMap((res) => res);
};

export const getUserTweets = async (id: string): Promise<Tweet[]> => {
  const url = BASE_URL + ENDPOINTS.USERS + `/${id}` + ENDPOINTS.TWEETS;
  const res: APITweet[] = await httpGet(url);
  return MapAPITweets(res);
};
