import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useIntl } from "react-intl";
import { TweetList } from "../components/tweet-list/tweet-list";
import { getUserTweets } from "../../services/twitter-service";
import { Tweet } from "../../types/tweet.interface";
import { Avatar } from "../../commons/avatar/avatar";
import { Title } from "../../commons/title/title";
import { UserTimelineProps } from "./user-timeline.interface";
import "./user-timeline.scss";

function UserTimeline({ user, loading }: UserTimelineProps) {
  let { id } = useParams();

  const { formatMessage } = useIntl();

  const [timeline, setTimeline] = useState<Tweet[]>([]);
  const [loadingTimeline, setLoadingTimeline] = useState<boolean>(true);

  useEffect(() => {
    if (!id || !user) {
      return;
    }
    loadUserTweets(id);
  }, [user]);

  const loadUserTweets = async (userId: string) => {
    setLoadingTimeline(true);
    const tweets = await getUserTweets(userId);
    setTimeline(tweets);
    setLoadingTimeline(false);
  };

  return (
    <div className="user-timeline">
      <div className="user-timeline__user">
        <Avatar image={user?.image} username={user?.name} loading={loading} />
        <Title label={user?.name || ""} loading={loading} spinner={false} />
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
