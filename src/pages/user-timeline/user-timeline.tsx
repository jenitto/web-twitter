import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIntl } from "react-intl";
import { Header } from "../components/header/header";
import { TweetList } from "../components/tweet-list/tweet-list";
import { getUser, getUserTweets } from "../../services/twitter-service";
import { User } from "../../types/user.interface";
import { Tweet } from "../../types/tweet.interface";
import "./user-timeline.scss";

function UserTimeline() {
  let { id } = useParams();

  const { formatMessage } = useIntl();

  const [user, setUser] = useState<User>();
  const [timeline, setTimeline] = useState<Tweet[]>([]);

  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [loadingTimeline, setLoadingTimeline] = useState<boolean>(true);

  useEffect(() => {
    if (!id) {
      return;
    }
    loadUser(id);
    loadUserTweets(id);
  }, []);

  const loadUser = async (userId: string) => {
    setLoadingUser(true);
    const user = await getUser(userId);
    setUser(user);
    setLoadingUser(false);
  };

  const loadUserTweets = async (userId: string) => {
    setLoadingTimeline(true);
    const tweets = await getUserTweets(userId);
    setTimeline(tweets);
    setLoadingTimeline(false);
  };

  return (
    <div className="user-timeline">
      <Header user={user} loading={loadingUser} />
      <div className="user-timeline__timeline">
        <TweetList
          title={formatMessage({ id: "timeline" })}
          tweets={timeline}
          loading={loadingTimeline}
        />
      </div>
    </div>
  );
}
export default UserTimeline;
