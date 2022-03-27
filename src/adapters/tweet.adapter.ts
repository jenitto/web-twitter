import { APITweet } from "../types/api-types/api-tweet.interface";
import { Tweet } from "../types/tweet.interface";
import { MapAPIUser } from "./user.adapter";

export const MapAPITweets = (data: APITweet[]): Tweet[] => {
  return data.map(MapAPITweet);
};

export const MapAPITweet = (apiTweet: APITweet): Tweet => ({
  id: apiTweet.id,
  date: apiTweet.createdAt,
  content: apiTweet.message,
  image: apiTweet.media,
  author: MapAPIUser(apiTweet.author),
});
