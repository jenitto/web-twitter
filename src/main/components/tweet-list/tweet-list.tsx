import { TweetListProps } from "./tweet-list.interface";
import { Title } from "../../../commons/title/title";
import { Tweet } from "../../../types/tweet.interface";
import { CardTweet } from "../../../commons/card-tweet/card-tweet";
import "./tweet-list.scss";
import { timeAgo } from "../../../utils/date.utils";

export const TweetList = ({
  title,
  tweets,
  loading = false,
}: TweetListProps) => {
  return (
    <div className="tweet-list">
      <Title label={title}></Title>
      <div className="user-list__container">
        {tweets.map((tweet: Tweet) => (
          <CardTweet
            title={tweet.author.name}
            subtitle={timeAgo(tweet.date)}
            avatar={tweet.author.image}
            message={tweet.content}
            image={tweet.image}
            loading={loading}
          ></CardTweet>
        ))}
      </div>
    </div>
  );
};
