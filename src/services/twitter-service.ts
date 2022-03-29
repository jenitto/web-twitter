import { MapAPITweet, MapAPITweets } from "../adapters/tweet.adapter";
import {
  MapAPIUser,
  MapAPIUsers,
  MapToAPIUser,
} from "../adapters/user.adapter";
import { BASE_URL, ENDPOINTS } from "../config/api-config";
import { APITweet } from "../types/api-types/api-tweet.interface";
import { APIUser } from "../types/api-types/api-user.interface";
import { Tweet } from "../types/tweet.interface";
import { User } from "../types/user.interface";
import { sortByDate } from "../utils/array.utils";
import { httpGet, httpPost, httpPut } from "./http-service";

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
  return sortByDate(
    data.flatMap((res) => res),
    "date",
    true
  );
};

export const getUserTweets = async (id: string): Promise<Tweet[]> => {
  const url = BASE_URL + ENDPOINTS.USERS + `/${id}` + ENDPOINTS.TWEETS;
  const params = { sortBy: "createdAt", order: "desc" };
  const res: APITweet[] = await httpGet(url, params);
  return MapAPITweets(res);
};

export const editUser = async (id: string, user: User): Promise<User> => {
  const url = BASE_URL + ENDPOINTS.USERS + `/${id}`;
  const res: APIUser = await httpPut(url, MapToAPIUser(user));
  return MapAPIUser(res);
};

export const sendTweet = async (id: string, tweet: string): Promise<Tweet> => {
  const url = BASE_URL + ENDPOINTS.USERS + `/${id}` + ENDPOINTS.TWEETS;
  const res: APITweet = await httpPost(url, {
    message: tweet,
    createdAt: new Date(),
    media: "",
  });
  return MapAPITweet(res);
};
