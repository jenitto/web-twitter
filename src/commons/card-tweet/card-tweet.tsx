import { Avatar } from "../avatar/avatar";
import { Card } from "../card/card";
import { TitleUser } from "../title-user/title-user";
import { CardTweetProps } from "./card-tweet.interface";
import "./card-tweet.scss";

export const CardTweet = ({
  title,
  subtitle,
  avatar,
  image,
  message,
  loading,
}: CardTweetProps) => {
  return (
    <Card className="card-tweet">
      <div className="card-tweet__user">
        {avatar && (
          <Avatar image={avatar} username={title} loading={loading}></Avatar>
        )}
      </div>
      <div className="card-tweet__content">
        <div className="card-tweet__title">
          {title && <TitleUser label={title} loading={loading}></TitleUser>}
          {subtitle && <span className="card-tweet__subtitle">{subtitle}</span>}
        </div>
        <p>{message}</p>
        {image && <img className="card-tweet__media" src={image} alt="" />}
      </div>
    </Card>
  );
};
