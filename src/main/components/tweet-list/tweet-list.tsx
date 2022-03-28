import { TweetListProps } from "./tweet-list.interface";
import { Title } from "../../../commons/title/title";
import { Tweet } from "../../../types/tweet.interface";
import { CardTweet } from "../../../commons/card-tweet/card-tweet";
import { timeAgo } from "../../../utils/date.utils";
import "./tweet-list.scss";

export const TweetList = ({
  title,
  tweets,
  loading = false,
}: TweetListProps) => {
  return (
    <div className="tweet-list">
      <div className="tweet-list__title">
        <Title label={title} loading={loading}></Title>
      </div>
      <div className={`tweet-list__container ${loading ? "loading" : ""}`}>
        {tweets.map((tweet: Tweet) => (
          <CardTweet
            key={tweet.id}
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
