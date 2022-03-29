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
  image: Number(apiTweet.id) % 2 ? apiTweet.media : "", // Mock to filter media in some cases
  author: MapAPIUser(apiTweet.author),
});
