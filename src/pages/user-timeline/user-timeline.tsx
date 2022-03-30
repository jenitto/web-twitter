import { useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIntl } from "react-intl";
import { TweetList } from "../components/tweet-list/tweet-list";
import { getUser, getUserTweets } from "../../services/twitter-service";
import { Tweet } from "../../types/tweet.interface";
import { Avatar } from "../../commons/avatar/avatar";
import { Title } from "../../commons/title/title";
import { User } from "../../types/user.interface";
import "./user-timeline.scss";

function UserTimeline() {
  let { id } = useParams();

  const { formatMessage } = useIntl();

  const [user, setUser] = useState<User>();
  const [timeline, setTimeline] = useState<Tweet[]>([]);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [loadingTimeline, setLoadingTimeline] = useState<boolean>(true);

  const loadUserTweets = useCallback(async (userId: string) => {
    setLoadingTimeline(true);
    const tweets = await getUserTweets(userId);
    setTimeline(tweets);
    setLoadingTimeline(false);
  }, []);

  const loadUser = useCallback(async (id: string) => {
    setLoadingUser(true);
    const user = await getUser(id);
    setUser(user);
    setLoadingUser(false);
  }, []);

  useEffect(() => {
    if (!id) {
      return;
    }
    loadUser(id);
    loadUserTweets(id);
  }, [id, loadUserTweets, loadUser]);

  return (
    <div className="user-timeline">
      <div className="user-timeline__user">
        <Avatar
          image={user?.image}
          username={user?.name}
          loading={loadingUser}
        />
        <Title label={user?.name || ""} loading={loadingUser} spinner={false} />
      </div>
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
