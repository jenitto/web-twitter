import { useEffect, useState } from "react";
import { getTimeline, getUser, getUsers } from "../services/twitter-service";
import { Tweet } from "../types/tweet.interface";
import { User } from "../types/user.interface";
import {
  filterCurrentUser,
  filterFollowed,
  filterUnfollowed,
} from "../utils/user.utils";
import { Header } from "./components/header/header";
import { TweetBox } from "./components/tweet-box/tweet-box";
import { TweetList } from "./components/tweet-list/tweet-list";
import { UserList } from "./components/user-list/user-list";
import "./main.scss";

function Main() {
  const [user, setUser] = useState<User>();
  const [users, setUsers] = useState<User[]>([]);
  const [timeline, setTimeline] = useState<Tweet[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [loadingUser, setLoadingUser] = useState<boolean>(true);
  const [loadingTimeline, setLoadingTimeline] = useState<boolean>(true);
  const [loadingUsers, setLoadingUsers] = useState<boolean>(true);

  useEffect(() => {
    loadUser();
  }, []);

  useEffect(() => {
    getData();
  }, [user]);

  const loadUser = async () => {
    const user = await getUser("1");
    setUser(user);
    setLoadingUser(false);
  };

  const getData = async () => {
    setLoading(true);
    const users = await getUsers();
    const following = filterFollowed(users);
    const timeline = await getTimeline(following);
    setUsers(users);
    setTimeline(timeline);
    setLoading(false);
    setLoadingTimeline(false);
    setLoadingUsers(false);
  };

  return (
    <div className="main">
      <div className="main__header">
        <Header user={user} loading={loadingUser} />
      </div>
      <div className="main__following">
        <UserList
          title="Siguiendo"
          users={filterCurrentUser(filterFollowed(users), user?.id)}
          loading={loadingUsers}
          onToggleFollow={(id) => console.warn(id)}
        ></UserList>
      </div>
      <div className="main__follow">
        <UserList
          title="No siguiendo"
          users={filterCurrentUser(filterUnfollowed(users), user?.id)}
          loading={loadingUsers}
          onToggleFollow={(id) => console.warn(id)}
        ></UserList>
      </div>
      <div className="main__timeline">
        <TweetList
          title="Timeline"
          tweets={timeline}
          loading={loadingTimeline}
        />
      </div>
      <div className="main__message">
        <TweetBox
          loading={loading}
          onSubmit={(text: string) => console.warn(text)}
        />
      </div>
    </div>
  );
}
export default Main;
