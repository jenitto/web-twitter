import { useEffect, useState } from "react";
import { useIntl } from "react-intl";
import { useNavigate } from "react-router-dom";
import {
  editUser,
  getTimeline,
  getUsers,
  getUserTweets,
  sendTweet,
} from "../../services/twitter-service";
import { Tweet } from "../../types/tweet.interface";
import { User } from "../../types/user.interface";
import { addItem, sortByDate, updateItem } from "../../utils/array.utils";
import {
  filterCurrentUser,
  filterFollowed,
  filterUnfollowed,
} from "../../utils/user.utils";
import { TweetBox } from "../components/tweet-box/tweet-box";
import { TweetList } from "../components/tweet-list/tweet-list";
import { UserList } from "../components/user-list/user-list";
import { HomeProps } from "./home.interface";
import "./home.scss";

const Home = ({ user, loading }: HomeProps) => {
  const navigate = useNavigate();
  const { formatMessage } = useIntl();

  const [users, setUsers] = useState<User[]>([]);
  const [timeline, setTimeline] = useState<Tweet[]>([]);

  const [loadingTimeline, setLoadingTimeline] = useState<boolean>(true);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);

  useEffect(() => {
    if (!user) {
      return;
    }
    loadUsers();
  }, [user]);

  const loadUsers = async () => {
    setLoadingUsers(true);
    const users = await getUsers();
    setUsers(users);
    setLoadingUsers(false);
    loadTimeline(users);
  };

  const loadTimeline = async (users: User[]) => {
    setLoadingTimeline(true);
    const following = filterFollowed(users);
    const timeline = await getTimeline(following);
    setTimeline(timeline);
    setLoadingTimeline(false);
  };

  const loadUserTweets = async (user: User) => {
    setLoadingTimeline(true);
    const tweets = await getUserTweets(user.id);
    const newTimeline = sortByDate([...timeline, ...tweets], "date", true);
    setTimeline(newTimeline);
    setLoadingTimeline(false);
  };

  const _handleToggleFollowUser = (user: User) => {
    const follow = !user.follow;
    const postUser = { ...user, follow };
    editUser(user.id, postUser);
    // Next is for optimistic performance
    setUsers(updateItem(users, postUser));
    _handleTimeline(user, follow);
  };

  const _handleTimeline = (user: User, follow: boolean) => {
    if (follow) {
      loadUserTweets(user);
    } else {
      setTimeline(timeline.filter((tweet) => tweet.author.id !== user.id));
    }
  };

  const _handleGoToUserTimeline = (user: User) => {
    navigate(`/user/${user.id}`);
  };

  const submitTweet = (message: string) => {
    if (!user) {
      return;
    }
    sendTweet(user.id, message);
    // Next is for optimistic performance
    addTweetToTimeline(user, message);
  };

  const addTweetToTimeline = (user: User, message: string) => {
    const tweet: Tweet = {
      id: "new",
      date: new Date(),
      content: message,
      author: user,
    };
    setTimeline(addItem(timeline, tweet));
  };

  return (
    <div className="home">
      <div className="home__following">
        <UserList
          title={formatMessage({ id: "welcome" })}
          users={filterCurrentUser(filterFollowed(users), user?.id)}
          loading={loadingUsers}
          onClick={_handleGoToUserTimeline}
          onToggleFollow={_handleToggleFollowUser}
        ></UserList>
      </div>
      <div className="home__follow">
        <UserList
          title={formatMessage({ id: "notFollow" })}
          users={filterCurrentUser(filterUnfollowed(users), user?.id)}
          loading={loadingUsers}
          onClick={_handleGoToUserTimeline}
          onToggleFollow={_handleToggleFollowUser}
        ></UserList>
      </div>
      <div className="home__timeline">
        <TweetList
          title={formatMessage({ id: "timeline" })}
          tweets={timeline}
          loading={loadingTimeline}
        />
      </div>
      <div className="home__message">
        <TweetBox loading={loading} onSubmit={submitTweet} />
      </div>
    </div>
  );
};

export default Home;
