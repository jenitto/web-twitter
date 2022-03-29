import { Tweet } from "../../../types/tweet.interface";

export interface TweetListProps {
  title: string;
  tweets: Tweet[];
  loading?: boolean;
}
